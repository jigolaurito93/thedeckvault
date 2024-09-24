import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const LogoutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 text-center gap-6 py-16">
      <FaCheckCircle className="text-green-500 text-4xl" />
      <h1 className="text-xl font-semibold">You have been logged out</h1>
      <h2 className=" text-sm">
        You’ve successfully logged out. We hope to see you again soon! If you
        need to log back in, click the button below.
      </h2>
      <Link className="text-xs border px-3 py-1" href={"/login"}>
        Click here to log in
      </Link>
    </div>
  );
};

export default LogoutPage;
