const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? '/linmo/dist/' : '/',

  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '~@/assets/reset.css';`
      }
    }
  }
});
