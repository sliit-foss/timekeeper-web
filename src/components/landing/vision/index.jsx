import { Button, Heading, Insight, SubHeading } from "@/components/common";
import { timekeeperSourceCode, transformTraceNPM } from "@/constants";
import Timeline from "./timeline";

const OurVision = () => {
  return (
    <>
      <>
        <div className="border-floating border-t-2" />
        <Heading className="pt-12 px-5 mb-6">Our Vision</Heading>
        <SubHeading className="px-5 md:px-12 lg:px-40">
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
          source code
        </SubHeading>
      </>
      <div className="pb-[200px] pt-[40px] relative">
        <div className="absolute w-[2px] left-[calc(50%+1px)] bg-gradient-to-b from-black/10 via-black/10 to-transparent min-h-full" />
        <div className="absolute left-[calc(50%+1px)] min-h-full border-2 border-white border-dashed" />
        <div className="text-center overflow-x-hidden pt-[30px] z-10 relative ml-1">
          <Timeline />
          <div className="bg-white flex justify-center items-center mb-[80px]" data-aos="fade">
            <Button className="bg-white border-2 mx-auto">Continuing to grow</Button>
          </div>
        </div>
        <div className="md:ml-[2px] pt-[28px] w-full flex flex-col md:flex-row gap-x-[3.25rem] gap-y-6 justify-center items-center border-t-2 border-custom z-50">
          <Insight
            description="Get instant access to a prerelease version of our small, yet powerful library as an NPM package. Integrate its capabilities into your projects through here."
            action={{
              text: "Install Blizzard Release",
              to: transformTraceNPM,
              target: "_blank"
            }}
          />
          <Insight
            description="Discover the seamless functionality of our solution by delving into the depths of its source code. Begin your enlightening journey by clicking below."
            action={{
              text: "Explore Source Code",
              to: timekeeperSourceCode,
              target: "_blank"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OurVision;
