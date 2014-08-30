'use strict';

var mongoose = require('mongoose'),
    questionSchema;


questionSchema = mongoose.Schema({  
  question:  {type: String, required: '{PATH} is required!' },
  
  answers: [{
    answer:  {type: String,  required: '{PATH} is required!'},
    correct: {type: Boolean, default: false},
    score:   {type: Number, default: 0}
  }],

  category: [String],

  type: {type: String, default: 'simple'},

  updatedAt:  {type: Date, default: Date.now()}
});


questionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Question', questionSchema);
