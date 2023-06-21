import { FaNpm } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";

const timeLine = (data) => {
  return (
    <div key={data.id} className="my-5 flex">
      <div className={data.logoFirst ? "w-2/5 justify-end" : "w-2/5 order-last"}>
        {data.imgType === "npm" ? (
          <FaNpm className={data.logoFirst ? "text-4xl ml-auto" : "text-4xl mr-auto"} />
        ) : data.imgType === "vscode" ? (
          <TbBrandVscode className={data.logoFirst ? "text-2xl ml-auto" : "text-3xl pt-1 mr-auto"} />
        ) : (
          <></>
        )}
      </div>
      <div className="w-1/5 ">
        <RxDotFilled className="text-4xl mx-auto border-2 border-dashed rounded-full bg-white" />
      </div>
      <div className={data.logoFirst ? "w-2/5 text-start" : "w-2/5 text-right order-first"}>
        <p>{data.details}</p>
        <p>{data.date}</p>
      </div>
    </div>
  );
};

const OurVision = ({ dataList }) => {
  return (
    <>
      <div className="p-5 text-center">
        <h1>Our Vision</h1>
        <p>
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
          source code
        </p>
      </div>

      <div className="relative">
        <div className="w-1/2 min-h-full absolute inline-block border-r-2 z-0 border-dashed"></div>
        <div className="p-5 text-center z-10 relative">{dataList && dataList.map((data) => <>{timeLine(data)}</>)}</div>
      </div>
    </>
  );
};

export default OurVision;
