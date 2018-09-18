let path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2"
  },
  module: {
    // loaders: [{
    //   test: /\.(svg|ttf|woff|woff2|eot)$/,
    //   loader: 'url?limit=5000'
    // }, ],

    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: [/node_modules/],
      //   use: [{
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['es2015']
      //     }
      //   }]
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // {
      //   test: /\.(svg|ttf|woff|woff2|eot)$/,
      //   loader: 'url?limit=5000'
      // },
    ]
  },

//   plugins: [
//     new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery'
//     })
// ]
  
  watch: true
};