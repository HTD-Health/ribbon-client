// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";
console.log(path);

const webconfig = {
  target: "web",
  entry: "./lib/index.ts",
  devtool: "inline-source-map",
  output: {
    library: "ribbonClient",
    path: path.resolve(__dirname, "dist", "esm"),
    libraryTarget: "umd",
    filename: "ribbon-client.js",
    globalObject: "this",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist")],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

const nodeconfig = {
  target: "node",
  entry: "./lib/index.ts",
  devtool: "inline-source-map",
  output: {
    library: "ribbonClient",
    path: path.resolve(__dirname, "dist", "cjs"),
    libraryTarget: "umd",
    filename: "ribbon-client.js",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

module.exports = () => {
  if (isProduction) {
    nodeconfig.mode = "production";
    webconfig.mode = "production";
  } else {
    nodeconfig.mode = "development";
    webconfig.mode = "development";
  }
  return [nodeconfig, webconfig];
};
