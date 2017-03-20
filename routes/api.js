var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models/page.js');
var adminUser = require('../models/adminUser.js');

//User routes
//test get route
router.get('/', function(req,res){
  res.send('Welcome to the API')
});

router.get('/Pages', function(req, res){
  return Page.find(function(err, pages){
    if(!err){
      return response.send(pages)
    }else{
      return response.send(500, err)
    }
  });
});

module.exports = router;
