import { FaNpm } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const OurVision = ({ dataList }) => {
  const navigate = useNavigate();

  const handleInstallButtonClick = () => {
    navigate("/install");
  };

  const handleSourceCodeClick = () => {
    navigate("/source-code");
  };

  const timeLine = (data) => {
    return (
      <div className="my-10 flex justify-center">
        <div className={data.logoFirst ? "md:w-[230px] justify-end md:order-2" : "md:w-[230px] md:order-4"}>
          {data.imgType === "npm" ? (
            <FaNpm className={data.logoFirst ? "text-4xl ml-auto" : "text-4xl ml-auto md:ml-0 md:mr-auto"} />
          ) : data.imgType === "vscode" ? (
            <TbBrandVscode className={data.logoFirst ? "text-2xl ml-auto" : "text-3xl pt-1 mr-auto"} />
          ) : (
            <></>
          )}
        </div>
        <div className="w-20 md:order-3">
          <RxDotFilled className="text-[#0143b6] text-4xl mx-auto border-2 border-dashed rounded-full bg-white" />
        </div>
        <div className={data.logoFirst ? "w-[230px] text-start order-4" : "w-[230px] text-start md:text-right order-2"}>
          <p className="font-CabinetGroteskVariable text-xl font-extrabold">{data.details}</p>
          <p className="text-black/40 font-Inter">{data.date}</p>
        </div>
      </div>
    );
  };

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
        <div className="md:w-1/2 min-h-full absolute inline-block border-r-2 z-0 border-dashed"></div>
        <div className="p-5 text-center z-10 relative">
          {dataList && dataList.map((data) => <div key={data.id}>{timeLine(data)}</div>)}
          <div className="bg-white">
            <p
              style={{
                background: "-webkit-linear-gradient(#00299c, #0092e6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              className="inline-block font-bold border-2 border-dashed py-1 px-3 bg-white rounded-full"
            >
              Continuing to Grow
            </p>
          </div>
          <div className="my-5 py-5 md:flex border-t-2 border-dashed justify-center">
            <div className="mx-5 mt-2 md:mt-0 p-5 border-2 lg:w-1/4 bg-white border-dashed rounded rounded-3xl">
              <p className="font-Inter text-black/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis quasi perspiciatis voluptate rem
                nam recusandae impedit nulla reprehenderit sit odio cumque aperiam minima atque, natus commodi sed,
                incidunt maxime?
              </p>
              <div
                className="py-1 px-4 mt-3 inline-block border rounded-full bg-cyan-200/80"
                onClick={handleInstallButtonClick}
              >
                <div
                  style={{
                    background: "-webkit-linear-gradient(#00299c, #0092e6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                  className="font-extrabold text-lg"
                >
                  Install Blizzard Release <span className="md:inline-block hidden"> {">"} </span>
                </div>
              </div>
            </div>
            <div className="mx-5 mt-5 md:mt-0 p-5 border-2 lg:w-1/4 bg-white border-dashed rounded-3xl">
              <p className="font-Inter text-black/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis quasi perspiciatis voluptate rem
                nam recusandae impedit nulla reprehenderit sit odio cumque aperiam minima atque, natus commodi sed,
                incidunt maxime?
              </p>
              <div
                className="py-1 px-4 mt-3 inline-block border rounded-full bg-cyan-200/80"
                onClick={handleSourceCodeClick}
              >
                <div
                  style={{
                    background: "-webkit-linear-gradient(#002bab, #17a2ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                  className="font-extrabold text-lg"
                >
                  Explore Source Code <span className="md:inline-block hidden"> {">"} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
