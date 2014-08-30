/*'use strict';

var Lab = require('lab');
var sinon = require('sinon');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;
var expect = Lab.expect;

require('../../utils/mongoUtils.js')(beforeEach);

var Question = require('../../../server/models/Question.js');


describe('question model', function () {

  it('should create a new Question', function (done) {
   
    Question.create({name: 'test'}, function (err, created) {
      expect(err).to.equal(null);
      expect(created.name).to.equal('test');
      done();
    });
  });

});
*/