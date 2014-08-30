'use strict';

var Negotiator = require('negotiator');

module.exports = function (request, reply) {
  var mediaTypes = new Negotiator(request).mediaTypes();

  if (mediaTypes.indexOf('text/html') > -1) {
    console.log('respond to HTML - sending angular app');
    reply.file('html/index.html');
    return true;
  }
  
  return false;
};
