export const code = [
  "const sum = (a, b) => {",
  "&nbsp;&nbsp;&nbsp;&nbsp;return a + b;",
  "};",
  " ",
  "console.log(sum(4, 5));"
];

export const output = [
  '{"correlationId": "34fedb32f80e6ac4cd329a948e5ac2cc", "level": "info", "message": <span class="text-gray-medium">"[tracer] - sum execution initiated"</span>, "timestamp": "2023-05-25T04:25:52.180Z"}',
  '{"correlationId": "34fedb32f80e6ac4cd329a948e5ac2cc", "level": "info", "message": <span class="text-gray-medium">"[tracer] - sum execution completed - execution_time : 0.05579999997280538ms"</span>, "timestamp": "2023-05-25T04:25:52.180Z"}',
  "9"
];
