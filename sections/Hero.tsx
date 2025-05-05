export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85.5vh] scroll-mt-52 z-20">
      <div className="h-full">
        <div className="w-full h-full flex flex-col gap-72 items-center justify-center">
          <div>
            <h3 className="text-white text-6xl font-mono font-extrabold bg-black/50 px-4 py-3 rounded-3xl">
              Feel <span className="text-green-400">alive</span> in every{" "}
              <span className="text-yellow-500">bite</span>.
            </h3>
          </div>
          <h1 className="text-9xl font-semibold font-sans text-white">
            THE EXPRESS CHAKKI
          </h1>
        </div>
      </div>
    </section>
  );
}
