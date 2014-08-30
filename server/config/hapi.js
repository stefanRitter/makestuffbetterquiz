'use strict';

var Hapi = require('hapi'),
    Path = require('path');

module.exports = function (config) {
  var server = new Hapi.Server(config.port, {
    files: {
      relativeTo: Path.join(config.rootPath, 'server/public')
    }
  });

  var loggingOptions = {
    subscribers: {
      // add 'ops' for performance logs
      'console': ['request', 'log', 'error']
    }
  };

  server.pack.register({
    plugin: require('good'),
    options: loggingOptions
  }, function (err) {
    if (err) { console.error(err); }
  });
  
  return server;
};
