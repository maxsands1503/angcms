var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  var Page = new Schema({
    title: String,
    url: {type: String, index:{unique:true}},
    
  })
