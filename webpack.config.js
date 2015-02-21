module.exports = {
    entry: './index.js',
    output: {
        filename: './dist/bundle.js',
        sourceMapFilename: './dist/bundle.map',
        library: 'es6Boilerplate',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
