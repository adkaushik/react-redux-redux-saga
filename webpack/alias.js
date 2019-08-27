const path = require('path');

module.exports = {
  actions: path.resolve(__dirname, '../src/actions'),
  constants: path.resolve(__dirname, '../src/constants'),
  sagas: path.resolve(__dirname, '../src/sagas'),
  reducers: path.resolve(__dirname, '../src/reducers'),
  components: path.resolve(__dirname, '../src/components'),
  connectedComponents: path.resolve(__dirname, '../src/connectedComponents'),
  containers: path.resolve(__dirname, '../src/containers'),
  library: path.resolve(__dirname, '../src/library'),
  images: path.resolve(__dirname, '../src/images'),
  config: path.resolve(__dirname, '../src/config'),
  shapes: path.resolve(__dirname, '../src/shapes')
};