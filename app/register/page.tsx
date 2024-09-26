"use client";

import { FcGoogle } from "react-icons/fc";
import { signup } from "../login/actions";
import { createClient } from "@/utils/supabase/client";

const Register = () => {
  const handleGoogleRegister = async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    console.log("Supabase URL:", supabaseUrl);
    console.log("Supabase Anon Key:", supabaseAnonKey);

    const supabase = createClient();

    // Construct the redirect URL based on the current window location
    const redirectTo = `${window.location.origin}/auth/callback`;
    console.log("Redirect URL:", redirectTo);

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });
  };

  return (
    <div>
      <div className="py-20 w-[80vw] max-w-[25rem] mx-auto flex flex-col items-center gap-5 ">
        <h1 className=" text-2xl">Create an Account</h1>
        <p className="text-sm text-center text-gray-500">
          Create an account to access exclusive Pokemon products, enjoy
          personalized shopping, and stay updated with the latest releases.
        </p>
        <form action="" className="flex flex-col w-full gap-2">
          <label htmlFor="email" className="pl-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border rounded-sm p-2"
          />
          <label htmlFor="password" className="pl-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="•••••••••"
            className="border rounded-sm p-2"
          />
          <button type="submit" className="p-2 border" formAction={signup}>
            Sign Up
          </button>
        </form>
        <button
          className="flex items-center gap-2 border w-full justify-center py-2"
          onClick={handleGoogleRegister}
        >
          <FcGoogle className="text-xl" />
          <h3>Sign Up with Google</h3>
        </button>
      </div>
    </div>
  );
};

export default Register;
