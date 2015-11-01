var express = require('express');
var router = express.Router();
var Url = require('../model/url.js')

//Get all urls
router.get('/urls', function(req, res, next){
  Url.find({}, function(err, data){
    if(err){
        res.json({'message': err});
    } else{
      res.json(data);
    }
   });
});

//get one url
router.get('/url/:id', function(req, res, next) {
  Url.findById(req.params.id, function(err, data) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  })
});

//post urls
router.post('/urls', function(req, res, next) {
  var newUrl = new Url(req.body);
  // var newUrl = new Url ({
  //   link: req.body.link,
  //   title: req.body.title,
  //   description: req.body.description
  // });
  newUrl.save(function(err, data) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  })
});


//update one url
router.put('/url/:id', function(req, res, next) {
  //*** reference mongoosejs.com/docs/api/html ***//
  //A.findByIdAndUpdate(id, update, options, callback) // executes
  //A.findByIdAndUpdate(id, update, options) // returns Query
  //A.findByIdAndUpdate(id, update, callback) // executes
  //adding {new:true} in the third passed agrument this will output the updates in the terminal instead of the original
  var options = {new: true};
  Url.findByIdAndUpdate(req.params.id, req.body, options, function(err, data) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  })
});

//delete one url
router.delete('/url/:id', function(req, res, next) {
  Url.findByIdAndRemove(req.params.id, function(err, data) {
     if (err) {
        res.json({'message': err});
      } else {
        res.json(data);
      }
  })
});

module.exports = router;
