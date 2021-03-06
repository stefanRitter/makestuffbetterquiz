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
  delete request.payload.__v;
  delete request.payload._id;
  Question.findOneAndUpdate({question: request.payload.question}, request.payload, {upsert:true}, function (err, created) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(created);
  });
}

function getQuestionById (request, reply) {
  if (respondToHtml(request, reply)) { return; }
  
  var id = request.params.id;
  Question.findOne({_id: id}, function (err, found) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(found);
  });
}

module.exports = function (_server) {
  server = _server;

  [
    { method: 'GET',    path: '/questions',         config: { handler: getQuestions }},
    { method: 'GET',    path: '/questions/{id}',    config: { handler: getQuestionById }},
    { method: 'POST',   path: '/questions',         config: { handler: postQuestion }},
  ].forEach(function (route) {
    server.route(route);
  });
};
