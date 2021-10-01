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
                buyer_invoice: resolve(__dirname, 'buyer-invoice.html'),
                seller_invoice: resolve(__dirname, 'seller-invoice.html'),
                sell_order_list: resolve(__dirname, 'sell-order-list.html'),
                my_buy_order: resolve(__dirname, 'my-buy-order.html'),
                my_invoice_and_payment: resolve(__dirname, 'my-invoice-and-payment.html'),
                payment: resolve(__dirname, 'payment.html'),
                payment_history: resolve(__dirname, 'payment-history.html'),
                payment_details: resolve(__dirname, 'payment-details.html'),
                payment_gateway_list: resolve(__dirname, 'payment-gateway-list.html'),
                payment_gateway_input: resolve(__dirname, 'payment-gateway-input.html'),
                payment_status: resolve(__dirname, 'payment-status.html'),
                payment_slip_upload: resolve(__dirname, 'payment-slip-upload.html'),
            }
        }
    }
}