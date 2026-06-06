"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { signInWithGoogle } from "@/lib/auth";
import { saveUser } from "@/lib/user";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      setUser(data.user);

      if (data.user) {
        await saveUser(data.user);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        await saveUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleGetStarted = () => {
    scrollToSection("contact");
  };

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/80
      backdrop-blur-md
      border-b
      border-gray-100
      "
    >
      <div
        className="
        max-w-[1400px]
        mx-auto
        px-10
        h-16
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-3"
        >
          <div
            className="
            w-7
            h-7
            rounded-[10px]
            bg-[#25D366]
            border-2
            border-black
            "
          />

          <span
            className="
            text-[18px]
            font-bold
            tracking-tight
            "
          >
            LUME
          </span>
        </button>

        {/* Navigation */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-12
          text-[15px]
          text-gray-700
          "
        >
          <button
            type="button"
            onClick={() => scrollToSection("product")}
            className="hover:text-black transition"
          >
            Product
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("workflows")}
            className="hover:text-black transition"
          >
            Workflows
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="hover:text-black transition"
          >
            Pricing
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hover:text-black transition"
          >
            Contact
          </button>
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={
                  user.user_metadata?.avatar_url ||
                  "https://ui-avatars.com/api/?name=User"
                }
                alt="avatar"
                className="
                w-9
                h-9
                rounded-full
                border
                border-gray-200
                "
              />

              <span
                className="
                text-[14px]
                font-medium
                text-gray-700
                "
              >
                {user.user_metadata?.full_name?.split(" ")[0] || "User"}
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="
                text-[14px]
                text-gray-500
                hover:text-black
                transition-colors
                "
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={signInWithGoogle}
              className="
              text-[15px]
              text-gray-600
              hover:text-black
              transition-colors
              "
            >
              Sign in
            </button>
          )}

          <button
            type="button"
            onClick={handleGetStarted}
            className="
            bg-black
            text-white
            px-6
            py-2.5
            rounded-full
            text-[15px]
            font-medium
            hover:bg-green-500
            hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]
            transition-all
            duration-300
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}