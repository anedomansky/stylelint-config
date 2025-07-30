import { testRule } from "stylelint-test-rule-node";

testRule({
  ruleName: "max-nesting-depth",
  config: [2, { ignore: ["blockless-at-rules"] }],
  accept: [
    {
      description: "correct usage",
      code: "a { \nspan {} }"
    },
    {
      description: "correct usage",
      code: "@media print { \na { \nspan {} }\n}"
    }
  ],
  reject: [
    {
      description: "incorrect usage",
      code: "a { b { c { d { top: 0; }}}}",
      message: "Expected nesting depth to be no more than 2 (max-nesting-depth)",
    },
    {
      description: "incorrect usage",
      code: "a { & > b { & > c { @media print { color: pink; }}}}",
      message: "Expected nesting depth to be no more than 2 (max-nesting-depth)",
    }
  ]
});