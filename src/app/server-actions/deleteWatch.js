"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteWatch(formData) {
  const watchId = formData.get("id");

  const cookiesStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookiesStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  if (!user) {
    console.log("»»»» ⟪–DEBUG–⟫  »» ", "no user");
    return;
  }

  const { data, error } = await supabase
    .from("watches")
    .delete()
    .match({ id: watchId, user_id: user.id });

  if (error) {
    console.error("Errr", error);
    return;
  }

  revalidatePath("/watch-list");

  return { message: "Delete success" };
}
