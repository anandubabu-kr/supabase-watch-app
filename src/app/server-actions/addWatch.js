"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addWatch(formData) {
  const modal = formData.get("modal");
  const brand = formData.get("brand");
  const referenceNumber = formData.get("referenceNumber");

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

  const { data, error } = await supabase.from("watches").insert([
    {
      modal,
      brand,
      reference_number: referenceNumber,
      user_id: user.id,
    },
  ]);

  if (error) {
    console.error("Errr", error);
    return;
  }

  revalidatePath("/watch-list");

  return { message: "success" };
}
