import Image from "next/image";
import about from "@/public/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full h-screen border-b-black border-b-1 z-20 "
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex h-full">
          <div className="w-3/5 px-16 h-full text-black flex items-center">
            <div className="text-center">
              <h1 className="text-6xl font-semibold pb-5">THE HEADING</h1>
              <p className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque natus, voluptas officiis perspiciatis iste eos animi
                maxime ex magni, expedita optio nam magnam, voluptatem vitae
                minus atque? Unde, nobis eos.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full text-black flex items-center justify-center">
            <Image
              src={about}
              alt="Wheat Flour Image"
              className="px-2 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
