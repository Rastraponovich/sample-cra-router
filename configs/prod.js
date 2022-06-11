const paths = require("./paths")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    target: "browserslist",
    entry: {
        index: {
            import: `${paths.src}/index.tsx`,
        },
    },
    devtool: false,
    output: {
        filename: "js/[name].[contenthash].bundle.js",
        publicPath: "./",
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
}
