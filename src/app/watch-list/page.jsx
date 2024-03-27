import React from "react";
import WatchForm from "../components/WatchForm";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

const WatchListPage = async () => {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  const { data: watches, error } = await supabase
    .from("watches")
    .select("*")
    .eq("user_id", user.id)
    .order("brand", { ascending: true });

  if (error) {
    console.log("»»»» ⟪–DEBUG–⟫  »» ", "there was an error");
  }

  console.log("»»»» ⟪–DEBUG–⟫  »» ", watches);

  return (
    <div>
      <h1 className=" text-center text-2xl">Watch List</h1>

      <div>
        <WatchForm />
      </div>

      <div>
        {watches.map((watch) => (
          <>
            <h1>{watch}</h1>

            <form action="deleteWatch">
              <input type="hidden" name="id" id={watch.id} />
              <button type="submit">delete</button>
            </form>
          </>
        ))}
      </div>

      <form
        action="/auth/signout"
        method="post"
        className=" flex flex-col justify-center items-center"
      >
        <button
          className=" bg-red-600 p-2 text-white rounded-md "
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default WatchListPage;
