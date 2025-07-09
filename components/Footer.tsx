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
              alt=""
              width={45}
              height={45}
              className="md:w-[80px] md:h-[80px] object-cover hover:rotate-[360deg] transition duration-500"
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
