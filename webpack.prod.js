var merge = require("webpack-merge");
var common = require("./webpack.common");
var UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
});
