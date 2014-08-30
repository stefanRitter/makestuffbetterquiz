'use strict';

var Path = require('path'),
    rootPath = Path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    datastoreURI: 'mongodb://localhost/makestuffbetterquiz',
    rootPath: rootPath,
    port: 3040
  },

  test: {
    datastoreURI: 'mongodb://localhost/makestuffbetterquiz-test',
    rootPath: rootPath,
    port: 3040
  },

  production: {
    datastoreURI: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    rootPath: rootPath,
    port: process.env.PORT
  }
};
