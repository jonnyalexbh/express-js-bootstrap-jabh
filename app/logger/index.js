const pino = require('pino');

const logger = pino({
  prettyPrint: {
    translateTime: true,
    colorize: true,
  },
});

module.exports = logger;
