export default function Footer() {
  return (
    <section
      id="footer"
      className="w-full min-h-[50vh] border-t-1 bg-[#453108e4] py-10 md:py-0"
    >
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto h-full items-center text-white">
        <div className="w-full md:w-3/5 h-full px-5 flex items-center justify-center text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans text-green-500">
            EXPRESS <span className="text-yellow-400">CHAKKI</span>
          </h1>
        </div>

        <div className="w-full md:w-2/5 font-serif flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around text-center md:text-left gap-8 md:gap-4">
          <div className="flex flex-col items-center md:items-start">
            {" "}
            {/* Align text left on medium*/}
            <div className="py-3">
              <h5 className="text-xl">Our Store</h5>
              <p>Address: </p>
            </div>
            <div className="py-3">
              <h5 className="text-xl">Customer Care</h5>
              <p>Phone Number: </p>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start justify-center text-xl">
            {" "}
            {/* Align text left on medium */}
            <ul>
              <li className="py-2 sm:py-3">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
