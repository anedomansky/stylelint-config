import { testRule } from "stylelint-test-rule-node";

testRule({
  ruleName: "selector-class-pattern",
  config: [
    "^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:(?:_|--)[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*){0,2}(?:\\[.+\\])?$",
    {
      "message": "Expected class selector to match 'class-name', 'class-name--class-modifier', 'class-block__class-element' or 'class-block__class-element--class-modifier'"
    }
  ],
  accept: [
    {
      description: "correct usage",
      code: ".class__is--bem { @include test; }"
    }
  ],
  reject: [
    {
      description: "incorrect usage",
      code: ".class__is__not--bem { @include test; }",
      message: "Expected class selector to match 'class-name', 'class-name--class-modifier', 'class-block__class-element' or 'class-block__class-element--class-modifier'",
    }
  ]
});