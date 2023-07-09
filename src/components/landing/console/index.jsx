import { Button, Heading, SubHeading, TerminalGroup } from "@/components/common";
import { code, output } from "./data";

const Console = ({ className }) => {
  return (
    <div className={`py-[60px] w-full ${className}`}>
      <Heading className="px-5 mb-6">See the time in real-time</Heading>
      <SubHeading className="px-5 md:px-12 lg:px-40 pb-5">
        Gain visual insight into the chronological flow of functions and unfold the inner workings of your application
        with ease
      </SubHeading>
      <TerminalGroup className="w-[870px] mx-auto mt-[20px]" primary={code} secondary={output} />
      <Button href="/docs/installation" className="mx-auto mt-[40px]" arrow>
        Try it out
      </Button>
    </div>
  );
};

export default Console;
