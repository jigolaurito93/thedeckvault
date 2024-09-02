"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="cursor-pointer">
      <RxHamburgerMenu
        className="cursor-pointer text-xl"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute bg-black top-20 text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Logout</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
