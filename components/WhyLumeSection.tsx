"use client";

import { motion , Variants } from "framer-motion";
import {
  Clock3,
  Magnet,
  ShoppingCart,
  Users,
  Database,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24/7 Availability",
    description:
      "Reply in seconds, every hour of every day — no missed customers, no after-hours gaps.",
  },
  {
    icon: Magnet,
    title: "Lead Capture",
    description:
      "Qualify and tag every new conversation automatically. Nothing slips through the cracks.",
  },
  {
    icon: ShoppingCart,
    title: "Order Automation",
    description:
      "Menus, carts, payments and confirmations — all handled inside the chat thread.",
  },
  {
    icon: Users,
    title: "Customer Retention",
    description:
      "Send timely reminders, offers and follow-ups that bring buyers back without spam.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Sync contacts, orders and intents with your existing CRM in a single click.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Conversation funnels, intent insights and revenue impact — measured in real time.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants= {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function WhyLumeSection() {
  return (
    <section 
    id="why-lume"
    className="relative py-28 overflow-hidden">
      
      {/* Soft Green Glow */}
      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-green-400/10
        blur-[140px]
        pointer-events-none
        "
      />

      <div className="relative max-w-[1200px] mx-auto px-8">

        {/* Heading */}

        <div className="max-w-[640px]">
          <p
            className="
            uppercase
            tracking-[0.25em]
            text-gray-400
            text-[12px]
            mb-5
            "
          >
            WHY LUME
          </p>

          <h2
            className="
            text-[58px]
            md:text-[64px]
            leading-[1]
            font-semibold
            tracking-[-0.03em]
            "
          >
            Built for the
            <br />
            <span className="text-gray-500">
              things that matter.
            </span>
          </h2>
        </div>

        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          border
          border-[#EAEAEA]
          rounded-[32px]
          overflow-hidden
          bg-white/70
          backdrop-blur-sm
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="
                p-10
                min-h-[280px]
                border-b
                border-r
                border-[#EAEAEA]
                group
                bg-white
                transition-all
                duration-500
                transform
                hover:bg-white
                hover:-translate-y-1
                hover:shadow-[0_10px_50px_rgba(34,197,94,0.12)]
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-[16px]
                  border
                  border-[#EAEAEA]
                  flex
                  items-center
                  justify-center
                  mb-10
                  transition-all
                  duration-300
                  group-hover:border-green-200
                  group-hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]
                  "
                >
                  <Icon size={24} />
                </div>

                <h3
                  className="
                  text-[24px]
                  font-medium
                  tracking-[-0.02em]
                  mb-5
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                  text-[16px]
                  leading-[1.8]
                  text-gray-600
                  "
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}