import { twMerge } from "tailwind-merge";
import Terminal from "./terminal";

const TerminalGroup = ({ primary = [""], secondary = [""], className = "" }) => {
  return (
    <div className={twMerge("grid", className)}>
      <div className="md:grid hidden col-start-1 ml-[50%] md:mt-[calc(50%+40px)] mt-[500%] border-t-2 border-l-2 border-custom rounded-tl-[40px] place-items-end"></div>
      <Terminal 
        code={primary} 
        styles={{
          root: "",
          body: "md:text-[22px] text-[16px] leading-[16px] md:leading-[22px]"
        }}
      />
      <div className="md:hidden grid h-[30px] border-r-2 border-dashed w-1/2"></div>
      <div className="md:grid hidden col-start-3 mr-[50%] md:mt-[calc(50%+40px)] mt-[500%] border-t-2 border-r-2 border-custom rounded-tr-[40px] place-items-start"></div>
      <Terminal
        code={secondary}
        styles={{
          root: "md:col-span-3 mx-auto lg:w-[865px] md:w-[calc(100%-40px)]",
          body: "md:text-[20px] text-[16px] md:h-auto h-[265px] overflow-y-scroll no-scrollbar whitespace-pre-wrap leading-[22px]"
        }}
      />
    </div>
  );
};

export default TerminalGroup;
