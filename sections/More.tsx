import Image from "next/image";
import more from "@/public/more.jpg";

export default function More() {
  return (
    <section className="w-full h-screen z-20">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-row-reverse h-full">
          <div className="w-3/5 px-20 h-full text-black flex items-center">
            {/* Container 1 */}
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

          {/* Container 2 */}
          <div className="w-1/2 h-full text-black flex items-center justify-center">
            <Image
              src={more}
              alt="Wheat Flour Image"
              className="px-2 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
