import React from "react";
import Logo from "./logo";
import { NavigationMenuDemo } from "./nav-menu";
import { UserCircle2 } from "lucide-react";

const Navbar = () => {
  return (
    <div className="py-3 flex w-full items-center justify-between  border-b px-14">
      <div className="flex items-center gap-10">
        <Logo />
        <NavigationMenuDemo />
      </div>
      <div className="cursor-pointer">
        <UserCircle2 />
      </div>
    </div>
  );
};

export default Navbar;
