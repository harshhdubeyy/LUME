import { supabase } from "./supabase";

export async function saveUser(user: any) {
  console.log("TRYING TO SAVE:", user);

  const { data, error } = await supabase
    .from("users")
    .upsert({
      id: user.id,
      email: user.email,
      name: user.user_metadata?.full_name,
      avatar: user.user_metadata?.avatar_url,
      plan: "free",
    })
    .select();

  console.log("RESULT:", data);
  console.log("ERROR:", error);
}