const common = require('./webpack.common.js');

module.exports = {
    ...common,
    mode: 'production',
    devtool: 'source-map',
}; 