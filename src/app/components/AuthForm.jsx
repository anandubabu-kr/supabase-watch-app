"use client";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthForm = () => {
  const supabase = createClientComponentClient();

  return (
    <>
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        showLinks={false}
        providers={[]}
        redirectTo="http://localhost:3000/auth/callback"
        appearance={{
          theme: "dark",
          button: {
            className: "",
          },
          input: {
            className: "mx-6",
          },
        }}
      />
    </>
  );
};

export default AuthForm;
