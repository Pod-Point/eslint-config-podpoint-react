# eslint-config-podpoint-react
The base configuration for [ESLint](http://eslint.org), to be included in every React JS project.

## Installation

Install dependencies:

```bash
npm install --save-dev babel-eslint eslint@^3.19.0 eslint-plugin-import@^2.3.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-react@^7.0.1 eslint-config-airbnb@^15.0.2 pod-point/eslint-config-podpoint-base pod-point/eslint-config-podpoint-react
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
