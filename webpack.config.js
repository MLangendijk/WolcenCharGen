const path = require("path");
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: webpack_rules
    },
    devServer: {
        contentBase: './dist',
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};

let lessRules = {
    test: /\.less$/,
    use: [
        'style-loader',
        'css-loader',
        'less-loader'
    ]
};

webpack_rules.push(babelLoader);
webpack_rules.push(lessRules);
module.exports = webpackOption;