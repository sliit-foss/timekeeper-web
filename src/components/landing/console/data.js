export const code = [
  "const hello = require(“@utils”);",
  "const sum = (a, b) => {",
  "		return a + b;",
  "};",
  "hello();",
  "console.log(sum(4, 5));"
];

export const output = [
  '{"correlationId": "4e92fc149bfe5fd1b1ff7b6cdd33189d", "level": "info","message": "[tracer] - hello execution initiated", "timestamp": "2023-05-25T04:25:52.177Z"}',
  "Hello!",
  '{"correlationId": "4e6d75cf7250b16456010b635ec5c558", "level": "info", "message": "[tracer] - hello execution completed - execution_time : 0.7908000000752509ms", "timestamp": "2023-05-25T04:25:52.179Z"}',
  '{"correlationId": "34fedb32f80e6ac4cd329a948e5ac2cc", "level": "info", "message": "[tracer] - sum execution initiated", "timestamp": "2023-05-25T04:25:52.180Z"}',
  '{"correlationId": "3d2fa3f77d4506f3192b28327cdfa88d", "level": "info", "message": "[tracer] - sum execution completed - execution_time : 0.05579999997280538ms", "timestamp": "2023-05-25T04:25:52.180Z"}',
  "9"
];
