// import About from "@/components/About";
// import ContactUs from "@/components/ContactUs";
// import HeroSection from "@/components/HeroSection";
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL;

export default function Home() {
  const particlesRef = useRef<HTMLDivElement>(null);

  // Particle animation logic
  useEffect(() => {
    function createParticle() {
      if (!particlesRef.current) return;
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = Math.random() * 4 + 6 + "s";
      particle.style.animationDelay = Math.random() * 2 + "s";
      particlesRef.current.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 10000);
    }
    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  // WhatsApp button handler
  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div
      className="gradient-bg min-h-screen flex items-center justify-center relative"
      style={{ fontFamily: "Inter, sans-serif", overflowX: "hidden" }}
    >
      {/* Animated Particles */}
      <div className="particles" ref={particlesRef}>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Maintenance Icon */}
        <div className="pulse-icon mb-8 fade-in">
          <svg
            className="w-20 h-20 mx-auto text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 21l4-7 4 7M7 8h10M7 12h4"
            ></path>
          </svg>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar fade-in">
          <div className="progress-fill"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight glow-text fade-in-delay">
          We&apos;ll Be Back Soon!
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed fade-in-delay">
          Our site is currently undergoing a redesign to serve you better.
          Please check back later.
        </p>

        {/* WhatsApp CTA Section */}
        <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-3xl border border-white border-opacity-10 p-8 md:p-12 max-w-2xl mx-auto fade-in-delay-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            In the meantime, explore our WhatsApp Catalogue
          </h2>
          <p className="text-gray-300 mb-8">
            Browse our products and get instant support through WhatsApp
          </p>
          {/* WhatsApp Button */}
          <div className="flex items-center justify-center">
            <button
              className="glow-button bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white font-semibold py-2 px-10 rounded-full flex items-center gap-3 text-lg mb-6 md:mb-6"
              onClick={openWhatsApp}
              type="button"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              View Catalogue
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
            {/* QR Code */}
            <div className="text-center">
              <div className="qr-glow w-40 h-40 md:w-44 md:h-44 mx-auto rounded-xl flex items-center justify-center mb-3 overflow-hidden">
                <Image
                  src="/qr.png"
                  alt="WhatsApp QR Code"
                  className="w-32 h-32 md:w-36 md:h-36 object-contain"
                  width={144}
                  height={144}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-400">Scan to open catalogue</p>
            </div>

            {/* Store Address */}
            <div className="flex flex-col gap-4">
              <div className="text-center">
                <div className="qr-glow text-white w-52 h-40 md:w-44 md:h-44 mx-auto rounded-xl flex items-center justify-center mb-3 overflow-hidden flex-col">
                  <div>Store Address</div>
                  <div className="text-sm py-4 px-4">
                    Tejas Heights, Shop No. 10 , Plot No. 19, Sector 17, Ulwe,
                    Navi-Mumbai, Maharashtra 410206
                  </div>
                </div>
                <Link
                  href={"https://maps.app.goo.gl/utf5ZjFnmcp4fXHY8?g_st=aw"}
                  target="_blank"
                  className="hover:cursor-pointer"
                >
                  <p className="text-sm text-blue-500 hover:underline">
                    Click here for store location
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br />
        {/* Progress Bar */}
        <div className="progress-bar fade-in">
          <div className="progress-fill"></div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-400 fade-in-delay-2 mb-5">
          <p>Thank you for your patience • We appreciate your understanding</p>
        </div>
      </div>
    </div>
  );
}
