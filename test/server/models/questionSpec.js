'use strict';

var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = Lab.expect;

require('../../utils/mongoUtils.js')(beforeEach);

var Question = require('../../../server/models/Question.js');


describe('question model', function () {

  it('should create a new Question', function (done) {
   
    Question.create({question: 'test'}, function (err, created) {
      expect(err).to.equal(null);
      expect(created.question).to.equal('test');
      done();
    });
  });

});
