import { FaNpm } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";

const timeLine = (data) => {
  return (
    <div key={data.id} className="my-10 flex">
      <div className={data.logoFirst ? "w-1/2 justify-end" : "w-1/2 order-last"}>
        {data.imgType === "npm" ? (
          <FaNpm className={data.logoFirst ? "text-4xl ml-auto" : "text-4xl mr-auto"} />
        ) : data.imgType === "vscode" ? (
          <TbBrandVscode className={data.logoFirst ? "text-2xl ml-auto" : "text-3xl pt-1 mr-auto"} />
        ) : (
          <></>
        )}
      </div>
      <div className="w-20 ">
        <RxDotFilled className="text-[#0143b6] text-4xl mx-auto border-2 border-dashed rounded-full bg-white" />
      </div>
      <div className={data.logoFirst ? "w-1/2 text-start" : "w-1/2 text-right order-first"}>
        <p className="font-CabinetGroteskVariable text-xl font-extrabold">{data.details}</p>
        <p className="text-black/40 font-Inter">{data.date}</p>
      </div>
    </div>
  );
};

const OurVision = ({ dataList }) => {
  return (
    <>
      <div className="p-5 text-center">
        <h1 className="font-CabinetGroteskVariable font-bold text-5xl">Our Vision</h1>
        <p className="font-Inter text-black/40 text-xl">
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
          source code
        </p>
      </div>

      <div className="relative">
        <div className="w-1/2 min-h-full absolute inline-block border-r-2 z-0 border-dashed"></div>
        <div className="p-5 text-center z-10 relative">
          {dataList && dataList.map((data) => <>{timeLine(data)}</>)}
          <div className="bg-white">
            <p
              style={{
                background: "-webkit-linear-gradient(#00299c, #0073e6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              className="inline-block font-bold border-2 border-dashed py-1 px-3 bg-white rounded-full"
            >
              Continue to Grow
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
