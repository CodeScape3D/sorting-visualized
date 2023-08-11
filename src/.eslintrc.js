module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-expressions": "off",
  },
};
