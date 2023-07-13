import { twMerge } from "tailwind-merge";

const Heading = ({ children, className, ...props }) => {
  return (
    <h1
      className={twMerge(
        "font-cabinet lg:tracking-[-3px] font-bold text-[28px] md:text-[60px] text-center lg:text-[76px] leading-[63px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
