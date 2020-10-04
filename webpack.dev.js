const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        publicPath: `http://localhost:${PORT}/js/`,
        compress: true,
        port: PORT,
        disableHostCheck: true
    }
})
