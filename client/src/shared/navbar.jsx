import React from "react";
import Logo from "./logo";
import { NavigationMenuDemo } from "./nav-menu";
import { UserCircle2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="py-3 sticky top-0 bg-background z-500 flex w-full items-center justify-between border-b px-4 sm:px-6 md:px-10 lg:px-14">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
        <Logo />
        <NavigationMenuDemo />
      </div>

      {/* Right: Theme + User */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <ThemeToggle />
        <UserCircle2 className="cursor-pointer" size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
