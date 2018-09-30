const path = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bind.js"
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
        exclude:/node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude:/node_modules/
      }
    ]
  }
}