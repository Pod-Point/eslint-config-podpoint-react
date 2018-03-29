module.exports = {
    "parser": "babel-eslint",
    "extends": ["@pod-point/eslint-config-podpoint-base", "eslint-config-airbnb/rules/react", "eslint-config-airbnb/rules/react-a11y"],
    "env":{
        "browser": true,
        "node": true,
        "jest": true,
    },
    "rules": {
        "class-methods-use-this": "warn",
        "import/order": "error",
        "object-curly-newline": ["error", {
            "ObjectExpression": { "multiline": true, "minProperties": 2, "consistent": true },
            "ObjectPattern": { "multiline": true, "minProperties": 2, "consistent": true },
            "ImportDeclaration": { "multiline": false, "consistent": true },
            "ExportDeclaration": { "multiline": false, "consistent": true }
        }],
        "react/jsx-curly-spacing": ["error", {"when": "always", "children": true}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-no-bind": ["warn"],
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "react/no-array-index-key": ["warn"],
        "react/require-extension": "off",
    },
    "plugins": [
        "jsx-a11y",
        "react",
    ]
};
