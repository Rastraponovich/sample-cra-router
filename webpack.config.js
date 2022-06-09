const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const stylesHandler = MiniCssExtractPlugin.loader

console.log(process.env.NODE_ENV)

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            features: path.resolve(__dirname, "./src/features"),
            entities: path.resolve(__dirname, "./src/entities"),
            pages: path.resolve(__dirname, "./src/pages"),
            app: path.resolve(__dirname, "./src/app"),
            shared: path.resolve(__dirname, "./src/shared"),
            widgets: path.resolve(__dirname, "./src/widgets"),
        },
    },

    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    cache: {
        type: "filesystem",
        cacheDirectory: path.resolve(__dirname, ".temp_cache"),
        compression: "gzip",
        maxAge: 5184000000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "Development",
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin(),
        // new BundleAnalyzerPlugin(),
    ],

    optimization: {
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
        emitOnErrors: true,
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,

            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },
}
