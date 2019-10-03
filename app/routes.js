const { main, sampleMiddleware } = require('./controllers/sample');
const { sampleUsers, sampleShowUser, sampleCreateUser } = require('./controllers/sample-user');
const isAdminMiddleware = require('./middlewares/isAdmin');
const olderAgeMiddleware = require('./middlewares/olderAge');

exports.init = (app) => {
  app.get('/', main);
  app.get('/sample-middle/:age/:admin?', [isAdminMiddleware, olderAgeMiddleware], sampleMiddleware);
  app.get('/sample-users', sampleUsers);
  app.get('/sample-show-user/:id', sampleShowUser);
  app.post('/sample-create-user', sampleCreateUser);
};
