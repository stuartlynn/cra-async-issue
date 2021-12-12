const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const wasm = new WasmPackPlugin({
  outDir:"./dist",
  crateDirectory: path.resolve(__dirname),
  args: "--log-level warn",
});
console.log("WASM IS ", wasm);
const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath:"auto",
    library: {
      name: "web_func",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
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
  plugins: [wasm],
  experiments: {
    asyncWebAssembly:true
  },
};

module.exports = config;
