module.exports = {
    configureWebpack: {
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg|cur)$/, loader: 'url-loader?limit=100000' }
            ]
        }
    }
}