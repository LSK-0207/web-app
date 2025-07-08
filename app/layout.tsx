import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Import Poppins
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TagLine from "@/components/TagLine";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "the express chakki",
  description:
    "We combine traditional values with modern convenience to deliver a personalized milling experience",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased scroll-smooth`} // Add poppins variable
      >
        <TagLine />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
