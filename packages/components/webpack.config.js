const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");

const config = {
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:"auto",
    filename: "index.js",
    library: {
      name: "components",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.worker\.ts$/,
        loader: "worker-loader",
        options: {
          filename: "[name].[contenthash].worker.js",
          chunkFilename: "[id].[contenthash].worker.js",
          inline: "fallback",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              keepClassNames: true,
              parser: {
                syntax: "typescript",
                tsx: true,
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".tsx", ".ts", ".js"],
    alias: {},
    fallback: {},
  },
  plugins: [],
  externals: [],
  experiments: {
    asyncWebAssembly:true
  },
  stats: {
    children: true,
  },
};

module.exports = config;
