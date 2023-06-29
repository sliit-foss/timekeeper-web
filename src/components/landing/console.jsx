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

  const output = [
    '{"correlationId": "4e92fc149bfe5fd1b1ff7b6cdd33189d", "level": "info","message": "[tracer] - hello execution initiated", "timestamp": "2023-05-25T04:25:52.177Z"}',
    'Hello!', 
    '{"correlationId": "4e6d75cf7250b16456010b635ec5c558", "level": "info", "message": "[tracer] - hello execution completed - execution_time : 0.7908000000752509ms", "timestamp": "2023-05-25T04:25:52.179Z"}', 
    '{"correlationId": "34fedb32f80e6ac4cd329a948e5ac2cc", "level": "info", "message": "[tracer] - sum execution initiated", "timestamp": "2023-05-25T04:25:52.180Z"}', 
    '{"correlationId": "3d2fa3f77d4506f3192b28327cdfa88d", "level": "info", "message": "[tracer] - sum execution completed - execution_time : 0.05579999997280538ms", "timestamp": "2023-05-25T04:25:52.180Z"}',
    '9'
  ];
  
  return (
    <div className="space-y-10 relative">
      <h1 className="font-cabinet font-bold lg:text-[76px] text-[30px] text-center">See the time in real-time</h1>
      <p className="text-gray-medium text-center mx-auto w-full md:w-3/4 font-inter">
        A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
        source code
      </p>
      <div className="md:w-[500px] bg-gray-200 mx-auto font-medium border relative z-10 rounded-3xl pt-8">
        <p className="p-4 bg-white rounded-b-3xl" >{code.map(i => (<>{i}<br/></>))}</p>
      </div>
      <div className="md:w-fit bg-gray-200 mx-auto font-medium border relative z-10 rounded-3xl pt-8">
        <p className="p-4 bg-white rounded-b-3xl" >{output.map(i => (<>{i}<br/></>))}</p>
      </div>
      <div className="w-[80%] h-[500px] top-[40%] border-2 absolute left-[10%] z-0 border-dashed rounded-3xl"></div>
    </div>
  );
};

export default Console;
