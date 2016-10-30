/**
 * Created by jonayet on 8/22/16.
 */
module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: 'app.bundle.js',
        path: 'build',
        publicPath: 'build'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },

    devtool: 'source-map'
};