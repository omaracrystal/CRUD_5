var express = require('express');
var router = express.Router();
var url = require('../model/url.js')

//Get all urls
router.get('/urls', function(req, res, next){
  res.send("hello");
  // url.find({}, function(err, data){
  //   if(err){
  //       res.json({'message': err});
  //   } else{
  //     res.json(data);
  //   }
  //  });
});

//get one url
router.get('/url/:id', function(req, res, next) {
  url.findById(req.params.id, function(err, url) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(url);
    }
  })
});

//post urls
router.post('/urls', function(req, res, next) {
  // or var newurl = new url(req.body);
  var newurl = new url ({
    name: req.body.name,
    age: req.body.age,
    spitter: req.body.spitter
  });
  newurl.save(function(err, url) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(url);
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
  url.findByIdAndUpdate(req.params.id, req.body, options, function(err, url) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(url);
    }
  })
});

//delete one url
router.delete('/url/:id', function(req, res, next) {
  url.findByIdAndRemove(req.params.id, function(err, url) {
     if (err) {
        res.json({'message': err});
      } else {
        res.json(url);
      }
  })
});

module.exports = router;
