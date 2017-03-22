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
      return res.send(pages)
    }else{
      return res.send(500, err)
    }
  });
});

router.post('/pages/add', function(req, res){
  var page = new Page({
    title: req.body.title,
    url: req.body.url,
    content: req.body.content,
    menuIndex: req.body.menuIndex,
    date: new Date(Date.now())
  });

  page.save(function(err){
    if(!err){
      return res.send(200, page);
    }else{
      res.send(500, err);
    }
  });
});

router.post('/pages/update', function(req, res){
  var id = req.body._id;

  Page.update({
    _id: id
  }, {
    $set:{
      title: req.body.title,
      url: req.body.url,
      content: req.body.content,
      menuIndex: req.body.menuIndex,
      date: new Date(Date.now())
    }
  }).exec();
  res.send("Page Updated");
});
router.get('/pages/delete/:id', function(req, res){
  var id = req.params.id;
  Pages.remove({
    _id:id
  },
    function(err){
      return console.log(err);
    });
    return res.send('Page id- ' + id + ' has been deleted.')
});


module.exports = router;
