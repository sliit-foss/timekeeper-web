import { twMerge } from "tailwind-merge";

const BodyText = ({ children, className, ...props }) => {
  return (
    <p
      className={twMerge("text-gray-medium text-center w-[264px] leading-5 text-[16px] tracking-[-0.3px]", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default BodyText;
