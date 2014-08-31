'use strict';

var mongoose = require('mongoose'),
    questionSchema;


questionSchema = mongoose.Schema({  
  question:  {type: String, required: '{PATH} is required!' },
  
  answers: [{
    answer:  {type: String, required: '{PATH} is required!'},
    score:   {type: Number, default: 0}
  }],

  category: [String],
  url: {type: String},
  more: {type: String},
  buttonName: {type: String, default: 'read more'},

  updatedAt:  {type: Date, default: Date.now()}
});


questionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Question', questionSchema);
