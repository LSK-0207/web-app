import { featuredOtherProducts } from "@/data";
import Image from "next/image";
import React from "react";
import CatalougeCard from "./CatalougeCard";

const FeaturedOtherProducts = () => {
  return (
    <div className="w-screen overflow-x-scroll">
      {/* WRAPPER 1*/}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredOtherProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[75vh] lg:h-[85vh] p-2 flex flex-col items-center justify-around hover:bg-[#f4f0eb] transition-all duration-300 md:w-[50vw] lg:w-[33vw]"
          >
            {/* IMAGE CONTAINER */}

            <div className="relative flex-1 w-full rounded-full hover:scale-90 transition-all duration-500">
              {item.img && (
                <Image src={item.img} alt="" fill className="object-contain" />
              )}
            </div>

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 py-2 text-center">
              <h1 className="text-xl font-bold uppercase pt-1 px-3">
                {item.title}
              </h1>
              <p className="p-4">{item.desc}</p>
              <div>
                <span className="text-xl font-bold pr-5 ">{item.quantity}</span>
                {/* <span className="text-xl font-bold">{item.price}</span> */}
              </div>
            </div>
          </div>
        ))}
        <CatalougeCard />
      </div>
    </div>
  );
};

export default FeaturedOtherProducts;
