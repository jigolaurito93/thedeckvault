"use client";
import { createClient } from "@/utils/supabase/client";
import { login } from "./actions";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const handleGoogleRegister = async () => {
    const supabase = createClient();
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
        <h1 className=" text-2xl text-center">
          Welcome back! Log in to your account
        </h1>
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
          <button type="submit" className="p-2 border" formAction={login}>
            Log In
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

export default LoginPage;
