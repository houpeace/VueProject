let path = require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
function resolveResouce(name) {
  let src  = path.resolve(__dirname, '../src/assets/' + name);
  console.log(src);
  return src;
}
let cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: process.env.NODE_ENV === 'production',
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}
exports.generateSassResourceLoader = function (options) {

  let loaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader', {
      loader: 'sass-resources-loader',
      options: {
        // it need a absolute path
        resources: [resolveResouce('mixin.scss')]
      }
    }
  ];
  return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
}