"use client";

import Image from "next/image";
import logo from "@/public/logo.jpg";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 border-b-2 border-black z-20 transition-colors duration-500 ${
        scrolled
          ? "bg-[#b7a99192] backdrop-blur-3xl"
          : "bg-transparent backdrop-blur-3xl"
      }`}
    >
      <div
        className={`max-w-7xl px-4 h-[14vh] mx-auto flex items-center justify-center transition-colors duration-500 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <Image
              src={logo}
              alt="logo"
              className="w-[60px] h-[50px] cursor-pointer"
            />
          </div>
          <div className="text-xl font-bold cursor-default">
            <span
              className={`transition-colors duration-500 ${
                scrolled ? "text-black" : "text-green-500"
              }`}
            >
              Express
            </span>{" "}
            <span className="text-yellow-400">Chakki</span>
          </div>
          <ul className="flex gap-6">
            <li className="cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Menu</a>
            </li>
            <li className="cursor-pointer">
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

// #F9EBD3
