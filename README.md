# eslint-config-podpoint-react
The base configuration for [ESLint](http://eslint.org), to be included in every React JS project.

## Installation

Install dependencies:

```
npm install --save-dev babel-eslint eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react pod-point/eslint-config-podpoint-base pod-point/eslint-config-podpoint-react
```

Create an `.eslintrc.json` file with the following contents:

```json
{
  "extends": "@pod-point/eslint-config-podpoint-react"
}
```

Create an `.eslintignore` file with the following contents:

```
node_modules
````
