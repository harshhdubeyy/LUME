"use client";

import { supabase } from "@/lib/supabase";

export default function TestPayment() {
  const handlePayment = async () => {
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 999,
        }),
      });

      const order = await response.json();

      console.log("ORDER:", order);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name: "LUME",

        description: "Starter Plan",

        order_id: order.id,

        handler: async function (paymentResponse: any) {
          try {
            const {
              data: { user },
            } = await supabase.auth.getUser();

            console.log("CURRENT USER:", user);

            if (!user) {
              alert("Please login first");
              return;
            }

            const subscriptionResult = await supabase
              .from("subscriptions")
              .insert({
                user_id: user.id,
                razorpay_order_id: order.id,
                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,
                amount: 999,
                status: "active",
              });

            console.log(
              "SUBSCRIPTION RESULT:",
              JSON.stringify(subscriptionResult, null, 2)
            );

            if (subscriptionResult.error) {
              alert(
                "SUBSCRIPTION ERROR:\n" +
                  JSON.stringify(
                    subscriptionResult.error,
                    null,
                    2
                  )
              );
              return;
            }

            const userResult = await supabase
              .from("users")
              .update({
                plan: "pro",
              })
              .eq("id", user.id);

            console.log(
              "USER UPDATE RESULT:",
              JSON.stringify(userResult, null, 2)
            );

            if (userResult.error) {
              alert(
                "USER ERROR:\n" +
                  JSON.stringify(
                    userResult.error,
                    null,
                    2
                  )
              );
              return;
            }

            alert("Payment Successful 🎉");

            console.log("Subscription Created");
          } catch (err) {
            console.error("HANDLER ERROR:", err);
            alert("Handler Error");
          }
        },

        theme: {
          color: "#000000",
        },
      };

      const razorpay = new (window as any).Razorpay(options);

      razorpay.open();
    } catch (err) {
      console.error("PAYMENT ERROR:", err);
      alert("Payment Initialization Failed");
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={handlePayment}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Pay ₹999
      </button>
    </div>
  );
}