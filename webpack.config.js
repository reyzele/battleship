const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "build/js/src/main.js")
  },
  output: {
    path: path.resolve(__dirname, "build/js"),
    publicPath: "/build/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["env"]
        }
      }
    ]
  }
};
