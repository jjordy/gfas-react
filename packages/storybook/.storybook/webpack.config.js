const path = require("path");
const { DefinePlugin } = require("webpack");

module.exports = (baseConfig, env, defaultConfig) => ({
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.stories\.jsx?$/,
        use: require.resolve("@storybook/addon-storysource/loader"),
        include: [
          path.resolve(__dirname, "../stories"),
        ],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    ...defaultConfig.resolve,
    // https://github.com/graphql/graphql-js#using-in-a-browser
    extensions: [".mjs", ...defaultConfig.resolve.extensions]
  },
  plugins: [
    ...defaultConfig.plugins,
    // graphql sources check process variable
    new DefinePlugin({
      process: JSON.stringify(true)
    })
  ]
});
