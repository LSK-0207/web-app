import Link from "next/link";
import React from "react";

const CatalougeCard = () => {
  return (
    <div className="w-screen h-[75vh] lg:h-[85vh] p-2 flex flex-col items-center justify-around hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] lg:w-[33vw]">
      <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-8 py-2 text-center">
        {/* TEXT CONTAINER */}
        <h1 className="text-xl font-bold uppercase pt-1 px-3">
          Wait! We have more for you
        </h1>
        <p className="px-4 md:px-6 lg:px-8">
          Explore more items on our menu! Visit our WhatsApp catalogue to view
          all our products and place your order. Click the button below to be
          redirected to our WhatsApp catalogue page.
        </p>
        <Link href="https://wa.me/c/919923000686">
          <button className="px-4 py-2 md:py-2 md:px-6 text-white text-sm md:text-base bg-black rounded-full cursor-pointer hover:bg-[#2c2b2bce]">
            Click here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatalougeCard;
