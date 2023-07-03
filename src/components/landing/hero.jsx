import { FaArrowUp } from "react-icons/fa";
import { Button } from "@/components/common";
import { Timekeeper } from "@/icons";

const Hero = ({ className }) => {
  return (
    <div className="relative">
      <div className="md:w-1/2 min-h-full absolute inline-block border-r-2 md:ml-[2px] z-0 border-dashed "></div>
      <div className={`py-[60px] ${className}`}>
        <div className="flex justify-center items-center">
          <Button className="bg-transparent border font-medium gap-x-2">
            <span className="gradient-text ">Coming Soon</span>
            <FaArrowUp className="text-primary-medium rotate-45" />
          </Button>
        </div>
        <h1 className=" font-bold tracking-[-4.8px] font-cabinet text-[65px] md:text-[80px] lg:text-[121px]">
          TimeKeeper
        </h1>
        <div className="flex">
          <p className="tracking-[-0.5px] leading-tight font-normal text-[26px] text-gray-medium w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="md:block hidden lg:px-[145px]">
            <Timekeeper height={230} />
          </div>
        </div>
        <div className="flex gap-x-2 mt-[40px]">
          <Button arrow>Get started</Button>
          <Button href="#" className="bg-transparent" arrowClassName="text-primary-light">
            See the docs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
