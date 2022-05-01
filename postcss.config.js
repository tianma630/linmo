module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      // viewportWidth: 1200,
      // viewportWidth: 600,
      viewportWidth: 375,
      selectorBlackList: [".novw"],
    },
  },
};
