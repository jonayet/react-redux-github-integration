/**
 * Created by jonayet on 8/22/16.
 */
module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            { test: /[\.js$|\.jsx$]/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    },

    devtool: 'source-map'
};