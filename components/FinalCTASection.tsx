"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
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
    <section className="relative py-20 overflow-hidden bg-white">
    
      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-green-400/10
        blur-[140px]
        rounded-full
        pointer-events-none
        "
      />

      <div className="relative max-w-[1100px] mx-auto px-8">

        <motion.div
          className="
            text-center
          py-20
          "
        >

          <p
            className="
            uppercase
            tracking-[0.25em]
            text-[12px]
            text-green-500
            mb-6
            "
          >
            READY TO SCALE?
          </p>

          <h2
            className="
            text-[56px]
            md:text-[64px]
            leading-[1]
            tracking-[-0.04em]
            font-semibold
            "
          >
            Ready to automate
            <br />
            your business?
          </h2>

          <p
            className="
            mt-8
            text-[20px]
            text-gray-500
            max-w-[650px]
            mx-auto
            leading-8
            "
          >
            Handle orders, bookings, support and customer
            conversations from one intelligent assistant.
          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            mt-12
            "
          >
            <button
  type="button"
  onClick={() => scrollToSection("contact")}
  className="
  px-8
  py-4
  rounded-full
  bg-black
  text-white
  font-medium
  transition-all
  duration-500
  hover:bg-green-500
  hover:-translate-y-1
  "
>
  Book Demo →
</button>

            <button
  type="button"
  onClick={() => scrollToSection("pricing")}
  className="
  px-8
  py-4
  rounded-full
  border
  border-[#EAEAEA]
  bg-white
  font-medium
  transition-all
  duration-500
  hover:border-green-300
  hover:bg-green-50
  "
>
  View Pricing
</button>
          </div>

          <p
            className="
            mt-8
            text-[15px]
            text-gray-400
            "
          >
            Trusted by restaurants, cafes and local businesses.
          </p>

        </motion.div>

      </div>
    </section>
  );
}