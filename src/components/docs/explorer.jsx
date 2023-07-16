import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { repositoryLink } from "@/constants";

const Explorer = ({ className }) => {
  const pathname = useLocation().pathname;
  return (
    <motion.div
      className={twMerge("hidden 2xl:flex flex-col w-full h-full py-6", className)}
      initial={{ opacity: 0, translateX: "100%" }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: "100%" }}
      transition={{ duration: 0.4 }}
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
            href={`${repositoryLink}/blob/main/src/pages/docs${pathname.replace("/docs", "")}.mdx`}
            target="_blank"
            className="hover:gradient-text cursor-pointer"
            rel="noreferrer"
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Explorer;
