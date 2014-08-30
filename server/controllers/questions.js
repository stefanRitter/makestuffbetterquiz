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

function postQuestion (request, reply) {
  console.log(request.payload);

  Question.create(request.payload, function (err, created) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(created);
  });
}


module.exports = function (_server) {
  server = _server;

  [
    { method: 'GET',    path: '/questions',         config: { handler: getQuestions }},
    { method: 'POST',   path: '/questions',         config: { handler: postQuestion }},
  ].forEach(function (route) {
    server.route(route);
  });
};
