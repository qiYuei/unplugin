const { resolve } = require('path')
const { webpack } = require('./unplugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    path: resolve(__dirname, 'dist/webpack'),
    filename: 'main.js',
  },
  plugins: [
    webpack({ msg: 'Webpack' }),
  ],
  devtool: 'source-map',
}
