"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { RiNotification3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import CartModal from "./CartModal";
import { createClient } from "@/utils/supabase/client";
import { checkIfAdmin } from "@/utils/checkIfAdmin";
import { compareUserID } from "@/utils/compareUserID";
import Image from "next/image";
import { UserDataProps } from "@/utils/userDataProps";

const NavIcons = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState<UserDataProps>();

  const fetchUser = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      setIsUserLoggedIn(false);
      setUserEmail(null);
    } else {
      setIsUserLoggedIn(true);
      setUserEmail(data?.user?.email || null);
      console.log("data:", data);
      const userData = await compareUserID();
      setUserData(userData);
      console.log("user data:", userData);
    }
  };

  const handleProfileIcon = () => {};

  useEffect(() => {
    const checkAdminUser = async () => {
      setIsAdmin(await checkIfAdmin());
    };
    checkAdminUser();
    console.log("is admin", isAdmin);

    fetchUser();
  }, [isAdmin]);

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut({
      scope: "global",
    });
    if (!error) {
      setIsUserLoggedIn(false);
      setUserEmail(null);
      router.push("/logout");
    }
  };

  const handleProfile = () => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {userData?.image_url ? (
        <Image
          src={userData?.image_url || "/avatar.png"}
          alt="Profile Avatar"
          width={25}
          height={25}
          className="rounded-full cursor-pointer"
          onClick={handleProfile}
        />
      ) : (
        <FaRegUserCircle
          className="cursor-pointer text-xl"
          onClick={handleProfile}
        />
      )}
      {isUserLoggedIn && isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-sm z-20 w-full bg-white border flex flex-col gap-1">
          {isAdmin ? (
            <Link
              href={"/admin/dashboard"}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href={`/profile/${userData?.id}/edit`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              Profile
            </Link>
          )}

          <div
            className="cursor-pointer"
            onClick={() => {
              console.log("sign out");
              handleLogout();
            }}
          >
            Logout
          </div>
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
