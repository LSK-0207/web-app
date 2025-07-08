import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CompanyName from "./CompanyName";

const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto h-16 md:h-24 flex items-center justify-between p-4 md:px-10 lg:px-20 ">
      {/* LOGO */}
      <div className="flex items-center justify-center gap-2 md:text-lg md:font-semibold">
        <Link href="/">
          <Image
            src="/logo.png"
            alt=""
            width={45}
            height={45}
            className="md:w-[80px] md:h-[80px] object-cover"
          />
        </Link>
        <Link href="/">
          <div className="flex flex-col">
            <CompanyName />
            <span className="text-[10px] pl-1 font-semibold md:text-[15px]">
              Blending Your Own Taste
            </span>
          </div>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="z-10 md:hidden">
        <Menu />
      </div>

      {/* LEFT LINKS */}
      <div className="hidden md:flex md:gap-4 md:items-center font-semibold">
        <Link href="/">HOME</Link>
        <Link href="/#about">ABOUT</Link>
        <Link href="/menu">MENU</Link>
        <Link href="#contact">CONTACT US</Link>
      </div>
    </div>
  );
};

export default Navbar;
