import { twMerge } from "tailwind-merge";
import Terminal from "./terminal";

const TerminalGroup = ({ primary = [""], secondary = [""], className = "" }) => {
  return (
    <div className={twMerge("grid", className)}>
      <div className="grid col-start-1 ml-[50%] md:mt-[calc(50%+40px)] mt-[500%] border-t-2 border-l-2 border-custom rounded-tl-[40px] place-items-end"></div>
      <Terminal code={primary} />
      <div className="grid col-start-3 mr-[50%] md:mt-[calc(50%+40px)] mt-[500%] border-t-2 border-r-2 border-custom rounded-tr-[40px] place-items-start"></div>
      <Terminal
        code={secondary}
        styles={{
          root: "col-span-3 w-full",
          body: "md:text-[20px] text-[14px] whitespace-pre-wrap leading-[26px]"
        }}
      />
    </div>
  );
};

export default TerminalGroup;
