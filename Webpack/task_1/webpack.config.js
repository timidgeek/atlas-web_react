const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};