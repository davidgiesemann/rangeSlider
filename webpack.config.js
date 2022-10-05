const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: {
        'js-rangeslider': './examples/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js-rangeslider.js',
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    }
};
