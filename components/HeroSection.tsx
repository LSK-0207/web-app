// Freshly Milled, Thoughtfully Made — Nourishing Families, the Traditional Way.

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-5.5rem)] md:h-[calc(100vh-8rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 relative flex flex-col items-center justify-center gap-8 font-bold border-t-1 border-t-black">
        <h1 className="text-xl text-center p-4 uppercase md:text-3xl md:p-6 xl:text-4xl lg:p-8">
          <span className="text-green-500">Freshly</span> Milled,{" "}
          <span className="text-orange-500">Thoughtfully</span> Made Nourishing
          Families, the <span className="text-[#edc336]">Traditional Way</span>
        </h1>
        <Link href="/menu/#order">
          <button className="bg-red-500 hover:bg-red-400 text-xs md:text-sm lg:text-base cursor-pointer py-4 px-8 text-white rounded-lg hover:scale-105 focus:outline-2 focus:outline-offset-2 focus:outline-black active:bg-gray-500">
            Order Now
          </button>
        </Link>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="h-1/2 w-full relative lg:h-full lg:w-1/2">
        <Image
          src="/hero-section.jpg"
          alt="hero section image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
