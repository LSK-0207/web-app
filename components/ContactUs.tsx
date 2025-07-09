import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="h-[100vh] py-6 md:py-16 md:h-100vh w-full flex flex-col md:flex-row border-t-2 border-t-black"
    >
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 md:w-[65%] md:h-full p-2">
        <div className="h-full w-full flex flex-row gap-2 md:px-2 md:gap-4 lg:px-6">
          <div className="h-full w-full relative">
            <Image
              src="/Store-location.jpg"
              alt=""
              fill
              className="object-cover rounded-4xl hover:scale-90 transition duration-300"
            />
          </div>
          <div className="h-full w-full relative">
            <Image
              src="/Store-view.jpg"
              alt=""
              fill
              className="object-cover rounded-4xl hover:scale-90 transition duration-300"
            />
          </div>
        </div>
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full h-1/2 md:w-[35%] md:h-full py-4 px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold lg:text-4xl text-orange-500 uppercase">
          Our store address
        </h1>
        <div className="text-lg font-semibold lg:text-lg">
          Shop No 10 Plot No 19 Sector 17 Tejas Heights CHS Co Op Housing
          Society Panvel Raigad Ulwe 410206
        </div>

        <Link
          href="https://maps.app.goo.gl/utf5ZjFnmcp4fXHY8?g_st=aw"
          target="_blank"
          className="text-base underline md:no-underline uppercase py-2 px-6 rounded-lg text-blue-500"
        >
          click here for store location
        </Link>

        <h5 className=" flex flex-row gap-3 items-center">
          Call Us At:
          <span className="py-2 px-4 rounded-full hover:scale-105 transition duration-200 bg-black text-white font-semibold hover:outline-2 hover:outline-offset-2 hover:outline-black">
            +91 9923000686
          </span>
        </h5>
      </div>
    </div>
  );
};

export default ContactUs;
