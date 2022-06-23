const path = require('path')

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'myBundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'bundle')
        }//,
    //    hot: true // isn't required since, hot module replacement is enabled by Default, live relaoding enabled by default
    },
    mode: "development"
}