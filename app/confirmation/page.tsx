import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 text-center gap-6 py-16">
      <FaCheckCircle className="text-green-500 text-4xl" />
      <h1 className="text-xl font-semibold">Thank you for registering!</h1>
      <h2 className=" text-sm">
        Please check your email to verify your account. Follow the link in the
        email to complete your registration and access your account.
      </h2>
      <div className="text-xs">
        If you don&apos;t see the email, check your spam or junk folder.
      </div>
    </div>
  );
};

export default ConfirmationPage;
