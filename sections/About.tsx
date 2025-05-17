import Image from "next/image";
import about from "@/public/about2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-4 w-full h-[85vh] border-b-black border-b-1 z-20 py-16 md:py-0"
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col md:flex-row h-full items-center">
          <div className="w-full md:w-3/5 px-6 sm:px-10 md:px-16 h-full text-black flex items-center mb-10 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold pb-5 text-[#3B281C]">
                WELCOME TO <span className="text-orange-400">THE</span>{" "}
                <span className="text-green-400">EXPRESS</span>{" "}
                <span className="text-yellow-400">CHAKKI</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-xl">
                At The Express Chakki, we’re more than just a mill — we’re a
                movement to bring back the freshness and purity of home-ground
                ingredients. From aromatic spices to nutrient-rich flours, every
                batch is milled just for you. We go beyond the basics. Our range
                of vital foods and drinks for kids is thoughtfully crafted to
                support healthy growth and development — because we know how
                important it is to nourish your family with only the best.
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 md:px-2 h-full text-black flex items-center justify-center">
            <Image
              src={about}
              alt="Wheat Flour Image"
              className="rounded-3xl w-full h-[80%] max-w-md md:max-w-full"
            />{" "}
            {/* for image scales */}
          </div>
        </div>
      </div>
    </section>
  );
}
