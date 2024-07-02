const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require("path");

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "app.js") },
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ["file-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new ESLintPlugin({

        }),
        // new CleanWebpackPlugin(["dist"]),
    ]
};