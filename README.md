# eslint-config-podpoint-react
The base configuration for [ESLint](http://eslint.org), to be included in every React JS project.

## Installation

Install dependencies:

```bash
npm install --save-dev babel-eslint eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-airbnb pod-point/eslint-config-podpoint-base pod-point/eslint-config-podpoint-react
```

Create an `.eslintrc.json` file with the following contents:

```json
{
  "extends": "@pod-point/eslint-config-podpoint-react"
}
```

Create an `.eslintignore` file with the following contents:

```text
node_modules
````
