import Image from "next/image";
import React from "react";
import FeaturedWheatProducts from "./FeaturedWheatProducts";
import FeaturedOtherProducts from "./FeaturedOtherProducts";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col h-[calc(100vh-5.5rem)] md:h-[calc(100vh-8rem)] lg:flex-row border-t-1 border-t-black bg-gray-200">
        {/* MAIN */}
        {/* IMAGE CONATINER */}
        <div className="flex-1 py-9 md:py-16">
          <div className="h-full w-full relative">
            <Image
              src="/make-your-own.jpg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* TEXT CONATINER */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center px-4">
          <h1 className="font-semibold text-2xl text-center px-4 uppercase md:text-3xl md:px-6 xl:text-4xl lg:px-8">
            Mill As You Wish
          </h1>
          <div className="text-md md:text-base font-semibold py-4 px-6 md:px-8">
            You can make your own flour, you only need to call us and tell us
            about what kind of grains you want to mix in what quantity and how
            you want it to grind thin, medium or coarse
          </div>
          <h5 className=" flex flex-row gap-3 font-semibold md:text-base items-center">
            Call Us At:
            <span className="py-2 px-4 text-xs md:text-base rounded-full bg-black text-white font-semibold">
              +91 9923000686
            </span>
          </h5>
        </div>
      </div>

      {/* Slider for Wheat FLour */}
      <h1 className="w-full h-32 font-bold flex flex-col gap-4 items-center justify-center text-3xl md:text-4xl lg:text-5xl lg:h-40 py-4 md:py-12 lg:pt-14 border-t-2 border-t-black">
        Wheat Flour Products
        <div className="text-lg flex gap-2 ">
          <p>scroll</p>{" "}
          <Image
            src="/right.png"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </h1>
      <div>
        <FeaturedWheatProducts />
      </div>

      {/* Slider for Other Wheat FLour */}
      <h1 className="w-full h-32 font-bold flex flex-col gap-4 items-center justify-center text-3xl md:text-4xl lg:text-5xl py-4 md:py-12  lg:h-40 lg:pt-14black">
        Other Flour Products
        <div className="text-lg flex gap-2 ">
          <p>scroll</p>{" "}
          <Image
            src="/right.png"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </h1>
      <div>
        <FeaturedOtherProducts />
      </div>
    </div>
  );
};

export default HeroSection;
