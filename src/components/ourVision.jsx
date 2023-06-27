import Timeline from "./timeline";
import { Link } from "react-router-dom";

const OurVision = () => {
  return (
    <>
      <div className="p-5 my-5 text-center">
        <h1 className="font-CabinetGroteskVariable font-extrabold text-5xl">Our Vision</h1>
        <p className="font-Inter text-black/60 text-xl mt-5">
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
          source code
        </p>
      </div>

      <div className="relative">
        <div className="md:w-1/2 min-h-full absolute inline-block border-r-2 md:ml-[2px] z-0 border-dashed"></div>
        <div className="p-5 text-center z-10 relative">
          <Timeline />
          <div className="bg-white">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#00299c] to-[#0092e6] inline-block font-bold border-2 border-dashed py-1 px-3 rounded-full">
              Continuing to Grow
            </p>
          </div>
          <div className="my-5 md:ml-[2px] py-5 md:flex border-t-2 border-dashed justify-center">
            <div className="mx-5 mt-2 md:mt-0 p-5 border-2 lg:w-1/4 bg-white border-dashed rounded rounded-3xl">
              <p className="font-Inter text-black/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis quasi perspiciatis voluptate rem
                nam recusandae impedit nulla reprehenderit sit odio cumque aperiam minima atque, natus commodi sed,
                incidunt maxime?
              </p>
              <Link to="#" target="_blank">
                <div className="py-1 px-4 mt-3 inline-block border rounded-full bg-cyan-200/80">
                  <div className="font-SFPProDisplay font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#00299c] to-[#0092e6]">
                    Install Blizzard Release <span className="md:inline-block hidden"> {">"} </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mx-5 mt-2 md:mt-0 p-5 border-2 lg:w-1/4 bg-white border-dashed rounded rounded-3xl">
              <p className="font-Inter text-black/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis quasi perspiciatis voluptate rem
                nam recusandae impedit nulla reprehenderit sit odio cumque aperiam minima atque, natus commodi sed,
                incidunt maxime?
              </p>
              <Link to="#" target="_blank">
                <div className="py-1 px-4 mt-3 inline-block border rounded-full bg-cyan-200/80">
                  <div className="font-SFPProDisplay bg-clip-text text-transparent bg-gradient-to-r from-[#00299c] to-[#0092e6] font-extrabold text-lg">
                    Explore Source Code <span className="md:inline-block hidden"> {">"} </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
