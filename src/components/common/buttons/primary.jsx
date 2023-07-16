import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, arrow = false, arrowClassName, ...props }) => {
  return (
    <button
      className={twMerge(
        "group flex justify-center items-center text-[17px] md:text-[20px] cursor-pointer font-sf rounded-3xl px-4 py-[0.35rem] splash",
        "bg-primary-light-translucent outline outline-transparent filter",
        "hover:bg-transparent hover:outline-double hover:outline-gray-extra-light hover:contrast-[2] transition-all duration-medium",
        className
      )}
      {...props}
    >
      {typeof children === "string" ? (
        <span className={twMerge("font-semibold gradient-text")}>{children}</span>
      ) : (
        children
      )}
      {(arrow || arrowClassName) && (
        <div className={twMerge("text-primary-medium md:mt-0.5 pl-1.5 animated-chevron", arrowClassName)}>
          <FaChevronRight className="p-0.5" />
        </div>
      )}
    </button>
  );
};

const ButtonWrapper = ({ to, target = "_self", ...props }) => {
  if (to) {
    return (
      <Link to={to} target={target}>
        <Button {...props} />
      </Link>
    );
  }
  return <Button {...props} />;
};

export default ButtonWrapper;
