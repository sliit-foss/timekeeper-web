import { Fragment, useRef } from "react";
import { compact } from "lodash";
import { twMerge } from "tailwind-merge";
import { useBreakpoint } from "@/hooks";
import { default as Typewriter } from "typewriter-effect";

const Terminal = ({ code = [""], styles = { root: "", header: "", body: "" }, animate = false, animateDelay = 60 }) => {
  const containerRef = useRef(null);

  const { md } = useBreakpoint();

  return (
    <div className={twMerge("mb-[40px] rounded-primary border", styles.root)}>
      <div className={twMerge("bg-gray-ultra-light h-[36px] rounded-t-primary", styles.header)} />
      <div className="transition-all duration-300 ease-in-out">
        <div
          ref={containerRef}
          className={twMerge(
            "font-sf text-[22px] bg-white md:px-[24px] md:pt-[18px] md:pb-[24px] md:rounded-b-primary md:m-0 m-[16px] leading-5",
            styles.body
          )}
        >
          {!animate ? (
            code.map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))
          ) : (
            <>
              <Typewriter
                options={{
                  autoStart: true,
                  strings: compact(code).join("<br />"),
                  delay: animateDelay,
                  cursor: "",
                  onCreateTextNode: (textNode) => {
                    if (containerRef.current) {
                      containerRef.current.parentNode.style.height =
                        containerRef.current.offsetHeight + (md ? 40 : 30) + "px";
                    }
                    const node = document.createElement("span");
                    node.classList.add("animate-in", "fade-in", "duration-[500ms");
                    node.appendChild(new Text(textNode));
                    return node;
                  }
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
