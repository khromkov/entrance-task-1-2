const webpack = require('webpack');
const PUBLIC_PATH = require('path').join(__dirname, 'public');
const { initBackendStub } = require('./utils/backend-stub');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_PRODUCTION: JSON.stringify(mode === 'production'),
    }),
  ],
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    before: initBackendStub,
  },
};
