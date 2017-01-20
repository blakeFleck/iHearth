require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Qupid',
    description: 'Connect Store Coupons using iBeacon Technology',
    head: {
      titleTemplate: 'Qupid: %s',
      meta: [
        {name: 'description', content: 'Connect Store Coupons using iBeacon Technology'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Qupid'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Qupid'},
        {property: 'og:description', content: 'Connect Store Coupons using iBeacon Technology'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
