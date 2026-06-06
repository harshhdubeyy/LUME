"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const plans = [
  {
    name: "Starter",
    price: "999",
    description:
      "Perfect for small restaurants and local businesses.",
    button: "Get Started",
    features: [
      "1 WhatsApp number",
      "500 messages/day",
      "Menu & ordering bot",
      "Order tracking",
      "Email support",
    ],
  },

  {
    name: "Growth",
    price: "2499",
    popular: true,
    description:
      "For growing businesses needing automation and analytics.",
    button: "Start Free Trial",
    features: [
      "3 WhatsApp numbers",
      "Unlimited messages",
      "Smart menus",
      "Analytics dashboard",
      "Priority support",
      "Custom greetings",
    ],
  },

  {
    name: "Enterprise",
    price: "4999",
    description:
      "Full-scale automation for large operations.",
    button: "Contact Sales",
    features: [
      "Unlimited numbers",
      "CRM Integration",
      "Multi-language",
      "Dedicated manager",
      "White-label support",
    ],
  },
];

export default function PricingSection() {
  const startPayment = async (amount: number) => {
  try {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const order = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "LUME",

      description: "Subscription Plan",

      order_id: order.id,

      handler: async function () {
        alert("Payment Successful 🎉");
      },

      theme: {
        color: "#25D366",
      },
    };

    const razorpay = new (window as any).Razorpay(options);

    razorpay.open();
  } catch (error) {
    console.error(error);
    alert("Payment failed");
  }
};

const scrollToContact = () => {
  const section = document.getElementById("contact");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <section
    id="pricing" 
    className="relative py-24 overflow-hidden">

      {/* Soft Green Glow */}

      <div
        className="
        absolute
        left-1/2
        top-32
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-green-400/8
        blur-[160px]
        rounded-full
        pointer-events-none
        "
      />

      <div className="relative max-w-[1000px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center max-w-[760px] mx-auto">

          <p
            className="
            uppercase
            tracking-[0.25em]
            text-[12px]
            text-green-500
            mb-5
            "
          >
            PRICING
          </p>

          <h2
            className="
            text-[48px]
            md:text-[56px]
            font-semibold
            tracking-[-0.04em]
            leading-[1]
            "
          >
            Simple, transparent pricing
          </h2>

          <p
            className="
            text-[18px]
            text-gray-500
            mt-6
            "
          >
            No hidden fees. No per-message charges.
            Start free, scale as you grow.
          </p>

        </div>

        {/* Cards */}
        {/* Cards */}

<div
  className="
  mt-16
  grid
  lg:grid-cols-3
  gap-6
  items-start
  "
>
  {plans.map((plan) => (
    <div key={plan.name} className="relative">

      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <span
            className="
            bg-[#25D366]
            text-white
            text-[11px]
            font-semibold
            tracking-[0.08em]
            uppercase
            px-5
            py-2
            rounded-full
            shadow-[0_10px_30px_rgba(37,211,102,0.35)]
            "
          >
            Most Popular
          </span>
        </div>
      )}

      <motion.div
        whileHover={{ y: -6 }}
        className={`
          flex
          flex-col
          rounded-[28px]
          border
          px-8
          py-8
          transition-all
          duration-500
          ${
            plan.popular
              ? "bg-black text-white border-black"
              : "bg-white border-[#EAEAEA]"
          }
        `}
      >

        <p
          className="
          uppercase
          tracking-[0.25em]
          text-[12px]
          mb-4
          "
        >
          {plan.name}
        </p>

        <div className="flex items-end gap-2 mb-5">
          <span
            className="
            text-[48px]
            font-semibold
            tracking-[-0.04em]
            leading-none
            "
          >
            ₹{plan.price}
          </span>

          <span className="text-[16px] opacity-70 mb-1">
            /month
          </span>
        </div>

        <p
          className="
          text-[15px]
          leading-7
          opacity-80
          mb-8
          "
        >
          {plan.description}
        </p>

        <div className="space-y-4 flex-1">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <Check
                size={16}
                className="text-green-500"
              />

              <span className="text-[15px]">
                {feature}
              </span>
            </div>
          ))}
        </div>
        <button
  type="button"
  onClick={() => {
    if (plan.name === "Starter") {
      startPayment(999);
    } else if (plan.name === "Growth") {
      startPayment(2499);
    } else {
      scrollToContact();
    }
  }}
  className={`
    mt-8
    w-full
    rounded-full
    py-3.5
    text-[16px]
    font-medium
    transition-all
    duration-500
    hover:-translate-y-1
    ${
      plan.popular
        ? "bg-white text-black hover:bg-green-500 hover:text-white"
        : "bg-black text-white hover:bg-green-500"
    }
  `}
>
  {plan.button}
</button>

      </motion.div>

    </div>
  ))}
</div>

       

        {/* Footer */}

        <p
          className="
          text-center
          text-gray-500
          mt-12
          text-[15px]
          "
        >
          All plans include a <span className="font-medium text-black">7-day free trial</span>.
          No credit card required.
        </p>

      </div>
    </section>
  );
}