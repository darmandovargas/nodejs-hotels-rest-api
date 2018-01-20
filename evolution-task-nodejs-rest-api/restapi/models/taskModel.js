'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

  name: { type: String, Required:  'Task name cannot be left blank.' },
  
  priority:    { type: String,     Required:  'Task stars cannot be left blank.'},

  expirationDate:    { type: String,     Required:  'Task expiration date cannot be left blank.'}

});

module.exports = mongoose.model('Tasks', Schema);