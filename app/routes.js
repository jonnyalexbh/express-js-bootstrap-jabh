const { allAlbums } = require('./controllers/albums');
const { main, sampleMiddleware } = require('./controllers/sample');
const { sampleUsers, sampleShowUser, sampleCreateUser } = require('./controllers/sample-user');
const { sampleRemoveLodash, sampleSortby, sampleRemove } = require('./controllers/sample-lodash');
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
  app.get('/remove-without-loadhs', sampleRemove);
  app.get('/remove-sortby-loadhs', sampleSortby);
};
