import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button, SubHeading } from "@/components/common";
import { TimekeeperAnimated } from "@/icons";

const Hero = ({ className }) => {
  return (
    <>
      <div className="relative">
        <div className="border-floating border-r-2 md:w-1/2 min-h-full inline-block md:ml-[2px]" />
        <div className={`py-[60px] ${className} relative`}>
          <div className="bg-white flex justify-center items-center">
            <Button className="bg-white border gap-x-1.5">
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
              <SubHeading className="text-left md:pr-12">
                We redefine the way you monitor and analyze your applications. Say goodbye to manual log injection and
                tedious debugging sessions. With Timekeeper, you&apos;ll effortlessly inject logs into your application
                source code, thanks to our ingenious series of transformations.
              </SubHeading>
              <div className="flex flex-wrap gap-x-2 gap-y-5 mt-[40px] ">
                <Button href="/docs/getting-started" className="w-auto" arrowClassName="md:mt-[0.08rem]">
                  Get started
                </Button>
                <Button
                  href="/docs/getting-started"
                  className="xs:bg-transparent hover:outline-transparent"
                  arrowClassName="text-primary-light"
                >
                  See the docs
                </Button>
              </div>
            </div>
            <div className="md:flex hidden justify-center grow flex-shrink-0 basis-1/2 -translate-y-16 ml-6">
              <TimekeeperAnimated />
            </div>
          </div>
        </div>
      </div>
      <div className="border-floating border-b-2" />
    </>
  );
};

export default Hero;
