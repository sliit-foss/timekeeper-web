import { useLayoutEffect, useState } from "react";
import { Button, Heading, SubHeading, TerminalGroup } from "@/components/common";
import { code, output } from "./data";

const Console = ({ className }) => {
  const [secondary, setSecondary] = useState([]);
  useLayoutEffect(() => {
    setTimeout(() => {
      setSecondary(["<span class='opacity-0'>user@machine demo ~ %</span> &nbsp;npm run dev", ...output]);
    }, 3500);
  }, []);
  return (
    <div className={`py-[60px] w-full ${className}`}>
      <Heading className="px-5 mb-6">See the time in real-time</Heading>
      <SubHeading className="px-10 md:px-12 lg:px-40 pb-5">
        Gain visual insight into the chronological flow of functions and unfold the inner workings of your application
        with ease
      </SubHeading>
      <TerminalGroup
        className="md:w-[calc(85%+80px)] md:mx-auto mx-[26px] justify-center mt-[20px]"
        primary={code}
        secondary={secondary}
        animate
      />
      <Button to="/docs/installation" className="mx-auto mt-[20px]" arrow>
        Try it out
      </Button>
    </div>
  );
};

export default Console;
