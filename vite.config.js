const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                list: resolve(__dirname, 'list.html'),
                trading: resolve(__dirname, 'trading.html')
            }
        }
    }
}