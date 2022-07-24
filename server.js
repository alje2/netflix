const express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  appPort = process.env.PORT || 5000;

const app = express();

app.use(history());
app.use(serveStatic(__dirname + '/dist/spa'));
app.listen(appPort, () => {
  console.log(`express app listening on port ${appPort}`);
});

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({ static: './dist/spa' });
const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`jsonServer listening on port ${port}`);
});
