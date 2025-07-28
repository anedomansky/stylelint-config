/** @type {import('stylelint').Config} */
export default {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-prettier/recommended"
  ],
  "plugins": ["stylelint-order", "stylelint-plugin-defensive-css", "stylelint-plugin-logical-css"],
  "rules": {
    "import-notation": null,
    "max-nesting-depth": [2, { "ignore": ["blockless-at-rules"] }],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["host", "host-context"]
      }
    ],
    "selector-class-pattern": [
      "^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:(?:_|--)[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*){0,2}(?:\\[.+\\])?$",
      {
        "message": "Expected class selector to match 'class-name', 'class-name--class-modifier', 'class-block__class-element' or 'class-block__class-element--class-modifier'"
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["ng-deep"]
      }
    ],
    "order/order": [
      "at-rules",
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules"
    ],
    "order/properties-alphabetical-order": true,
    "plugin/use-defensive-css": [true, { "severity": "warning" }],
    "plugin/use-logical-properties-and-values": [
      true,
      { "severity": "warning" }
    ],
    "plugin/use-logical-units": [true, { "severity": "warning" }]
  }
}
