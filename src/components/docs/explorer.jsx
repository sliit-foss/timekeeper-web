import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { repositoryLink } from "@/constants";
import { useBreakpoint } from "@/hooks";

const Explorer = ({ className }) => {
  const pathname = useLocation().pathname;

  if (!useBreakpoint("2xl")) return null;

  return (
    <div
      className={twMerge("flex flex-col w-full h-full py-6 transition-all duration-medium", className)}
      data-aos="fade-left"
      data-aos-duration="300"
    >
      <div className="px-6">
        <div className="flex flex-col w-full gap-y-4 text-black">
          <a
            href={`${repositoryLink}/issues`}
            target="_blank"
            className="hover:gradient-text cursor-pointer"
            rel="noreferrer"
          >
            Open an Issue
          </a>
          <a
            href={`${repositoryLink}/blob/main/src/pages/docs/${pathname.replace("/docs", "")}.mdx`}
            target="_blank"
            className="hover:gradient-text cursor-pointer"
            rel="noreferrer"
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
