import { twMerge } from "tailwind-merge";
import { BodyText, Button } from "..";

const Insight = ({ className, description, action: { className: actionClassName, text, ...props } }) => {
  return (
    <div className={`mt-2 md:mt-0 p-5 border-2 w-10/12 md:w-[300px] bg-white rounded-primary ${className}`}>
      <BodyText className="w-full text-black/60">{description}</BodyText>
      <Button className={twMerge("mx-auto mt-[18px]", actionClassName)} arrow {...props}>
        {text}
      </Button>
    </div>
  );
};

export default Insight;
