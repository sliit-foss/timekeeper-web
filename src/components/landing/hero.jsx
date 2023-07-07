import { FaArrowUp } from "react-icons/fa";
import { Button, SubHeading } from "@/components/common";
import { Timekeeper } from "@/icons";

const Hero = ({ className }) => {
  return (
    <>
      <div className="relative">
        <div className="md:w-1/2 min-h-full absolute inline-block border-r-2 md:ml-[2px] z-0 border-dashed" />
        <div className={`py-[60px] ${className} relative`}>
          <div className="flex justify-center items-center">
            <Button className="bg-white border font-medium gap-x-2">
              <span className="gradient-text font-semibold">Coming Soon</span>
              <FaArrowUp className="text-primary-medium rotate-45" />
            </Button>
          </div>
          <h1 className=" font-bold tracking-[-4.8px] font-cabinet text-[65px] md:text-[80px] lg:text-[121px]">
            Timekeeper
          </h1>
          <div className="flex">
            <SubHeading className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </SubHeading>
            <div className="md:block hidden lg:px-[145px]">
              <Timekeeper height={230} />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-5 mt-[40px]">
            <Button href="#" className="w-auto" arrowClassName="md:mt-[0.08rem]">
              Get started
            </Button>
            <Button
              href="#"
              className="xs:bg-transparent hover:outline-transparent"
              arrowClassName="text-primary-light"
            >
              See the docs
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full absolute left-0 border-b-2 z-50 border-dashed" />
    </>
  );
};

export default Hero;
