import { Button, Heading, SubHeading, TerminalGroup } from "@/components/common";
import { code, output } from "./data";

const Console = ({ className }) => {
  return (
    <div className={`py-[60px] w-full ${className}`}>
      <Heading className="px-5 mb-6">See the time in real-time</Heading>
      <SubHeading className="px-5 md:px-12 lg:px-40 pb-5">
        A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
        source code
      </SubHeading>
      <TerminalGroup className="w-[870px] mx-auto mt-[20px]" primary={code} secondary={output} />
      <Button className="mx-auto mb-[-85px]" arrow>
        Try it out
      </Button>
    </div>
  );
};

export default Console;
