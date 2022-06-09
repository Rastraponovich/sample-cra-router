const paths = require("./paths")

const webpack = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const Dotenv = require("dotenv-webpack")
const stylesHandler = MiniCssExtractPlugin.loader
const babelLoader = {
    loader: "babel-loader",
    options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
            // "@babel/plugin-proposal-class-properties",
            // "@babel/plugin-syntax-dynamic-import",
            // "@babel/plugin-transform-runtime",
        ],
    },
}

module.exports = {
    entry: `${paths.src}/index.tsx`,
    output: {
        path: paths.build,
        filename: "js/[name].bundle.js",
        publicPath: "/",
        clean: true,
        crossOriginLoading: "anonymous",
        module: true,
        environment: {
            arrowFunction: true,
            bigIntLiteral: false,
            const: true,
            destructuring: true,
            dynamicImport: false,
            forOf: true,
        },
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
    experiments: {
        topLevelAwait: true,
        outputModule: true,
    },
    module: {
        rules: [
            // JavaScript, React
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            // MD
            // {
            //     test: /\.md$/i,
            //     use: ["html-loader", "markdown-loader"],
            // },
            // static files
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: `${paths.public}/index.html`,
            filename: "index.html",
            templateParameters: {
                analytics: "Google Analytics ID",
                author: "Igor Agapov",
                publishedDate: "2021-02-27",
                description: "Full Webpack 5 Boilerplate for JavaScript, React & TypeScript projects",
                keywords:
                    "webpack, webpack5, boilerplate, template, max, config, bundler, bundle, javascript, react, reactjs, react.js, typescript, project, app",
                title: "Webpack5 Max",
                url: "https://example.com",
            },
        }),

        new webpack.ProvidePlugin({
            React: "react",
        }),

        new Dotenv({
            path: "./config/.env",
        }),
    ],
}
