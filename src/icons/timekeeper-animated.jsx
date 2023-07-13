import { twMerge } from "tailwind-merge";
import { Timekeeper } from ".";

const TimekeeperAnimated = ({ className="w-[310px]", ...props }) => {
  return (
    <div className={twMerge("animate-[spin_10s_linear_infinite] duration-500 origin-[43.5%_50%]", className)}>
      <Timekeeper className={className} {...props} />
    </div>
  );
};

export default TimekeeperAnimated;
