import React from "react";
import Logo from "./logo";
import { NavigationMenuDemo } from "./nav-menu";
import { UserCircle2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <div className="py-3 sticky top-0 bg-background z-6000 flex w-full items-center justify-between  border-b px-14">
      <div className="flex items-center gap-10">
        <Logo />
        <NavigationMenuDemo />
      </div>
      <div className="flex items-center gap-5">
        <ThemeToggle />
        <UserCircle2 className="cursor-pointer" size={35} />
      </div>
    </div>
  );
};

export default Navbar;
