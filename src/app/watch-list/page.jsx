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
      <div className=" bg-slate-200 flex justify-between px-4 p-2 ">
        <h1 className="text-2xl">My Watch List</h1>
        <form
          action="/auth/signout"
          method="post"
          className=" flex flex-col justify-center items-center"
        >
          <button
            className=" bg-red-600 text-xs py-2 px-4 text-white rounded-md "
            type="submit"
          >
            Sign Out
          </button>
        </form>
      </div>

      <WatchForm />

      <h2 className=" text-center text-lg">My list</h2>
      <div className="flex flex-wrap">
        {watches.map((watch) => (
          <div className=" bg-slate-200 w-fit min-w-[300px] p-2 rounded-md border border-slate-300 m-2">
            <p>Brand : {watch?.brand} </p>
            <p>Modal: {watch?.modal} </p>
            <p>Reference : {watch?.reference_number} </p>

            <form className="flex justify-end" action="deleteWatch">
              <input type="hidden" name="id" id={watch.id} />
              <button
                className=" bg-red-600 text-white text-xs py-1 px-4 rounded-md mt-4"
                type="submit"
              >
                delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;
