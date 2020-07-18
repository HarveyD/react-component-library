const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    library: "react-component-library",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader")
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src")
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
