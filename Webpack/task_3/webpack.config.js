const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8564
  },
  entry: {
    header: '/header/header.js',
    body: '/body/body.js',
    footer: '/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'image-webpack-loader',
          'file-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]},
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: './public/index.html' //relative to root of the application
    })
]
};