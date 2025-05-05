export default function Footer() {
  return (
    <section id="footer" className="w-full h-[50vh] border-t-1 bg-[#453108e4]">
      <div className="max-w-7xl flex mx-auto h-full">
        <div className="w-3/5 h-full px-5 pt-10 flex items-center justify-center">
          <h1 className="h-full text-9xl font-bold font-sans text-green-500 ">
            EXPRESS <span className="text-yellow-400">CHAKKI</span>
          </h1>
        </div>

        <div className="w-full font-serif flex">
          <div className="w-3/5 pl-4  flex flex-col items-center justify-center">
            <div className="py-5">
              <h5 className="text-xl">Our Store</h5>
              <p>Address: </p>
            </div>

            <div>
              <h5 className="text-xl">Customer Care</h5>
              <p>Phone Number:</p>
            </div>
          </div>

          <div className="w-[25%] flex items-center justify-center text-xl">
            <ul>
              <li className="py-9">Home</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
