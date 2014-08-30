'use strict';

module.exports = function (config, server) {

  require('../controllers/questions.js')(server);

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: '../public',
        defaultExtension: 'html'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
      file: 'img/favicon.ico'
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: {
      file: 'html/index.html'
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function (request, reply) {
      console.log('Catch all - sending Angular app');
      reply.file('html/index.html').code(404);
    }
  });
  
  return server;
};
