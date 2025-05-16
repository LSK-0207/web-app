import Image from "next/image";
import qr from "@/public/QR.jpg";

export default function Footer() {
  return (
    <section
      id="footer"
      className="w-full min-h-[60vh] border-t-1 bg-[#3B281C] py-10 md:py-0"
    >
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto h-full items-center text-white">
        <div className="w-full md:w-3/5 h-full px-5 flex items-center justify-center text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans text-green-500">
            <span className="text-orange-400">THE</span> EXPRESS{" "}
            <span className="text-yellow-400">CHAKKI</span>
          </h1>
        </div>

        <div className="w-full py-12 md:w-2/5 font-serif flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around text-center md:text-left gap-8 md:gap-4">
          <div className="flex flex-col items-center md:items-start">
            {" "}
            {/* Align text left on medium*/}
            <div className="py-3">
              <h5 className="text-2xl text-orange-500">Our Store Address</h5>
              <p>
                Shop No 10 Plot No 19 Sector 17 Tejas Heights CHS Co Op Housing
                Society Panvel Raigad Ulwe 410206
              </p>
            </div>
            <div>
              <a
                href="https://maps.app.goo.gl/28jZh1QV7YQoRBzi6"
                target="_blank"
                className="text-green-400"
              >
                Click Here for Store Location
              </a>
            </div>
            <div className="py-3">
              <h5 className="text-2xl text-yellow-400">Order On:</h5>
              <p>+91 9923000686</p>
            </div>
            <div className="w-1/2">
              <a href="https://wa.me/c/919923000686" target="_blank">
                <Image src={qr} alt="QR Code" className="h-[45%] w-full" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          {/* <div className="flex flex-col items-center md:items-start justify-center text-xl"> */}{" "}
          {/* Align text left on medium */}
          {/* <ul>
              <li className="py-2 sm:py-3">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
