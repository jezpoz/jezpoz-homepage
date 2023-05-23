module.exports = {
  extends: ["next", "turbo", "prettier", "@sanity/eslint-config-studio"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
