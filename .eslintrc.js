module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  rules: {
    "extends": "next",
    "rules": {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off"
    }
  }
}
