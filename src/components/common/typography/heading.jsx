import { twMerge } from "tailwind-merge";

const Heading = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        "font-cabinet lg:tracking-[-3px] font-bold text-[60px] text-center lg:text-[76px] leading-[73px]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
