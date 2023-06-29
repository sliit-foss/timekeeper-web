import { CopyBlock, monoBlue } from "react-code-blocks";
import { Button } from "@/components/common";

const Console = () => {
  return (
    
    <div className=" order-last pr-14 ">
      <div className="border-t-2 border-dashed absolute inset-x-0 "></div>
      <h1 className="font-cabinet font-bold lg:text-[76px] text-[30px] text-center">See the time in real-time</h1>
      <p className="text-gray-medium text-center mx-auto w-full md:w-3/4 font-inter">
        A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
        source code
      </p>
      <div className="md:w-[520px] mx-auto pt-4">
        <CopyBlock
          text={`const hello = require(“@utils”);${"\n\n"}const sum = (a, b) => {${"\n\t\t"}return a + b;${"\n"}};${"\n\n"}hello();${"\n\n"}console.log(sum(4, 5));`}
          language={"js"}
          showLineNumbers={true}
          theme={monoBlue}
          codeBlock
        />
      </div>
      <div className="lg:w-[820px] mx-auto pt-4">
        <CopyBlock
          text={`//Output${"\n"}{"correlationId": "4e92fc149bfe5fd1b1ff7b6cdd33189d", "level": "info","message": "[tracer] - hello execution initiated", "timestamp": "2023-05-25T04:25:52.177Z"}${"\n"}Hello!${"\n"}{"correlationId": "4e6d75cf7250b16456010b635ec5c558", "level": "info", "message": "[tracer] - hello execution completed - execution_time : 0.7908000000752509ms", "timestamp": "2023-05-25T04:25:52.179Z"}${"\n"}{"correlationId": "34fedb32f80e6ac4cd329a948e5ac2cc", "level": "info", "message": "[tracer] - sum execution initiated", "timestamp": "2023-05-25T04:25:52.180Z"}${"\n"}{"correlationId": "3d2fa3f77d4506f3192b28327cdfa88d", "level": "info", "message": "[tracer] - sum execution completed - execution_time : 0.05579999997280538ms", "timestamp": "2023-05-25T04:25:52.180Z"}${"\n"}9`}
          language={"json"}
          showLineNumbers={true}
          theme={monoBlue}
          codeBlock
        />
      </div>
      <div className="flex justify-center items-center pt-7">
        <Button arrow >Try it out</Button>
      </div>
    </div>
  );
};

export default Console;
