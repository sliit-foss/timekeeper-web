import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { startCase } from "lodash";
import { twMerge } from "tailwind-merge";

const BreadCrumbs = ({ className }) => {
  const path = useLocation().pathname;
  return (
    <div
      className={twMerge(
        "w-full flex justify-start flex-wrap py-4 2xl:py-7 pb-0 2xl:pb-2 px-6 2xl:px-7 px-10 gap-y-2",
        className
      )}
    >
      {path.split("/").map((crumb, index) => {
        if (crumb === "") return null;
        const last = index === path.split("/").length - 1;
        return (
          <div key={index} className="flex justify-start items-center">
            <span className={`text-gray-dark ${last ? "font-semibold" : ""}`}>{startCase(crumb)}</span>
            {!last && <FaChevronRight className="mx-2 text-gray-dark opacity-70 w-3.5 h-3.5" />}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
