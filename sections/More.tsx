import Image from "next/image";
import more from "@/public/more.jpg";

export default function More() {
  return (
    <section className="w-full min-h-screen z-20 py-16 md:py-0"> 
      <div className="max-w-7xl mx-auto h-full">
        
        <div className="flex flex-col md:flex-row h-full items-center">
          
          <div className="w-full md:w-3/5 px-6 sm:px-10 md:px-16 h-full text-black flex items-center mb-10 md:mb-0">
            <div className="text-center md:text-left"> 
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold pb-5">THE HEADING</h1>
              
              <p className="text-lg sm:text-xl md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque natus, voluptas officiis perspiciatis iste eos animi
                maxime ex magni, expedita optio nam magnam, voluptatem vitae
                minus atque? Unde, nobis eos.
              </p>
            </div>
          </div>

          {/* Image Section */}
        
          <div className="w-full md:w-1/2 px-4 md:px-2 h-full text-black flex items-center justify-center">
            <Image
              src={more}
              alt="Wheat Flour Image"
              className="rounded-3xl w-full h-auto max-w-md md:max-w-full" // Ensure image scales
            />
          </div>
        </div>
      </div>
    </section>
  );
}
