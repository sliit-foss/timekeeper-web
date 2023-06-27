import { RxDotFilled } from "react-icons/rx";
import VSCodeIcon from "../../public/assets/Images/akar-icons_vscode-fill.svg";
import NPMIcon from "../../public/assets/Images/logos_npm.svg";

import dataList from "./data.json";

const Timeline = () => {
  return (
    <>
      {dataList &&
        dataList.map((data) => (
          <div className="my-10 flex justify-center" key={data.id}>
            <div
              className={
                data.logoFirst
                  ? "w-[63px] my-auto md:w-[230px] justify-end md:order-2"
                  : "w-[63px] my-auto md:w-[230px] md:order-4"
              }
            >
              {data.imgType === "npm" ? (
                <img src={NPMIcon} className={data.logoFirst ? "ml-auto w-12" : "w-12 ml-auto md:ml-0 md:mr-auto"} />
              ) : data.imgType === "vscode" ? (
                <img src={VSCodeIcon} className={data.logoFirst ? "ml-auto" : "pt-1 mx-auto md:mx-0 md:mr-auto"} />
              ) : (
                <></>
              )}
            </div>
            <div className="my-auto w-20 md:order-3">
              <RxDotFilled className="text-[#0143b6] text-4xl mx-auto border-2 border-dashed rounded-full bg-white" />
            </div>
            <div
              className={data.logoFirst ? "w-[230px] text-start order-4" : "w-[230px] text-start md:text-right order-2"}
            >
              <p className="font-cabinet text-xl font-extrabold">{data.details}</p>
              <p className="text-black/40 font-inter">{data.date}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Timeline;
