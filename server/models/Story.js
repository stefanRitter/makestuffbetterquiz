'use strict';

var mongoose = require('mongoose'),
    schema;


schema = mongoose.Schema({  
  name:  {type: String, required: '{PATH} is required!' },
  
  questions: [String],

  finalBlurb: {type: String, required: '{PATH} is required!' },

  updatedAt:  {type: Date, default: Date.now()}
});


schema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Story', schema);
