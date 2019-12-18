var express = require('express');
var router = express.Router();
var users = require('../models/users');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var cors = require('cors');
router.use(cors());

   router.get('/', function(req, res, next) {

       users.get(function(err, rows) {
         if (err) {
           res.json(err);
         } else {
           res.json(rows);
         }
       });
    });
   router.get('/:id?', passport.authenticate('basic', { session: false }),function(req, res, next) {
      if (req.params.id) {
        users.getById(req.params.id, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      }
    });

   router.post('/', function(req, res, next) {
    if((typeof req.body.username === "string") &&
    (req.body.username.length > 4) &&
    (typeof req.body.password === "string") &&
    (req.body.password.length > 6)){
      users.add(req.body, function(err, count) {
        if (err) {
          res.json(err);
        } else {
          res.json(req.body); //or return count for 1 & 0
        }
      });
    }else {
    console.log("incorrect username or password, both must be strings and username more than 4 long and password more than 6 characters long");
    res.sendStatus(400);
    }
    });


  module.exports = router;
