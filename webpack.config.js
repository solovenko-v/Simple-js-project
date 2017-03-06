module.exports = {
    devtool: 'eval-source-map',
    entry: "./app/controller.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        sourceMapFilename: "bundle.js.map"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
          }
        ]
    }
};