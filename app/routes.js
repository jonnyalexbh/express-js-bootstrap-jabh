const { main, sampleMiddleware } = require('./controllers/sample');
const  isAdminMiddleware  = require('./middlewares/isAdmin');
const olderAgeMiddleware  = require('./middlewares/olderAge');

exports.init = app => {
  app.get('/', main);
  app.get('/sample-middle/:age/:admin?', [isAdminMiddleware, olderAgeMiddleware], sampleMiddleware);
};
