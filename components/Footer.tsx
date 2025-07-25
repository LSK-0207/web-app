import Image from "next/image";
import Link from "next/link";
import React from "react";
import CompanyName from "./CompanyName";

const Footer = () => {
  return (
    <div className="bg-[#f2ede2]">
      <div className="max-w-[90rem] mx-auto h-16 md:h-24 font-semibold text-base md:text-xl flex items-center justify-between p-4 md:px-10 lg:px-20 border-t-2 border-t-black ">
        <Link href="#top">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={68}
              height={68}
              className="md:w-[95px] md:h-[95px] object-cover  hover:-rotate-z-[-360deg] hover:scale-150 transition duration-700"
            />
            <CompanyName />
          </div>
        </Link>
        <p className="text-xs">© ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
