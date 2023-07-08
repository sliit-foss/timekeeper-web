import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button, SubHeading } from "@/components/common";
import { TimekeeperAnim } from "@/icons";

const Hero = ({ className }) => {
  return (
    <>
      <div className="relative">
        <div className="md:w-1/2 min-h-full absolute inline-block border-r-2 md:ml-[2px] z-0 border-dashed" />
        <div className={`py-[60px] ${className} relative`}>
          <div className="flex justify-center items-center">
            <Button className="bg-white border font-medium gap-x-1.5">
              <span className="gradient-text font-semibold">Coming Soon</span>
              <div className="-rotate-45 mb-0.5 md:mb-1">
                <div
                  className={twMerge(
                    "text-primary-medium md:mt-0.5 pl-1.5 animated-chevron",
                    "before:h-[0.12rem] before:md:h-[0.187rem] before:top-[42.6%] before:w-[0.85rem] before:group-hover:w-[1rem] before:md:w-[1rem] before:md:group-hover:w-[1.2rem]"
                  )}
                >
                  <FaChevronRight className="p-[0.08rem] md:p-[0.03rem]" />
                </div>
              </div>
            </Button>
          </div>
          <h1 className="font-bold tracking-[-4.8px] font-cabinet text-[65px] md:text-[80px] lg:text-[121px]">
            Timekeeper
          </h1>
          <div className="flex gap-5">
            <div className="grow flex-shrink-0 basis-1/2">
              <SubHeading className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </SubHeading>
            </div>
            <div className="md:flex hidden justify-center grow flex-shrink-0 basis-1/2">
              <div className="animate-[spin_10s_linear_infinite] duration-500">
                <TimekeeperAnim />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-5 mt-[40px] md:mt-0">
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
