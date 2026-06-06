"use client";

import { useEffect, useRef } from "react";

type Props = {
  activeStep: number;
};

export default function OrderFlowPhone({
  activeStep,
}: Props) {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [activeStep]);

  return (
    <div
      className="
      w-[400px]
      h-[790px]
      bg-white
      rounded-[52px]
      border-[8px]
      border-black
      overflow-hidden
      relative
      shadow-[0_40px_80px_rgba(0,0,0,0.16)]
      animate-[float_5s_ease-in-out_infinite]
      "
    >
      {/* Status Bar */}

      <div className="px-6 pt-5 border-b border-gray-100 bg-white">
        <div className="flex justify-between text-[13px] font-medium">
          <span>9:41</span>

          <div className="flex items-center gap-2">
            <div className="w-3 h-2 bg-gray-700 rounded-full" />
            <span>100%</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-lg text-gray-500">←</span>

            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              🍽️
            </div>

            <div>
              <div className="font-semibold text-[15px]">
                Spice Garden
              </div>

              <div className="text-[#25D366] text-[13px]">
                ● online · auto-reply
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-gray-500 text-sm">
            <span>📹</span>
            <span>📞</span>
            <span>⋮</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}

      <div
        ref={chatRef}
        className="
        h-[590px]
        overflow-y-auto
        px-5
        pt-4
        bg-[radial-gradient(#ececec_1px,transparent_1px)]
        [background-size:18px_18px]
        "
      >
        {/* STEP 1 */}


<div className="flex flex-col items-end">
  <div className="bg-[#DDF6C9] px-4 py-2.5 rounded-[18px] text-[13px]">
    Hi
  </div>

  <span className="text-[11px] text-gray-400 mt-1 mr-1">
    9:41 AM
  </span>
</div>

<div className="mt-4">
  <div className="bg-white rounded-[22px] p-3 shadow-sm w-[250px]">
    <p className="text-[13px]">
      Namaste! Welcome to Spice Garden 🍽️
    </p>

    <p className="mt-2 text-[13px]">
      I'm your order assistant.
    </p>

    <p className="mt-2 text-[13px]">
      What would you like to do?
    </p>
  </div>
</div>

<div className="space-y-2 mt-5 w-[250px]">
          <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366] text-[13px]">
            View Menu
          </button>

          <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366] text-[13px]">
            Place Order
          </button>

          <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366] text-[13px]">
            Track My Order
          </button>

          <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366] text-[13px]">
            Leave A Review
          </button>
          <span className="text-[11px] text-gray-400 ml-2 mt-1 block">
    9:41 AM
  </span>
        </div>

        {/* STEP 2 */}

        {activeStep >= 1 && (
          <>
            <div className="flex justify-end mt-5">
              <div className="bg-[#DDF6C9] px-4 py-2.5 rounded-[18px] text-[13px]">
                View Menu
              </div>
            </div>

            <div className="text-right text-gray-400 text-[12px] mt-1">
              9:41 AM
            </div>

            <div className="mt-5 bg-white rounded-[22px] p-3 shadow-sm w-[250px]">
              Here's our menu — pick a category.
            </div>

            <div className="space-y-2 mt-5 w-[250px]">
              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Starters
              </button>

              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Main Course
              </button>

              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Drinks
              </button>

              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Combos
              </button>
                      <div className="text-[11px] text-gray-400 mt-1">
  9:42 AM
</div>
            </div>
          </>
        )}


        {/* STEP 3 */}

        {activeStep >= 2 && (
          <>
            <div className="flex justify-end mt-5">
              <div className="bg-[#DDF6C9] px-4 py-2.5 rounded-[18px] text-[13px]">
                Main Course
              </div>
            </div>

            <div className="text-right text-gray-400 text-[12px] mt-1">
              9:42 AM
            </div>
            

            <div className="mt-5 bg-white rounded-[22px] p-3 shadow-sm w-[250px]">
              <p>1. Paneer Butter Masala — ₹220</p>
              <p>2. Dal Makhani — ₹180</p>
              <p>3. Paneer Tikka — ₹250</p>
              <p>4. Veg Biryani — ₹200</p>

              <p className="mt-4">
                Reply with the item number to add to cart.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
  9:42 AM
</div>

            <div className="flex justify-end mt-5">
  <div className="bg-[#DDF6C9] px-4 py-2.5 rounded-[18px] text-[13px]">
    1, 3, Checkout
  </div>
</div>

<div className="text-right text-gray-400 text-[11px] mt-1">
  9:43 AM
</div>

<div className="mt-5 bg-white rounded-[18px] p-3 shadow-sm w-[250px]">
  Great! How would you like this order?
</div>



            <div className="space-y-2 mt-5 w-[250px]">
              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Dine In
              </button>

              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Takeaway
              </button>

              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Delivery
              </button>
                  <div className="text-[11px] text-gray-400 mt-1">
  9:43 AM
</div>
            </div>
          </>
        )}
    

        {/* STEP 4 */}

        {activeStep >= 3 && (
          <>
            <div className="flex justify-end mt-5">
              <div className="bg-[#DDF6C9] px-4 py-2.5 rounded-[18px] text-[13px]">
                Delivery
              </div>
            </div>

            <div className="text-right text-gray-400 text-[11px] mt-1">
  9:43 AM
</div>
            

            <div className="mt-5 bg-white rounded-[22px] p-3 shadow-sm w-[250px]">
              Please share your delivery address.
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
  9:44 AM
</div>

            <div className="flex justify-end mt-4">
              <div className="bg-[#DDF6C9] px-4 py-2.5 rounded-[18px] text-[13px] max-w-[240px]">
                Flat 12B, Andheri West, Mumbai
              </div>
  
            </div>

            <div className="text-right text-gray-400 text-[11px] mt-1">
  9:44 AM
</div>

            <div className="mt-4 bg-white rounded-[18px] p-3 shadow-sm w-[250px]">
              <p className="font-medium mb-3">
                Order Summary
              </p>

              <p>• Paneer Butter Masala — ₹220</p>
              <p>• Paneer Tikka — ₹250</p>
              <p>• Delivery — ₹40</p>

              <p className="mt-4 font-medium">
                Total — ₹540
              </p>

              <p className="mt-4 text-sm">
                Address: Flat 12B, Andheri West
              </p>
            </div>
  

            <div className="space-y-2 mt-5 w-[250px] mb-10">
              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Confirm & Pay
              </button>

              <button className="w-full border
border-green-200
rounded-[16px]
py-3
text-[#25D366]
text-[13px]
cursor-pointer
transition-all
duration-200
hover:bg-[#25D366]
hover:text-white
hover:border-[#25D366]">
                Edit Order
              </button>
                        <div className="text-[11px] text-gray-400 mt-1">
  9:44 AM
</div>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}
