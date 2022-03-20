module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 600,
      selectorBlackList: [".novw"],
    },
  },
};
