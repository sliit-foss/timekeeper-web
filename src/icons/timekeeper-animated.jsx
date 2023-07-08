import { twMerge } from "tailwind-merge";
import { Timekeeper } from ".";

const TimekeeperAnimated = ({ size = 310, className, ...props }) => {
  return (
    <div className={twMerge("animate-[spin_10s_linear_infinite] duration-500 origin-[43.5%_50%]", className)}>
      <Timekeeper width={size} height={size} {...props} />
    </div>
  );
};

export default TimekeeperAnimated;
