const paths = require("./paths")
const { merge } = require("webpack-merge")
const common = require("./common")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const stylesHandler = MiniCssExtractPlugin.loader

module.exports = merge(common, {
    mode: "production",
    entry: {
        index: {
            import: `${paths.src}/index.tsx`,
            dependOn: ["react"],
        },
        react: ["react", "react-dom"],
    },
    devtool: false,
    output: {
        filename: "js/[name].[contenthash].bundle.js",
        publicPath: "./",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
    ],
    optimization: {
        runtimeChunk: "single",
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
})
