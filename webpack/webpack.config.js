const path = require('path');

module.exports = {
  entry: './example.js',
  target: false,
  mode: 'production',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFormat: false,
  }
};
