"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mobileLinks } from "@/data/navbar/mobile-links";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className="text-3xl font-semibold" />
      </SheetTrigger>
      <SheetContent className="bg-black text-white border-none">
        <div className="flex flex-col h-screen items-center gap-9 text-2xl justify-center w-full border">
          {mobileLinks.map((link) => {
            const { title, url } = link;
            return (
              <SheetClose asChild>
                <Link href={url}>{title}</Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
