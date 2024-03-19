export default {
  root: true,
  extends: ["plugin:@next/next/recommended", "@payloadcms"],
  ignorePatterns: ["**/payload-types.ts"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
