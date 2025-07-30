# stylelint-config

[![npm version](https://img.shields.io/npm/v/@anedomansky%2stylelint-config?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@anedomansky%2stylelint-config)

Custom shareable stylelint config.

## Requirements

- [Stylelint](https://stylelint.io/) >= 16.0.0
- [Prettier](https://prettier.io/) >= 3.0.0
- [Node.js](https://nodejs.org/en) >= 18.12.0

## Installation

```bash
npm i -D @anedomansky/stylelint-config
```

## Usage

Create a `.stylelintrc.json` file in the root of your project and add the following:

```json
{
  "extends": [
    "@anedomansky/stylelint-config"
  ]
}
```

## Configuration

You can customize the configuration by adding your own rules in the `.stylelintrc.json` file. For example:

```json
{
  "extends": [
    "@anedomansky/stylelint-config"
  ],
  "rules": {
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true
  }
}
```

## Plugins and Configs

This configuration uses the following plugins and configs:

- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)
- [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines)
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
- [stylelint-plugin-defensive-css](https://github.com/yuschick/stylelint-plugin-defensive-css#readme)
- [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css)
