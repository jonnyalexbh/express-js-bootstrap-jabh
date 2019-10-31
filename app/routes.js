const { allAlbums } = require('./controllers/albums');
const { sampleJestBasic } = require('./controllers/sample-jest');
const { main, sampleMiddleware } = require('./controllers/sample');
const { sampleUsers, sampleShowUser, sampleCreateUser } = require('./controllers/sample-user');
const {
  sampleRemoveLodash, sampleFind, sampleSortby, sampleRemove,
} = require('./controllers/sample-lodash');
const { manipulateDate, timeByCountry } = require('./controllers/sample-moment');
const isAdminMiddleware = require('./middlewares/isAdmin');
const olderAgeMiddleware = require('./middlewares/olderAge');

exports.init = (app) => {
  app.get('/', main);
  app.get('/albums', allAlbums);
  app.get('/sample-middle/:age/:admin?', [isAdminMiddleware, olderAgeMiddleware], sampleMiddleware);
  app.get('/sample-users', sampleUsers);
  app.get('/sample-show-user/:id', sampleShowUser);
  app.post('/sample-create-user', sampleCreateUser);
  app.get('/sample-remove-lodash', sampleRemoveLodash);
  app.get('/sample-find-kpi', sampleFind);
  app.get('/sample-remove-without-loadhs', sampleRemove);
  app.get('/remove-sortby-loadhs', sampleSortby);

  app.get('/sample-test', sampleJestBasic);
  app.get('/sample-manipulate-date', manipulateDate);
  app.get('/sample-time-by-country', timeByCountry);
};
