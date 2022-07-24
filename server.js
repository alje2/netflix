const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({ static: './dist/spa' });
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`jsonServer listening on port ${port}`);
});
