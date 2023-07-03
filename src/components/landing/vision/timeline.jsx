import { RxDotFilled } from "react-icons/rx";
import { NPM, VSCode } from "@/icons";
import timeline from "./data.json";

const Timeline = () => {
  return (
    <>
      {timeline?.map(({ icon, details, date }, index) => (
        <div className="my-10 grid grid-cols-[270px_104px_270px] justify-center" key={index}>
          <div className={`items-center grid ${index % 2 == 0 ? "md:order-2 place-items-end" : "md:order-4"}`}>
            {icon === "npm" && <NPM width={63} />}
            {icon === "vscode" && <VSCode width={24} />}
          </div>
          <div className="my-auto grid place-items-center md:order-3">
            <RxDotFilled className="text-primary-dark text-[24px] mx-auto border-2 border-dashed rounded-full bg-white" />
          </div>
          <div className={index % 2 == 0 ? "text-start order-4" : "place-items-end text-end order-2"}>
            <p className="leading-[26px] font-cabinet text-[26px] tracking-[-0.5px] font-bold">{details}</p>
            <p className="text-black/40 font-inter">{date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
