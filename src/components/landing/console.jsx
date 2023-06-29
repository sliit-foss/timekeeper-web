import { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const Console = () => {
  const code = [
    'const hello = require(“@utils”);',
    ' ',
    'const sum = (a, b) => {',
    '		return a + b;',
    '};',
    ' ',
    'hello();',
    ' ',
    'console.log(sum(4, 5));'
  ];

  const ExampleCode = () => {
    return (
      <CopyBlock
      text={code.join('\n')}
      language={"js"}
      showLineNumbers={true}
      theme={monoBlue}
      codeBlock
      />
    );
  };
  
  const output = [
    '{"correlationId": "4e92fc149bfe5fd1b1ff7b6cdd33189d", "level": "info","message": "[tracer] - hello execution initiated", "timestamp": "2023-05-25T04:25:52.177Z"}',
    'Hello!', 
    '{"correlationId": "4e6d75cf7250b16456010b635ec5c558", "level": "info", "message": "[tracer] - hello execution completed - execution_time : 0.7908000000752509ms", "timestamp": "2023-05-25T04:25:52.179Z"}', 
    '{"correlationId": "34fedb32f80e6ac4cd329a948e5ac2cc", "level": "info", "message": "[tracer] - sum execution initiated", "timestamp": "2023-05-25T04:25:52.180Z"}', 
    '{"correlationId": "3d2fa3f77d4506f3192b28327cdfa88d", "level": "info", "message": "[tracer] - sum execution completed - execution_time : 0.05579999997280538ms", "timestamp": "2023-05-25T04:25:52.180Z"}',
    '9'
  ];

  const ExampleCodeOutput = () => {
    return (
      <CopyBlock
      text={output.join('\n')}
      language={"json"}
      showLineNumbers={true}
      theme={monoBlue}
      codeBlock
      />
    );
  };
  
  const [ActiveTab, setActiveTab] = useState(() => ExampleCode);
  
  return (
    <div className="space-y-10">
      <h1 className="font-cabinet font-bold lg:text-[76px] text-[30px] text-center">See the time in real-time</h1>
      <p className="text-gray-medium text-center mx-auto w-full md:w-3/4 font-inter">
        A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
        source code
      </p>
      <div className="md:w-[550px] mx-auto overflow-hidden shadow rounded-lg p-5">
        <ul className="flex flex-wrap space-x-1">
          <li className={`tab ${ActiveTab.toString() === ExampleCode.toString() ? 'active': ''}`} onClick={() => setActiveTab(() => ExampleCode)}>
            Example.js
          </li>
          <li className={`tab ${ActiveTab.toString() === ExampleCodeOutput.toString() ? 'active': ''}`} onClick={() => setActiveTab(() => ExampleCodeOutput)}>
            Output
          </li>
        </ul>
        <ActiveTab />
      </div>
    </div>
  );
};

export default Console;
