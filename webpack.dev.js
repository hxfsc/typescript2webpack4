var path = require("path");
var merge = require("webpack-merge");
var common = require("./webpack.common");
var webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        port: 5000,
        contentBase: path.resolve(__dirname, "dist")
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
})
