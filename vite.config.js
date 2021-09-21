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
                trading: resolve(__dirname, 'trading.html'),
                login: resolve(__dirname, 'login.html'),
                register: resolve(__dirname, 'register.html'),
                sell_form: resolve(__dirname, 'sell-form.html'),
                sell_update_form: resolve(__dirname, 'sell-update-form.html'),
                buy_form: resolve(__dirname, 'buy-form.html'),
                buy_update_form: resolve(__dirname, 'buy-update-form.html'),
            }
        }
    }
}