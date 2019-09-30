const { main, sampleMiddleware } = require('./controllers/sample');
const { sampleCreateUser } = require('./controllers/sample-user');
const  isAdminMiddleware  = require('./middlewares/isAdmin');
const olderAgeMiddleware  = require('./middlewares/olderAge');

exports.init = app => {
  app.get('/', main);
  app.get('/sample-middle/:age/:admin?', [isAdminMiddleware, olderAgeMiddleware], sampleMiddleware);
  app.post('/sample-create-user', sampleCreateUser);
};
