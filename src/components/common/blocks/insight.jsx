import { Button } from "..";

const Insight = ({ className, info, btnText }) => {
  return (
    <div className={`mx-5 mt-2 md:mt-0 p-5 border-2 w-[300px] bg-white rounded-[20px] ${className}`}>
      <p className="text-gray-medium text-center w-[264px] leading-5 text-[16px] tracking-[-0.3px]">{info}</p>
      <Button className="mx-auto mt-[18px]" arrow>
        {btnText}
      </Button>
    </div>
  );
};

export default Insight;
