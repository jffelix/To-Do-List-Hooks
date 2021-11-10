const path = require("path");

const DIST_Path = path.join(__dirname, "./build");
const SRC_Path = path.join(__dirname, "./src");

module.exports = {
  entry: `${SRC_Path}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_Path,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};