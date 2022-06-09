const paths = require("./paths")

const webpack = require("webpack")
const { merge } = require("webpack-merge")

const common = require("./common")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
        compress: true,

        static: {
            directory: paths.build,
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    plugins: [new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin()],
})
