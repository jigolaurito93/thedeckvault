"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { RiNotification3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <FaRegUserCircle
        className="cursor-pointer text-xl"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-sm z-20">
          <Link href={"/"}>Profile</Link>
          <div className="cursor-pointer">Logout</div>
        </div>
      )}
      <RiNotification3Line className="cursor-pointer text-xl" />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <BsCart3 className="text-xl z-20" />
        {isCartOpen && <CartModal />}
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-accent-1 flex items-center text-white text-sm justify-center rounded-full">
          3
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
