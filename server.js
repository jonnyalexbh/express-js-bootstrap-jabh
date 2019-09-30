const app = require('./app'),
  config = require('./config'),
  logger = require('./app/logger');

const port = config.common.api.port || 3000;

Promise.resolve()
  .then(() => {
    app.listen(port);
    logger.info(`Listening on port: ${port}`);
  })
  .catch(logger.error);
