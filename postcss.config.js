module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      // viewportWidth: 600,
      viewportWidth: 375,
      selectorBlackList: [".novw"],
    },
  },
};
