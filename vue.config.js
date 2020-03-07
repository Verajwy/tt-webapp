module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: process.env.NODE_ENV !== 'production',
    runtimeCompiler: false,
    productionSourceMap: false,
    devServer: { // 代理
        host: '0.0.0.0',
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, // 配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
        hotOnly: true, // 热更新
        proxy: { // 配置服务器代理
            '/api': {
                target: 'http://tt-agent-dev.tianli.shop',
                changeOrigin: true,
                // ws: true, // websocket支持
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
};