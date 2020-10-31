const { createLogger, transports, format } = require('winston');
require('winston-mongodb');
const config = require('config');
const db = config.get('mongoURI');

const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'info.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.MongoDB({
      level: 'error',
      db: db,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
