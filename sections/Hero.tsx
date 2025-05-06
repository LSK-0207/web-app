export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85.5vh] scroll-mt-52 z-20">
      <div className="h-full">
        <div className="w-full h-full flex flex-col gap-72 items-center justify-center">
          <div>
            {/* Adjusted text size, padding, and added text-center */}
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-extrabold bg-black/50 px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-2xl sm:rounded-3xl text-center">
              Feel <span className="text-green-400">alive</span> in every{" "}
              <span className="text-yellow-500">bite</span>.
            </h3>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold font-geist-sans text-white text-center px-4">
            THE EXPRESS CHAKKI
          </h1>
        </div>
      </div>
    </section>
  );
}
