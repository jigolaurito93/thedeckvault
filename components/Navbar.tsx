import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import Menu from "./Menu";
import { TbCardsFilled } from "react-icons/tb";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"} className="text-2xl tracking-wide">
          TDC
        </Link>
        <Menu />
      </div>
      {/* mobile */}
      {/* big screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-10">
          <Link href={"/"} className="flex gap-2 items-center">
            <TbCardsFilled className="text-[25px]" />
            <div className="text-2xl tracking-wide">TDV</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
      {/* big screen */}
    </div>
  );
};

export default Navbar;
