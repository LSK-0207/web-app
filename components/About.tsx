import Image from "next/image";
import Link from "next/link";
import React from "react";
import CompanyName from "./CompanyName";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-max bg-[#eae0d0] border-t-2 border-t-black"
    >
      {/* TEXT CONTAINER */}
      <div className="w-full h-[55vh] lg:h-[60vh] px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-xl md:text-3xl font-bold uppercase flex gap-2">
          Welcome to <CompanyName />
        </h1>
        <div className="text-sm md:text-xl font-semibold py-4 lg:px-16">
          "At The Express Chakki, we’re more than just a mill — we’re a movement
          to bring back the freshness and purity of home-ground ingredients.
          From aromatic spices to nutrient-rich flours, every batch is milled
          just for you. We go beyond the basics. Our range of vital foods and
          drinks for kids is thoughtfully crafted to support healthy growth and
          development — because we know how important it is to nourish your
          family with only the best."
        </div>
        <Link href="/menu">
          <button className="py-2 px-4 md:py-4 md:px-6 text-white text-sm md:text-base bg-black rounded-full cursor-pointer hover:bg-[#2c2b2bce]">
            Explore Our Menu
          </button>
        </Link>
      </div>

      {/* About More Container */}
      <div className="flex flex-col h-[85vh] lg:h-[75vh] md:flex-row">
        {/* IMAGE CONTAINER */}
        <div className="flex-1 p-10 lg:px-24 lg:w-1/2 lg:h-full">
          <div className="h-full w-full rounded-lg relative flex-1 ">
            <Image
              src="/about2.jpg"
              alt=""
              fill
              className="object-cover  rounded-4xl"
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex-1 relative flex items-center justify-center gap-4 flex-col text-center pb-6">
          <h1 className="text-xl md:text-4xl font-bold uppercase ">
            A <span className="text-green-500">FRESH</span> MILLING{" "}
            <span className="text-green-500">EXPERIENCE</span>
          </h1>
          <div className="text-sm md:text-base font-semibold py-4 px-6 md:px-8 lg:px-14">
            We combine traditional values with modern convenience to deliver a
            personalized milling experience. Whether it's the aroma of freshly
            ground wheat or the vibrance of hand-picked spices, we bring the
            heart of the chakki straight to your kitchen. Rooted in quality and
            built on trust, The Express Chakki is proud to serve families across
            Navi Mumbai with unmatched freshness and authenticity.
          </div>
          <Link href="#contact">
            <button className="px-4 py-2 md:py-2 md:px-6 text-white text-sm md:text-base bg-black rounded-full cursor-pointer hover:bg-[#2c2b2bce]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
