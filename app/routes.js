const { allAlbums } = require('./controllers/albums');
const { getUsers, getUser, signUp } = require('./controllers/users');
const { sampleJestBasic } = require('./controllers/sample-jest');
const { promiseAlbums, promiseAlbumsTwo } = require('./controllers/sample-request-promise');
const { getCollection, getProducts } = require('./controllers/sample-firebase');
const {
  main, sampleMiddleware, sampleFilterMap, sampleReduce, sampleReduceMerge,
  generateReport, accordingCountry, separateTransactionsBy,
} = require('./controllers/sample');
const { sampleUsers, sampleShowUser, sampleCreateUser } = require('./controllers/sample-user');
const { manipulateDate, timeByCountry } = require('./controllers/sample-moment');
const isAdminMiddleware = require('./middlewares/isAdmin');
const { getCountryValidation, postCountryValidation } = require('./middlewares/schemas_validator');
const { validateCountryId, validate, validateGetCountry } = require('./middlewares/validation');
const olderAgeMiddleware = require('./middlewares/olderAge');
const { callbackPrintDate } = require('./controllers/sample-callbacks');
const { rickData } = require('./controllers/sample-callbacks-challenge');
const { infoRick } = require('./controllers/sample-promise');
const dynamodb = require('./controllers/sample-basic-dynamodb');
const { getLogAudit, createAudit } = require('./controllers/sample-dynamodb');
const { getFileS3 } = require('./controllers/sample-basic-s3');
const { getCountry, storeCountry } = require('./controllers/countries');

exports.init = (app) => {
  app.get('/', main);
  app.get('/albums', allAlbums);
  app.get('/sample-middle/:age/:admin?', [isAdminMiddleware, olderAgeMiddleware], sampleMiddleware);
  app.get('/sample-users', sampleUsers);
  app.get('/sample-show-user/:id', sampleShowUser);
  app.post('/sample-create-user', sampleCreateUser);

  app.get('/users', getUsers);
  app.get('/users/:id', getUser);
  app.post('/users', signUp);

  app.get('/sample-test', sampleJestBasic);
  app.get('/sample-manipulate-date', manipulateDate);
  app.get('/sample-time-by-country', timeByCountry);

  app.get('/sample-promise-albums', promiseAlbums);
  app.get('/sample-promise-albums-two', promiseAlbumsTwo);

  app.get('/spl-firebase', getCollection);
  app.get('/spl-firebase-get-products', getProducts);

  app.get('/spl-filter-map', sampleFilterMap);
  app.get('/spl-reduce', sampleReduce);
  app.get('/spl-reduce-merge', sampleReduceMerge);
  app.get('/generate-report', generateReport);
  app.get('/according-country', accordingCountry);
  app.get('/separate-transactions-by', separateTransactionsBy);

  app.get('/spl-async-callbacks', callbackPrintDate);
  app.get('/spl-challenge-callbacks', rickData);
  app.get('/spl-promise', infoRick);

  app.get('/spl-get-logs', dynamodb.getAudit);
  app.get('/spl-get-log', getLogAudit);
  app.post('/spl-store-log', createAudit);

  app.get('/spl-get-file-s3', getFileS3);
  app.get('/get-country-one', [validateCountryId, validate], getCountry);
  app.get('/get-country-two', validateGetCountry, getCountry);
  app.get('/get-country-three', getCountryValidation, getCountry);
  app.post('/store-country', postCountryValidation, storeCountry);
};
