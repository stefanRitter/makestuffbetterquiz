'use strict';

var Story = require('mongoose').model('Story'),
    Boom = require('boom');

var respondToHtml = require('../utils/respondToHtml'),
    server = {};


function getStories (request, reply) {
  if (respondToHtml(request, reply)) { return; }
  
  Story.find({}, function (err, objs) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(objs);
  });
}

function postStory (request, reply) {
  delete request.payload.__v;
  delete request.payload._id;
  Story.findOneAndUpdate({name: request.payload.name}, request.payload, {upsert:true}, function (err, obj) {
    if (err) { return reply(Boom.badImplementation(err)); }
    reply(obj);
  });
}

function getStoryByName (request, reply) {
  if (respondToHtml(request, reply)) { return; }
  
  var id = request.params.id;
  Story.findOne({_id: id}, function (err, found) {
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
