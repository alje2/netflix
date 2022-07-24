const jsonServer = require('json-server');
const history = require('connect-history-api-fallback');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({ static: './dist/spa' });
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(history());

server.listen(port, () => {
  console.log(`jsonServer listening on port ${port}`);
});
