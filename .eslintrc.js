module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 },
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:typescript-sort-keys/recommended",
    "next",
  ],
  plugins: [
    "eslint-plugin-import-helpers",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      rules: {
        "import-helpers/order-imports": [
          "warn",
          {
            newlinesBetween: "always",
            groups: ["module", "/^~/", ["parent", "sibling", "index"]],
            alphabetize: { order: "asc", ignoreCase: true },
          },
        ],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",
        "sort-keys-fix/sort-keys-fix": "error",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
