import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import More from "@/sections/More";
import Footer from "@/sections/Footer";
import Image from "next/image";
import herobg from "@/public/hero-section4.jpg";

export default function Home() {
  return (
    <div>
      <Image
        src={herobg}
        alt="Background"
        fill
        quality={100}
        className="object-cover z-0"
      />
      {/* Top Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent z-10" />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />

      <main className="relative">
        <Header />
        <Hero />
        <About />
        <More />
        <Footer />
      </main>
    </div>
  );
}
