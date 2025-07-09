import Image from "next/image";
import Link from "next/link";
import React from "react";

const Order = () => {
  return (
    <div id="order" className="h-[120vh] w-full flex flex-col bg-[#eae0d0] ">
      {/* CATALOUGE CARD */}
      <div className="w-full h-[35%] text-center">
        <div className="h-full w-full px-6 flex flex-col items-center justify-center gap-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase pt-1 px-3">
            <span className="text-red-500">Wait!</span> We have{" "}
            <span className="text-emerald-600">more for you</span>
          </h1>
          <p className="md:text-xl lg:text-xl px-4 md:px-6 lg:px-32">
            Explore more items on our menu! Visit our WhatsApp catalogue to view
            all our products and place your order. Click the button below to be
            redirected to our WhatsApp catalogue page.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 my-8">
        <div className="flex items-center w-full">
          <span className="mx-4 text-gray-500 text-2xl font-medium">OR</span>
        </div>
      </div>

      {/* QR CODE */}
      <div className="w-full h-[75%] flex flex-col md:flex-row">
        {/* IMAGE CONTAINER */}
        <div className="flex-1 px-2 flex items-center justify-center">
          <div className="relative h-3/4 w-3/4 md:h-1/2 md:w-1/2 flex items-center justify-center ">
            <Link href="https://wa.me/c/919923000686">
              <Image
                src="/qr.png"
                alt=""
                fill
                className="object-contain hover:scale-110 transition duration-300"
              />
            </Link>
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col items-center justify-center py-8 md:px-4 gap-6 text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase ">
            <span className="text-green-600">scan</span> the{" "}
            <span className="text-green-600">qr</span> code
          </h1>
          <div className="text-sm md:text-base lg:text-lg font-semibold py-4 px-6 md:px-8 lg:px-14">
            You can scan the QR code provided or click on it to be redirected to
            our WhatsApp catalogue and place your order.
            <br />
            <br /> Our catalogue includes a variety of items such as: Millet
            Flour, Multigrain – Silver Collection (packed with a variety of
            grains and millets), Multigrain– Golden Collection (packed with more
            than five grains and millets), Spices & Masalas, Muesli – Fruit &
            Nuts (you can even create your own Muesli), and Seeds such as
            Pumpkin Seeds, Chia Seeds, and more. Click now and get your fresh,
            wholesome meal started!
          </div>

          <Link href="https://wa.me/c/919923000686">
            <button className="px-4 py-2 md:py-2 md:px-6 text-white text-sm md:text-lg lg:text-xl bg-black rounded-full cursor-pointer hover:bg-[#2c2b2bce] hover:scale-105 focus:outline-2 focus:outline-offset-2 focus:outline-black active:bg-gray-500">
              Click here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
