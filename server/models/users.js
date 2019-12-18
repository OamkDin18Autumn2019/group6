var db = require('../database');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
const saltRounds = 10;


var BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy((username, password, cb) => {
  db.query('SELECT id, username, password FROM users WHERE username = ?', [username]).then(dbResults => {

    if(dbResults.length == 0)
    {
      return cb(null, false);
    }else{
      return cb(null, true)
    }



  }).catch(dbError => cb(err))
}));


var users = {

  get: function(callback) {
    return db.query('select id, username from users',  callback);
  },
  getById: function(id, callback) {
    return db.query('select id, username from users where id=?', [id], callback);
  },
  add: function(users, callback) {
    return db.query(
        'INSERT INTO users (username, email, password) VALUES (?,?,?)', [users.username, users.email, users.password],
        callback
      );
  },

}

module.exports = users;
