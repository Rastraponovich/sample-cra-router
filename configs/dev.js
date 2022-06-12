const paths = require("./paths")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const stylesHandler = MiniCssExtractPlugin.loader

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const ReactRefreshTypeScript = require("react-refresh-typescript")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    target: "web",
    optimization: {
        runtimeChunk: {
            name: "runtime",
        },
    },
    // devtool: "eval-nosources-cheap-source-map",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: paths.public,
            publicPath: "/",
            watch: {
                ignored: /node_modules/,
            },
        },
        devMiddleware: {
            publicPath: "/",
        },
        historyApiFallback: true,
        hot: true,
        compress: true,
        port: 3000,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            getCustomTransformers: () => ({
                                before: [ReactRefreshTypeScript()].filter(Boolean),
                            }),
                            transpileOnly: true,
                        },
                    },
                ],
            },

            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    stylesHandler,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: false,
                        },
                    },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: {
                entry: "@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry",
                module: "@pmmmwh/react-refresh-webpack-plugin/overlay",
                sockIntegration: "wds",
            },
        }),
        new HtmlWebpackPlugin({
            template: `${paths.public}/index.html`,
            filename: "index.html",
        }),
    ],
}
