module.exports = {
    publicPath: '/gy_mall/dist',
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                // '@':'src'
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
                    // 'router': '@/router',//不需要在其他地方引用 不用配置  this.$router
                    // 'store': '@/store',//不需要在其他地方引用 不用配置     this.$store
            }
        }
    }
}