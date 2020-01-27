const routes = require('next-routes');

module.exports = routes()
  .add('home', '/', 'index')
  .add('login', '/login', 'login')
  .add('tracking', '/tracking', 'tracking');
