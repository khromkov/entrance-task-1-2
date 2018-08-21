const PUBLIC_PATH = require('path').join(__dirname, 'public');
const { initBackendStub } = require('./utils/backend-stub');

const mode = process.env.NODE_ENV || 'development';
const isProduction = mode === 'production';

module.exports = {
  mode,
  entry: isProduction ? ['./utils/fake-backend', './src/index.js'] : './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js',
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    before: initBackendStub,
  },
};
