import { FaNpm } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import dataList from "../data/timeline.json";

const Timeline = () => {
  return (
    <>
      {dataList.timeline &&
        dataList.timeline.map((data) => (
          <div className="my-10 flex justify-center" key={data.id}>
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
            <div
              className={data.logoFirst ? "w-[230px] text-start order-4" : "w-[230px] text-start md:text-right order-2"}
            >
              <p className="font-CabinetGroteskVariable text-xl font-extrabold">{data.details}</p>
              <p className="text-black/40 font-Inter">{data.date}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Timeline;
