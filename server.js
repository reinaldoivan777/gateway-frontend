const next = require('next');
const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

// const routes = require('./routes');
// const app = next({ dev: process.env.NODE_ENV !== 'production' });
// const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
//   app.render(req, res, route.page, query);
// });

// const { createServer } = require('http');
// app.prepare().then(() => {
//   createServer(handler).listen(3000);
// });
