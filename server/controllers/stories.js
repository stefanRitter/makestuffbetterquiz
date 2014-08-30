'use strict';

var Question = require('mongoose').model('Question'),
    Boom = require('boom');

var respondToHtml = require('../utils/respondToHtml'),
    server = {};


function getStories (request, reply) {
  if (respondToHtml(request, reply)) { return; }
  
  Question.find({}, function (err, objs) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(objs);
  });
}

function postStory (request, reply) {
  Question.create(request.payload, function (err, created) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(created);
  });
}

function getStoryByName (request, reply) {
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
    { method: 'GET',    path: '/stories',         config: { handler: getStories }},
    { method: 'GET',    path: '/stories/{name}',  config: { handler: getStoryByName }},
    { method: 'POST',   path: '/stories',         config: { handler: postStory }},
  ].forEach(function (route) {
    server.route(route);
  });
};
