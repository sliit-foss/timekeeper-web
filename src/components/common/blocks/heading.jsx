import { twMerge } from "tailwind-merge";

const Heading = ({ children, className, sub }) => {
  return (
    <>
      {!sub ? (
        <h1
          className={twMerge(
            "font-cabinet lg:tracking-[-3px] font-bold text-[60px] text-center lg:text-[76px] leading-[73px]",
            className
          )}
        >
          {children}
        </h1>
      ) : (
        <p
          className={twMerge(
            "text-gray-medium text-[26px] lg:tracking-[-0.5px] leading-tight text-center mx-auto w-full md:w-[800px]",
            className
          )}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default Heading;
