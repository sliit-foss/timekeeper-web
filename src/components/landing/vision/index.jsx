import { Button, Heading, Insight } from "@/components/common";
import Timeline from "./timeline";

const OurVision = () => {
  return (
    <>
      <div className="mt-[60px]">
        <div className="border-t-2 border-dashed absolute inset-x-0" />
        <Heading className="pt-12 mb-4">Our Vision</Heading>
        <Heading sub>
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
          source code
        </Heading>
      </div>
      <div className="pb-[200px] pt-[40px]">
        <div className="absolute w-[2px] left-[calc(50%+1px)] bg-gradient-to-b from-black/10 via-black/10 to-transparent min-h-full" />
        <div className="absolute left-[calc(50%-1px)] min-h-full border-2 border-white border-dashed" />
        <div className="text-center pt-[30px] z-10 relative ml-1">
          <Timeline />
          <Button className="bg-white border-2 mx-auto mb-[80px]">Continuing to grow</Button>
        </div>
        <div className="border-t-2 border-dashed absolute inset-x-0" />
        <div className="md:ml-[2px] pt-[28px] w-full md:flex justify-center relative z-50">
          <Insight
            info={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            btnText={"Install Blizzard Release"}
          />
          <Insight
            info={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            btnText={"Explore Source Code"}
          />
        </div>
      </div>
    </>
  );
};

export default OurVision;
