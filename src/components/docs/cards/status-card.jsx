import { twMerge } from "tailwind-merge";

const StatusCard = ({ className, title, subtitle, icon: Icon }) => {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col place-items-center relative p-7 gap-1 animated-border-static revert",
        className
      )}
    >
      <div className="opacity-80 mb-3">
        <Icon width={55} height={55} color="black" className="w-[55px] h-[55px]" />
      </div>
      <span className="font-semibold">{title}</span>
      <span className="font-medium">{subtitle}</span>
    </div>
  );
};

export default StatusCard;
