import { twMerge } from "tailwind-merge";
import { BodyText, Button } from "..";

const Insight = ({
  className,
  description,
  action: { className: actionClassName, text, href, target, ...actionProps },
  ...props
}) => {
  return (
    <div
      className={twMerge(
        `w-10/12 md:w-[320px] bg-white rounded-primary mt-2 md:mt-0 p-[1.3rem] py-[1.5rem] cursor-default`,
        "animated-border text-gray-extra-light from-primary-dark via-gray-extra-light via-[40%] to-gray-extra-light",
        className
      )}
      {...props}
    >
      <BodyText className="w-full text-black/60">{description}</BodyText>
      <Button
        href={href}
        target={target}
        className={twMerge("mx-auto mt-[18px] px-[1.1rem]", actionClassName)}
        arrow
        {...actionProps}
      >
        {text}
      </Button>
    </div>
  );
};

export default Insight;
