import { NPM, VSCode } from "@/icons";
import timeline from "./data.json";

const Timeline = () => {
  return (
    <>
      {timeline?.map(({ icon, details, date }, index) => (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start m-10 gap-y-4" key={index}>
          <div
            className={`flex-1 grid justify-center items-start ${
              index % 2 == 0 ? "md:order-2 md:justify-end" : "md:order-4 md:justify-start"
            }`}
          >
            {icon === "npm" && (
              <div className="mt-1.5">
                <NPM width={63} />
              </div>
            )}
            {icon === "vscode" && (
              <div className="mt-0.5">
                <VSCode width={24} />
              </div>
            )}
          </div>
          <div className="h-6 w-6 p-1 mx-12 mt-0.5 rounded-full border-2 border-dashed md:order-3">
            <div className="w-full h-full rounded-full bg-primary-dark" />
          </div>
          <div
            className={`flex-1 md:text-start break-all ${
              index % 2 == 0 ? "order-4" : "place-items-end md:text-end order-2"
            }`}
          >
            <p className="leading-[26px] font-cabinet text-[26px] tracking-[-0.5px] font-bold">{details}</p>
            <p className="text-black/40 font-medium mt-1">{date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
