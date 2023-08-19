import { Fragment, memo, useMemo, useRef } from "react";
import { compact, isEqual } from "lodash";
import { twMerge } from "tailwind-merge";
import { useBreakpoint, useResize } from "@/hooks";
import { default as Typewriter } from "typewriter-effect";

const Terminal = ({
  code = [""],
  prompt = "user@machine ~ demo %",
  showPrompt = false,
  styles = { root: "", header: "", body: "" },
  animate = false,
  animateDelay = 30
}) => {
  const containerRef = useRef(null);
  const promptRef = useRef(null);

  const { md } = useBreakpoint();

  const terminalId = useMemo(() => Math.random().toString(36).substr(2, 9), []);

  useResize(() => {
    if (promptRef.current) {
      const clone = promptRef.current.cloneNode(true);
      promptRef.current.remove();
      clone.classList.add("top-0", "left-0");
      document.getElementById(terminalId)?.appendChild(clone);
    }
  }, [promptRef.current]);

  return (
    <div className={twMerge("mb-[40px] rounded-primary border", styles.root)}>
      <div
        className={twMerge(
          "bg-gray-ultra-light h-[50px] rounded-t-primary flex items-center px-[1.5rem] gap-x-3",
          styles.header
        )}
      >
        <div className="w-3.5 h-3.5 rounded-full bg-[#fc605c]" />
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbe2f]" />
        <div className="w-3.5 h-3.5 rounded-full bg-[#34c749]" />
      </div>
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
              {showPrompt && (
                <span ref={promptRef} className="absolute">
                  {prompt}
                </span>
              )}
              <Typewriter
                id={terminalId}
                className="relative"
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

export default memo(Terminal, (prevProps, currentProps) => isEqual(prevProps, currentProps));
