'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

  name: { type: String, Required:  'Hotel name cannot be left blank.' },
  
  stars:    { type: String,     Required:  'Hotel stars cannot be left blank.'},

  images:    { type: String,     Required:  'Hotel images cannot be left blank.'},

  price:    { type: String,     Required:  'Hotel price cannot be left blank.'}

});

module.exports = mongoose.model('Hotels', Schema);