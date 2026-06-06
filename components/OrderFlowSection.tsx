"use client";

import { useState } from "react";
import OrderFlowPhone from "./OrderFlowPhone";

export default function OrderFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Greeting",
      description:
        "Customer says hi. The bot welcomes them and offers quick actions.",
    },
    {
      title: "Browse Menu",
      description:
        "Customer explores categories and selects what they'd like to order.",
    },
    {
      title: "Fulfilment",
      description:
        "Customer chooses delivery, takeaway or dine-in.",
    },
    {
      title: "Checkout",
      description:
        "Review the order and complete payment directly inside WhatsApp.",
    },
  ];

  return (
    <section 
    id="orderflow"
    className="py-28">
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Heading */}

        <div className="max-w-[760px]">

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-[#E9F9EF]
            text-[#25D366]
            text-[15px]
            mb-8
            "
          >
            Live product demo
          </div>

          <h2
            className="
            text-[64px]
            leading-[0.95]
            tracking-[-3px]
            font-[800]
            "
          >
            See an order go from
            <br />

            <span className="italic text-gray-500">
              "Hi"
            </span>

            {" "}to{" "}

            <span className="text-[#25D366]">
              paid
            </span>
            .
          </h2>

          <p
            className="
            mt-8
            text-[16px]
            leading-[1.7]
            text-gray-600
            max-w-[620px]
            "
          >
            Step through a real ordering flow. Every reply,
            decision and payment happens inside one WhatsApp
            thread — no app, no friction.
          </p>

        </div>

        {/* Main Layout */}

        <div
          className="
          mt-20
          grid
          lg:grid-cols-[560px_520px]
          gap-16
          items-start
          "
        >

          {/* Left Side */}

          <div className="space-y-6">

            {steps.map((step, index) => (

              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className="
                cursor-pointer
                transition-all
                duration-300
                "
              >

                <div
                  className={`
                  ${
                    activeStep === index
                      ? `
                      bg-white
                      border
                      border-gray-200
                      rounded-[28px]
                      px-8
                      py-7
                      shadow-sm
                    `
                      : `
                      px-3
                      py-2
                    `
                  }
                  `}
                >

                  <div className="flex gap-5">

                    {/* Number */}

                    <div
                      className={`
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-semibold
                      shrink-0
                      transition-all

                      ${
                        index < activeStep
                          ? "bg-[#22C55E] text-white"
                          : index === activeStep
                          ? "bg-black text-white"
                          : "border border-gray-300 text-gray-500"
                      }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Text */}

                    <div>

                      <h3
                        className={`
                        text-[16px]
                        ${
                          activeStep === index
                            ? "font-semibold"
                            : "font-medium"
                        }
                        `}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                        mt-2
                        text-[15px]
                        text-gray-500
                        leading-7
                        max-w-[420px]
                        "
                      >
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

            {/* Controls */}

            <div className="flex gap-4 pt-6">

              <button
                onClick={() =>
                  setActiveStep((prev) =>
                    Math.max(prev - 1, 0)
                  )
                }
                disabled={activeStep === 0}
                className="
                px-8
                py-3
                rounded-full
                border
                border-gray-200
                text-gray-500
                disabled:opacity-40
                "
              >
                ← Previous
              </button>

              <button
                onClick={() =>
                  setActiveStep((prev) =>
                    Math.min(prev + 1, 3)
                  )
                }
                disabled={activeStep === 3}
                className="
                px-8
                py-3
                rounded-full
                bg-black
                text-white
                disabled:bg-gray-400
                "
              >
                {activeStep === 3
                  ? "Completed"
                  : "Next →"}
              </button>

            </div>

          </div>

          {/* Phone */}

          <div
            className="
            flex
            justify-end
            -mt-50
            translate-x-12
            "
          >
            <div className="relative flex justify-center">
  {/* Green Glow */}
  <div
    className="
    absolute
    w-[550px]
    h-[550px]
    rounded-full
    bg-[#22C55E]
    opacity-[0.08]
    blur-[140px]
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    pointer-events-none
    "
  />

  <OrderFlowPhone activeStep={activeStep} />
</div>
          </div>

        </div>

      </div>
    </section>
  );
}