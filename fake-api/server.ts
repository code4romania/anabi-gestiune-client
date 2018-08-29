import * as jsonServer from 'json-server';
import * as path from 'path';

const SERVER_PORT = 5001;
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

server.use('/assets/stages', (req, res) => {
  res.redirect('/stages');
});

server.use(jsonServer.rewriter({
  '/assets/addminimalasset': '/assets',
  '/assets/:id': '/assetsDetail/:id',
  '/assets/:id/solutions': '/solutions',
}));

server.use(router);
server.listen(SERVER_PORT, () => {
  console.log(`Fake api started at http://localhost:${SERVER_PORT}`);
});

/**
 * Primary keys
 */
// define primary key columns for each resource
const primaryKeys = {
  assets: 'assetId',
  assetDetail: 'id',
  categories: 'id',
  stages: 'id',
  solutions: 'id',
};

router.render = (req, res) => {
  const resource = req.path.split('/')[1];
  let filteredResponse = res.locals.data;

  // remapping internal id columns to dedicated resource columns
  if (req.method === 'POST' || req.method === 'PUT') {
    req.body.id = req.body[primaryKeys[resource]];
  } else if (req.method === 'GET') {
    filteredResponse = filterResponse(resource, res.locals.data);
  }

  // optional response wrapping to data attribute
  res.jsonp(filteredResponse);
};

function filterResponse(resource, response) {
  // don't filter if primaryKey is same as internal
  if (primaryKeys[resource] === 'id') {
    return response;
  }

  return response;
}
