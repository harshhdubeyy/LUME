"use client";

import PhoneMockup from "../components/PhoneMockup";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-gradient min-h-[115vh] pt-40">
      <div className="max-w-[1380px] mx-auto px-16">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] items-start">

          {/* LEFT CONTENT */}
          <div className="max-w-[620px] pl-8">

            <div
              className="
              inline-flex
              items-center
              gap-3
              border
              border-gray-200
              rounded-full
              px-7
              py-3
              bg-white
              mb-12
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />

              <span className="text-[15px] text-gray-600">
                New · WhatsApp Business API automation
              </span>
            </div>

            <h1
              className="
              font-[750]
              leading-[0.92]
              tracking-[-3px]
              text-[74px]
              "
            >
              Automate
              <br />
              customer
              <br />
              conversations on
              <br />

              <span className="text-[#25D366]">
                • WhatsApp
              </span>
              .
            </h1>

            <p
              className="
              mt-10
              text-[18px]
              leading-[1.65]
              text-gray-600
              max-w-[620px]
              "
            >
              Handle orders, bookings, support, and lead generation
              automatically — through intelligent WhatsApp workflows that feel
              personal at any scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-10">

              {/* Get Started */}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                group
                h-14
                px-8
                bg-black
                text-white
                rounded-full
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                "
              >
                Get started

                <span
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>

              {/* Watch Demo */}
              <button
                type="button"
                onClick={() => scrollToSection("workflows")}
                className="
                group
                h-14
                px-8
                rounded-full
                border
                border-[#EAEAEA]
                bg-white
                flex
                items-center
                transition-all
                duration-300
                hover:border-black
                hover:-translate-y-1
                hover:shadow-lg
                "
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-12
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>

                  Watch demo
                </span>
              </button>

            </div>

          </div>

          {/* PHONE */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}