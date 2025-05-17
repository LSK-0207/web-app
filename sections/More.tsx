import Image from "next/image";
import more from "@/public/more2.jpg";

export default function More() {
  return (
    <section className="w-full h-[85vh] z-20 py-16 md:py-0">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col md:flex-row-reverse h-full items-center">
          <div className="w-full md:w-3/5 px-6 sm:px-10 md:px-16 h-full text-black flex items-center mb-10 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl text-[#3B281C] sm:text-5xl md:text-6xl font-semibold pb-5">
                A <span className="text-green-700">FRESH MILLING</span>{" "}
                EXPERIENCE
              </h1>

              <p className="text-lg sm:text-xl md:text-xxl">
                We combine traditional values with modern convenience to deliver
                a personalized milling experience. Whether it's the aroma of
                freshly ground wheat or the vibrance of hand-picked spices, we
                bring the heart of the chakki straight to your kitchen. Rooted
                in quality and built on trust, The Express Chakki is proud to
                serve families across Navi Mumbai with unmatched freshness and
                authenticity.
              </p>
            </div>
          </div>

          {/* Image Section */}

          <div className="w-full md:w-1/2 px-4 md:px-2 h-full text-black flex items-center justify-center">
            <Image
              src={more}
              alt="Wheat Flour Image"
              className="rounded-3xl w-full h-[80%] max-w-md md:max-w-full" // Ensure image scales
            />
          </div>
        </div>
      </div>
    </section>
  );
}
