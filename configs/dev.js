const paths = require("./paths")

const webpack = require("webpack")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
        compress: true,

        static: {
            directory: paths.build,
        },
        historyApiFallback: true,
        hot: true,
        port: 3000,
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    },
    plugins: [new MiniCssExtractPlugin()],
}
