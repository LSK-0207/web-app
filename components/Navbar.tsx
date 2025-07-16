import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CompanyName from "./CompanyName";

const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto h-16 md:h-24 flex items-center justify-between p-4 md:px-10 lg:px-20 ">
      {/* logo */}
      <div className="flex items-center justify-center gap-2 md:text-lg md:font-semibold">
        <Link href="/">
          <Image
            priority
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="md:w-[100px] md:h-[100px] object-contain hover:-rotate-z-[-360deg] hover:scale-150 transition duration-700"
          />
        </Link>
        <Link href="/">
          <div className="flex flex-col">
            <CompanyName />
            <span className="text-[10px] pl-1 font-semibold md:text-[12px]">
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
      <div className="hidden md:flex md:gap-8 md:items-center font-semibold">
        <Link
          href="/"
          className=" hover:scale-90 hover:border-t hover:border-b hover:border-black transition duration-300"
        >
          HOME
        </Link>
        <Link
          href="/#about"
          className=" hover:scale-90 hover:border-t hover:border-b hover:border-black transition duration-300"
        >
          ABOUT
        </Link>
        <Link
          href="/menu"
          className=" hover:scale-90 hover:border-t hover:border-b hover:border-black transition duration-300"
        >
          MENU
        </Link>
        <Link
          href="#contact"
          className=" hover:scale-90 hover:border-t hover:border-b hover:border-black transition duration-300"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
