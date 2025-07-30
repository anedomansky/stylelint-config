import { testRule } from "stylelint-test-rule-node";

testRule({
  ruleName: "prettier/prettier",
  plugins: ["stylelint-prettier"],
  config: true,
  fix: true,
  accept: [
    {
      description: "correct usage",
      code: '.x {\n  color: red;\n}\n',
    }
  ],
  reject: [
    {
      description: "incorrect usage",
      code: '.x {\ncolor: red;\n}\n',
      fixed: '.x {\n  color: red;\n}\n',
      message: 'Insert "··" (prettier/prettier)'
    }
  ]
});