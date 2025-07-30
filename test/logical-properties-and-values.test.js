import { testRule } from "stylelint-test-rule-node";

testRule({
  ruleName: "plugin/use-logical-properties-and-values",
  plugins: ["stylelint-plugin-logical-css"],
  config: [true, { "severity": "warning" }],
  accept: [
    {
      description: "correct usage",
      code: "a { div { block-size: 5rem; } }"
    },
  ],
  reject: [
    {
      description: "incorrect usage",
      code: "a { div { height: 50px; } }",
      message: 'Unexpected "height" property. Use "block-size". (plugin/use-logical-properties-and-values)',
    },
  ]
});