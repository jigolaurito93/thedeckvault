"use client";
import { createClient } from "@supabase/supabase-js";
import { FcGoogle } from "react-icons/fc";
import { signup } from "../login/actions";

const Register = () => {
  const handleGoogleRegister = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Construct the redirect URL based on the current window location
    const redirectTo = `${window.location.origin}/auth/callback`;

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
            type="text"
            name="password"
            id="password"
            placeholder="•••••••••"
            className="border rounded-sm p-2"
          />
          {/* <label htmlFor="confirmPassword" className="pl-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="•••••••••"
            className="border rounded-sm p-2"
          /> */}
          <button type="submit" className="p-2 border" formAction={signup}>
            Register
          </button>
        </form>
        or
        {/* OAuth */}
        <button
          className="flex items-center gap-2 border w-full justify-center py-2"
          onClick={() => handleGoogleRegister()}
        >
          <FcGoogle className="text-xl" />
          <h3>Sign Up with Google</h3>
        </button>
        {/* OAuth */}
      </div>
    </div>
  );
};

export default Register;
