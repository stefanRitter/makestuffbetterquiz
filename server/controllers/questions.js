'use strict';

var Question = require('mongoose').model('Question'),
    Boom = require('boom');

var respondToHtml = require('../utils/respondToHtml'),
    server = {};


function getQuestions (request, reply) {
  if (respondToHtml(request, reply)) { return; }
  
  Question.find({}, function (err, objs) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(objs);
  });
}


module.exports = function (_server) {
  server = _server;

  [
    { method: 'GET',    path: '/questions',         config: { handler: getQuestions }},
  ].forEach(function (route) {
    server.route(route);
  });
};
