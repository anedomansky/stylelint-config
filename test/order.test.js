import { testRule } from "stylelint-test-rule-node";

testRule({
  ruleName: "order/order",
  plugins: ["stylelint-order"],
  config: [
      "at-rules",
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules"
  ],
  fix: true,
  accept: [
    {
      description: "correct usage",
      code: "a { @include test;\n--custom: 5px;\n$test: 5rem;\ncolor: red;\nspan {} }"
    }
  ],
  reject: [
    {
      description: "incorrect usage",
      code: "a { --custom: 5px;\n@include test;\n$test: 5rem;\ncolor: red;\nspan {} }",
      message: "Expected at-rule to come before custom property (order/order)",
      fixed: 'a {\n@include test; --custom: 5px;\n$test: 5rem;\ncolor: red;\nspan {} }'
    }
  ]
});

testRule({
  ruleName: "order/properties-alphabetical-order",
  plugins: ["stylelint-order"],
  config: true,
  fix: true,
  accept: [
    {
      description: "correct usage",
      code: "a { \nbackground: grey;\nborder-radius: 10px;\ncolor: red;\nspan {} }"
    }
  ],
  reject: [
    {
      description: "incorrect usage",
      code: "a { \ncolor: red;\nbackground: grey;\nborder-radius: 10px;\nspan {} }",
      message: "Expected background to come before color (order/properties-alphabetical-order)",
      fixed: 'a {\nbackground: grey;\nborder-radius: 10px; \ncolor: red;\nspan {} }'
    }
  ]
});