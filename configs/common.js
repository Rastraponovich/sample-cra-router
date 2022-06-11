const paths = require("./paths")

const { ProgressPlugin } = require("webpack")

module.exports = {
    entry: `${paths.src}/index.tsx`,
    output: {
        path: paths.build,
        filename: "js/[name].bundle.js",
        publicPath: "/",
        clean: true,
        // crossOriginLoading: "anonymous",
        // module: true,
        // environment: {
        //     arrowFunction: true,
        //     bigIntLiteral: false,
        //     const: true,
        //     destructuring: true,
        //     dynamicImport: false,
        //     forOf: true,
        // },
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
    // experiments: {
    //     topLevelAwait: true,
    //     outputModule: true,
    // },
    module: {},
    plugins: [
        new ProgressPlugin({
            percentBy: "entries",
            handler(percentage, message, ...args) {
                console.log(`${(percentage * 100).toFixed()}% ${message} ${args}`)
            },
        }),
    ],
}
