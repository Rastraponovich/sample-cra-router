const commonConfig = require("./configs/common")
const developmentConfig = require("./configs/dev")
const productionConfig = require("./configs/prod")

const { merge } = require("webpack-merge")

module.exports = (env, args) => {
    switch (args.mode) {
        case "development":
            return merge(commonConfig, developmentConfig)
        case "production":
            return merge(commonConfig, productionConfig)
        default:
            throw new Error("No matching configuration was found!")
    }
}
