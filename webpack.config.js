const paths = require("./configs/paths")

const { ProgressPlugin, BannerPlugin } = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const stylesHandler = MiniCssExtractPlugin.loader

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const ReactRefreshTypeScript = require("react-refresh-typescript")

const isDevelopment = process.env.NODE_ENV !== "production"
module.exports = {
    mode: "development",
    target: "web",
    entry: {
        app: `${paths.src}/index.tsx`,
    },
    devtool: "source-map",
    optimization: {
        runtimeChunk: {
            name: "runtime",
        },
    },
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
    output: {
        path: paths.build,
        filename: "js/[name].bundle.js",
        publicPath: "/",
    },
    resolve: {
        alias: {
            "@": `${paths.src}/modules`,
            features: `${paths.src}/features`,
            entities: `${paths.src}/entities`,
            pages: `${paths.src}/pages`,
            app: `${paths.src}/app`,
            shared: `${paths.src}/shared`,
            widgets: `${paths.src}/widgets`,
        },
        extensions: [".tsx", ".ts", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("ts-loader"),
                        options: {
                            getCustomTransformers: () => ({
                                before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
                            }),
                            transpileOnly: isDevelopment,
                        },
                    },
                ],
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: "ts-loader",
            //     exclude: /node_modules/,
            //     options: {
            //         transpileOnly: true,
            //     },
            // },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    stylesHandler,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true, importLoaders: 1, modules: false },
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

        new ProgressPlugin({
            percentBy: "entries",
            handler(percentage, message, ...args) {
                console.log(`${(percentage * 100).toFixed()}% ${message} ${args}`)
            },
        }),
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `${paths.public}/index.html`,
            filename: "index.html",
        }),
    ],
}
