"use client";

import Image from "next/image";
import logo from "@/public/logo.jpg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faUtensils,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return; // Only run if the menu is open

    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const toggleButton = document.getElementById("mobile-menu-toggle");

      if (
        menu &&
        !menu.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
          <div className="bg-white p-1 rounded-md shadow-sm">
            <a href="#">
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={50}
                className="cursor-pointer"
              />
            </a>
          </div>

          <div className="text-lg sm:text-xl md:text-2xl font-bold cursor-default font-poppins">
            <span
              className={` sm:inline transition-colors duration-500 ${
                scrolled ? "text-black" : "text-green-500"
              }`}
            >
              Express
            </span>{" "}
            <span className="text-yellow-400">Chakki</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a
                href="#home"
                className="px-3 py-1 rounded-md hover:bg-yellow-800 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="px-3 py-1 rounded-md hover:bg-yellow-800 hover:text-white transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="px-3 py-1 rounded-md hover:bg-yellow-800 hover:text-white transition-colors duration-200"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="px-3 py-1 rounded-md hover:bg-yellow-800 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle" // Added ID here
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              className={`p-2 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                scrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#453108] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          // Changed background to solid brown
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 pt-5 pb-3 sm:px-5 h-full flex flex-col">
          {/* Logo at the top */}
          <div className="flex justify-center mt-8 mb-6">
            <div className="bg-white p-1 rounded-md shadow-sm inline-block">
              <Image src={logo} alt="logo" width={80} height={65} />
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-left text-[#F9EBD3] hover:bg-[#6a4a0c] hover:text-white"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="mr-2 w-4 h-4 inline-block"
              />
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-left text-[#F9EBD3] hover:bg-[#6a4a0c] hover:text-white"
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="mr-2 w-4 h-4 inline-block"
              />
              About
            </a>
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-left text-[#F9EBD3] hover:bg-[#6a4a0c] hover:text-white"
            >
              <FontAwesomeIcon
                icon={faUtensils}
                className="mr-2 w-4 h-4 inline-block"
              />
              Menu
            </a>
            <a
              href="#footer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-left text-[#F9EBD3] hover:bg-[#6a4a0c] hover:text-white"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 w-4 h-4 inline-block"
              />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
