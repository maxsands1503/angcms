var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  var Page = new Schema({
    title: String, //the title of the content page
    url: {type: String, index:{unique:true}},//alias used to identify the page, unique index  so we don't get duplicates
    content: String,//page content
    menuIndex: Number,//integer that defines the menu sequence of the pages in the navbar
    date: Date //updated date
  });
  var Page = mongoose.model('Page', Page);
  module.exports = Page;
