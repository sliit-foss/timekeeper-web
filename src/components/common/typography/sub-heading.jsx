import { twMerge } from "tailwind-merge";

const SubHeading = ({ children, className, ...props }) => {
  return (
    <h2
      className={twMerge(
        "text-gray-medium text-[23px] lg:text-[26px] lg:tracking-[-0.5px] leading-tight text-center mx-auto w-full",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
