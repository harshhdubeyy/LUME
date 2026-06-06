"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  Mail,
  LifeBuoy,
  Briefcase,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [automationNeed, setAutomationNeed] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const { error } = await supabase
        .from("leads")
        .insert({
          name,
          email,
          company,
          automation_need: automationNeed,
        });

      if (error) {
        console.error(error);
        alert("Failed to submit request");
        return;
      }

      alert("Demo request submitted successfully 🚀");

      setName("");
      setEmail("");
      setCompany("");
      setAutomationNeed("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
    id="contact"
    className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}

          <div>
            <p className="uppercase tracking-[0.22em] text-[13px] text-gray-400 mb-6">
              Contact
            </p>

            <h2 className="text-[58px] leading-[0.95] tracking-[-0.04em] font-semibold">
              Talk to a human.
              <br />
              <span className="text-gray-500">
                We reply within a day.
              </span>
            </h2>

            <div className="mt-12 space-y-7">

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-[14px] border border-[#EAEAEA] flex items-center justify-center">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="uppercase text-gray-400 tracking-[0.18em] text-xs">
                    General
                  </p>

                  <p className="text-[18px] font-medium">
                    hello@lume.app
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-[14px] border border-[#EAEAEA] flex items-center justify-center">
                  <LifeBuoy size={20} />
                </div>

                <div>
                  <p className="uppercase text-gray-400 tracking-[0.18em] text-xs">
                    Support
                  </p>

                  <p className="text-[18px] font-medium">
                    support@lume.app
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-[14px] border border-[#EAEAEA] flex items-center justify-center">
                  <Briefcase size={20} />
                </div>

                <div>
                  <p className="uppercase text-gray-400 tracking-[0.18em] text-xs">
                    Sales
                  </p>

                  <p className="text-[18px] font-medium">
                    sales@lume.app
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-[14px] border border-[#EAEAEA] flex items-center justify-center">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="uppercase text-gray-400 tracking-[0.18em] text-xs">
                    Phone
                  </p>

                  <p className="text-[18px] font-medium">
                    +91 98765 43210
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-3 mt-12">
                <a
    href="https://linkedin.com/in/YOUR-LINKEDIN-ID"
    target="_blank"
    rel="noopener noreferrer"
    className="
    h-11
    px-5
    rounded-full
    border
    border-[#EAEAEA]
    flex
    items-center
    transition-all
    duration-300
    hover:border-green-300
    hover:bg-green-50
    hover:text-green-600
    hover:-translate-y-0.5
    "
              >
                LinkedIn
              </a>

              <a
                href="https://instagram.com/YOUR-INSTAGRAM-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="
                h-11
                px-5
                rounded-full
                border
                border-[#EAEAEA]
                flex
                items-center
                transition-all
                duration-300
                hover:border-green-300
                hover:bg-green-50
                hover:text-green-600
                hover:-translate-y-0.5
                "
              >
                Instagram
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
            border
            border-[#EAEAEA]
            rounded-[28px]
            p-8
            bg-white
            shadow-sm
            "
          >
            <h3 className="text-[20px] font-medium mb-2">
              Request a demo
            </h3>

            <p className="text-gray-500 mb-8">
              Tell us a bit about your business.
              We'll set you up.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-3">
                  Your Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aanya Sharma"
                  className="
                  w-full
                  h-12
                  px-4
                  border
                  border-[#EAEAEA]
                  rounded-[14px]
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:border-green-400
                  focus:ring-4
                  focus:ring-green-100
                  "
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-3">
                  Work Email
                </label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="
                  w-full
                  h-12
                  px-4
                  border
                  border-[#EAEAEA]
                  rounded-[14px]
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:border-green-400
                  focus:ring-4
                  focus:ring-green-100
                  "
                />
              </div>

            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-3">
                Company
              </label>

              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Spice Garden Pvt Ltd"
                className="
                w-full
                h-12
                px-4
                border
                border-[#EAEAEA]
                rounded-[14px]
                transition-all
                duration-300
                focus:outline-none
                focus:border-green-400
                focus:ring-4
                focus:ring-green-100
                "
              />
            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-3">
                What do you want to automate?
              </label>

              <textarea
                rows={4}
                value={automationNeed}
                onChange={(e) => setAutomationNeed(e.target.value)}
                placeholder="Orders, bookings, appointments, customer support..."
                className="
                w-full
                p-4
                border
                border-[#EAEAEA]
                rounded-[14px]
                transition-all
                duration-300
                focus:outline-none
                focus:border-green-400
                focus:ring-4
                focus:ring-green-100
                "
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="
              mt-6
              h-12
              px-7
              bg-black
              text-white
              rounded-full
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:bg-green-500
              hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
              hover:-translate-y-0.5
              active:scale-95
              disabled:opacity-50
              "
            >
              {loading ? "Submitting..." : "Request demo"}

              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}