/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      'common': path.resolve(__dirname, 'src/common'),
      'page': path.resolve(__dirname, 'src/page'),
    }
  },
};