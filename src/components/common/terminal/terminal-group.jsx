import { twMerge } from "tailwind-merge";
import Terminal from "./terminal";

const TerminalGroup = ({ primary = [""], secondary = [""], className = "", animate }) => {
  return (
    <div className={twMerge("grid", className)}>
      <div className="md:grid hidden col-start-1 ml-[50%] md:mt-[calc(50%+40px)] mt-[500%] border-t-2 border-l-2 border-custom rounded-tl-[40px] place-items-end" />
      <Terminal
        code={primary}
        styles={{
          root: "md:mb-[40px] mb-0 md:min-w-[500px] min-h-[210px]",
          body: "md:text-[22px] py-1 md:pb-0 text-[16px] leading-[16px] md:leading-[20px]"
        }}
        animate={animate}
      />
      <div className="md:hidden grid h-[30px] border-r-2 border-dashed w-1/2" />
      <div className="md:grid hidden col-start-3 mr-[50%] md:mt-[calc(50%+40px)] mt-[500%] border-t-2 border-r-2 border-custom rounded-tr-[40px] place-items-start" />
      <Terminal
        code={secondary}
        styles={{
          root: "md:col-span-3 mx-auto lg:w-[865px] w-[85vw] md:w-[calc(100%-40px)] md:min-w-[700px] min-h-[292px]",
          body: "md:text-[20px] text-[16px] md:pb-0 md:h-auto h-[265px] overflow-y-scroll no-scrollbar whitespace-pre-wrap md:leading-[26px] leading-[22px]"
        }}
        animate={animate}
        animateDelay={8}
        showPrompt
      />
    </div>
  );
};

export default TerminalGroup;
