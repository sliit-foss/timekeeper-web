import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";

const Button = ({ children, className, arrow = false, arrowClassName, ...props }) => {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center md:text-[20px] cursor-pointer font-bold font-sf rounded-3xl bg-primary-light-translucent px-4 py-[0.35rem]",
        className
      )}
      {...props}
    >
      {typeof children === "string" ? <span className="gradient-text">{children}</span> : children}
      {(arrow || arrowClassName) && (
        <FaChevronRight className={twMerge("text-primary-medium mt-0.5 pl-2.5", arrowClassName)} />
      )}
    </button>
  );
};

const ButtonWrapper = ({ href, ...props }) => {
  if (href) {
    return (
      <a href={href}>
        <Button {...props} />
      </a>
    );
  }
  return <Button {...props} />;
};

export default ButtonWrapper;
