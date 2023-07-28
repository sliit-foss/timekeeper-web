import { twMerge } from "tailwind-merge";
import Typewriter from "typewriter-effect";

const Terminal = ({ code = [""], styles = { root: "", header: "", body: "" } }) => {
  const string = code.join("<br /><br />");
  return (
    <div className={twMerge("mb-[40px] rounded-primary border", styles.root)}>
      <div className={twMerge("bg-gray-ultra-light h-[36px] rounded-t-primary", styles.header)} />
      <pre
        className={twMerge(
          "font-sf text-[22px] bg-white md:px-[24px] md:pt-[18px] md:pb-[24px] md:rounded-b-primary md:m-0 m-[16px] leading-5",
          styles.body
        )}
      >
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(string).start();
            }}
          />
          <br />
        </div>
      </pre>
    </div>
  );
};

export default Terminal;
