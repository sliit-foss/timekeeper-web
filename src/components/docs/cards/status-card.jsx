import { twMerge } from "tailwind-merge";

const StatusCard = ({ className, title, subtitle, icon: Icon }) => {
  return (
    <div
      className={twMerge(
        "group w-full flex flex-col place-items-center relative py-5 px-3 md:py-7 md:px-7 gap-1 animated-border-static revert",
        className
      )}
    >
      <div className="opacity-80 mb-3 transform scale-75 md:scale-100 rounded-2xl p-5 flex aspect-square rotate-45 md:mt-2 bg-gray-200">
        <Icon className="w-8 h-8 -rotate-45 fill-black" />
      </div>
      <span className="font-semibold text-sm md:text-base -mt-3 md:mt-2">{title}</span>
      <span className="font-medium text-sm md:text-base">{subtitle}</span>
    </div>
  );
};

export default StatusCard;
