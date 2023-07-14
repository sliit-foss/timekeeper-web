import { twMerge } from "tailwind-merge";
import hljs from "highlight.js";
import "@/styles/syntax-highlight.css";
import { useEffect } from "react";

const Terminal = ({ code = ["nothing to preview"], language="javascript", styles = { root: "", header: "", body: "" } }) => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className={twMerge("mb-[40px] rounded-primary", styles.root)}>
      <div className={twMerge("border-x border-t bg-gray-ultra-light h-[36px] rounded-t-primary", styles.header)} />
      <pre className="bg-white px-[24px] pt-[18px] pb-[38px] border rounded-b-primary">
        {code.map((line, index) => (
          <div key={index}>
            <code className={twMerge("font-sf md:text-[22px] text-[16px] leading-5", styles.body, `language-${language}`)}>
              {line}
            </code>
            <br />
          </div>
        ))}
      </pre>
    </div>
  );
};

export default Terminal;
