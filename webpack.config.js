var path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, './src')
      ],
      exclude: [
       path.resolve(__dirname, "node_modules")
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }]
  }
};
