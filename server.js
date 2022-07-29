const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({ static: './dist/spa' });
const port = process.env.PORT || 3000;

router.render = (req, res) => {
  const data = res.locals.data;
  const isObject = Object.getPrototypeOf(data) === Object.prototype;
  const emptyObject = isObject && Object.keys(data).length === 0;
  console.log(data, emptyObject, !data.length);
  // for testing purposes if no result return 500
  if (emptyObject || (!isObject && !data.length)) {
    res.status(500).jsonp({
      error: 'No results found!',
    });
    return;
  }
  res.jsonp(data);
};
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`jsonServer listening on port ${port}`);
});
