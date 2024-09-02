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
          The Deck Vault
        </Link>
        <Menu />
      </div>
      {/* mobile */}
      {/* big screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 flex gap-2 items-center border">
          <TbCardsFilled className="text-3xl" />
          <Link href={"/"} className="text-2xl tracking-wide">
            The Deck Vault
          </Link>
        </div>
        {/* right */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
      {/* big screen */}
    </div>
  );
};

export default Navbar;
