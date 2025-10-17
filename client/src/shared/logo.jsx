import Image from "rc-image";
import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-10 h-9 bg-primary flex justify-center items-center rounded-[10px] rounded-tr-none">
        <Image className="w-7" src={logo} />
      </div>
      <p className="uppercase text-sm min-w-[100px] text-center leading-none font-semibold font-lato">
        Anchorsoft
        <span className="tracking-[0.2rem] block pt-0.5 pl-0.5 text-primary font-[1000] text-base leading-none  text-center">
          Academy
        </span>
      </p>
    </div>
  );
};

export default Logo;
