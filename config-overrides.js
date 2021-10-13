const { adjustStyleLoaders, override, addWebpackModuleRule } = require('customize-cra');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const env = process.env.APP || "mercur";

const apps = ['solis', 'mercur'];

const regex = new RegExp(`${apps.filter(a => a !== env).toString()}.css`);

module.exports = override(
  addWebpackModuleRule({
    test: regex,
    use: ["ignore-loader"],
  })
);
// module.exports = {
//   // The Webpack config to use when compiling your react app for development or production.
//   webpack: function(config, env) {
//     // ...add your webpack config
//     return config;
//   },
// }

