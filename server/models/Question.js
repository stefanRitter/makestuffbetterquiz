'use strict';

var mongoose = require('mongoose'),
    questionSchema;


questionSchema = mongoose.Schema({  
  question:  {
    type: String,
    required: '{PATH} is required!',
    trim: true,
    lowercase: true,
    unique: true,
    index: true
  },
  
  answers: [{
    answer: {type: String,  required: '{PATH} is required!'},
    type:   {type: String,  required: '{PATH} is required!'}
  }],

  updatedAt:  {type: Date, default: Date.now()}
});


questionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Question', questionSchema);
