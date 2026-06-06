export default function PhoneMockup() {
  return (
    <div className="relative ml-54 float-phone">

      {/* ORDER CARD */}

      <div
        className="
        absolute
        -left-16
        top-20
        bg-white
        rounded-[18px]
        px-3
        py-2
        w-[130px]
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        z-20
        "
      >
        <div className="font-medium text-[12px]">
          Order confirmed
        </div>

        <div className="text-[11px] text-gray-500">
          Auto-reply · 2s
        </div>
      </div>

      {/* LEADS CARD */}

      <div
        className="
        absolute
        -right-16
        bottom-52
        bg-white
        rounded-[20px]
        px-3
        py-2
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        z-20
        "
      >
        <div className="font-semibold text-[14px]">
          +312 leads today
        </div>

        <div className="text-[13px] text-gray-500">
          across 4 channels
        </div>
      </div>

     <div
      className="
      absolute
      inset-0
      blur-3xl
      bg-green-100/40
      scale-110
      rounded-full
      "
      />

      {/* PHONE */}

      <div
        className="
        w-[330px]
        h-[760px]
        bg-white
        rounded-[52px]
        border-[8px]
        border-black
        overflow-hidden
        relative
        transition-all
        duration-500
        hover:scale-[1.02]
        hover:shadow-[0_40px_100px_rgba(0,0,0,0.15)]
        "
      >

        {/* HEADER */}

        <div className="px-6 pt-5">

          <div className="flex justify-between text-[14px] font-medium">
            <span>9:41</span>

            <div className="flex items-center gap-2">
              <div className="w-3 h-2 bg-gray-700 rounded-full" />
              <span>100%</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">

            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              🍽️
            </div>

            <div>
              <div className="font-medium text-[15px]">
                Spice Garden
              </div>

              <div className="text-[#25D366] text-[13px]">
                online · auto-reply
              </div>
            </div>

          </div>

        </div>

        {/* CHAT */}

        <div
          className="
          mt-4
          h-full
          px-5
          pt-4
          bg-[radial-gradient(#ececec_1px,transparent_1px)]
          [background-size:18px_18px]
          "
        >

          {/* USER MESSAGE */}

          <div className="flex justify-end">

            <div
              className="
              bg-[#DDF6C9]
              px-4
              py-3
              rounded-[22px]
              text-[14px]
              max-w-[220px]
              "
            >
              Hi, do you deliver to Andheri West?
            </div>

          </div>

          <div className="text-right text-gray-400 text-[12px] mt-2">
            9:38 AM
          </div>

          {/* BOT MESSAGE */}

          <div
            className="
            mt-6
            bg-white
            rounded-[22px]
            p-4
            shadow-sm
            w-[220px]
            "
          >
            <p className="leading-6 text-[14px]">
              Namaste! Yes, we deliver to Andheri West in ~30 mins.
            </p>

            <p className="mt-3 text-[14px]">
              What would you like to do?
            </p>

          </div>

        

          {/* BUTTONS */}

          <div className="space-y-2 mt-4 w-[220px]">

            <button
              className="
              w-full
              border
              border-green-300
              rounded-[18px]
              py-3
              text-[#25D366]
              text-[14px]
              "
            >
              View Menu
            </button>

            <button
              className="
              w-full
              border
              border-green-300
              rounded-[18px]
              py-3
              text-[#25D366]
              text-[14px]
              "
            >
              Place Order
            </button>

            <button
              className="
              w-full
              border
              border-green-300
              rounded-[18px]
              py-3
              text-[#25D366]
              text-[14px]
              "
            >
              Track My Order
            </button>
            <div className="text-gray-400 text-[12px] mt-2">
            9:38 AM
          </div>

          </div>

          {/* SECOND USER MESSAGE */}

          <div className="flex justify-end mt-4">

            <div
              className="
              bg-[#DDF6C9]
              px-3
              py-2
              rounded-[20px]
              text-[14px]
              "
            >
              View Menu
            </div>

          </div>

          <div className="text-right text-gray-400 text-[12px] mt-1">
            9:39 AM
          </div>

          {/* TYPING BUBBLE */}

          <div
            className="
            mt-4
            w-14
            h-8
            rounded-full
            bg-white
            shadow-sm
            flex
            items-center
            justify-center
            gap-1
            "
          >
            <div className="w-2 h-2 rounded-full bg-gray-300 bg-typing-dot-1" />
            <div className="w-2 h-2 rounded-full bg-gray-300 bg-typing-dot-2" />
            <div className="w-2 h-2 rounded-full bg-gray-300 bg-typing-dot-3" />
          </div>

        </div>

      </div>

    </div>
  );
}