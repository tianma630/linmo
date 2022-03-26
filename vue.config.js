const { defineConfig } = require("@vue/cli-service");
const argv = require('minimist')(process.argv.slice(2));

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? '/linmo/dist/' : '/',

  filenameHashing: false,

  // outputDir: argv['_'][1] || 'dist',

  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '~@/assets/reset.css';`
      },
    }
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch');

    config.plugin('html').tap(args => {
      args[0].title = '临摹';
      return args;
    });
  }
});
