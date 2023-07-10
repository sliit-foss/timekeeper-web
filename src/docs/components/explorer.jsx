import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { repositoryLink } from "@/constants";

const Explorer = ({ className, ...props }) => {
  const pathname = useLocation().pathname;
  return (
    <div
      className={twMerge("flex flex-col w-full h-full px-6 py-6 transition-all duration-medium", className)}
      {...props}
    >
      <div className="flex flex-col w-full gap-y-4 text-black">
        <a href={`${repositoryLink}/issues`} target="_blank" className="hover:gradient-text cursor-pointer" rel="noreferrer">
          Open an Issue
        </a>
        <a
          href={`${repositoryLink}/blob/main/src/docs/pages${pathname.replace("/docs", "")}.mdx`}
          target="_blank"
          className="hover:gradient-text cursor-pointer" rel="noreferrer"
        >
          Edit this page on GitHub
        </a>
      </div>
    </div>
  );
};

export default Explorer;
