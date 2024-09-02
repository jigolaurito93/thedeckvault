import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between">
        <Link href={"/"} className="text-2xl tracking-wide">The Deck Vault</Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
