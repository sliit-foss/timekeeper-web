import { RxDotFilled } from "react-icons/rx";
import { VSCode, NPM } from "@/icons";

import timeline from "./data.json";

const Timeline = () => {
  return (
    <>
      {timeline?.map(({ icon, details, date }, index) => (
        <div className="my-10 flex justify-center" key={index}>
          <div
            className={`flex justify-end w-[53px] my-auto md:w-[230px] ${
              index % 2 == 1 ? "md:order-2" : "md:justify-start md:order-4"
            }`}
          >
            {icon === "npm" && <NPM width={53} />}
            {icon === "vscode" && <VSCode />}
          </div>
          <div className="my-auto w-20 md:order-3">
            <RxDotFilled className="text-primary-dark text-3xl mx-auto border-2 border-dashed rounded-full bg-white" />
          </div>
          <div
            className={index % 2 == 1 ? "w-[230px] text-start order-4" : "w-[230px] text-start md:text-right order-2"}
          >
            <p className="font-cabinet text-xl font-extrabold">{details}</p>
            <p className="text-black/40 font-inter">{date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
