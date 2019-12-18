var db = require('../database');
var book = {
  get: function(callback) {
    return db.query('select * from book', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from book where book_id=?', [id], callback);
  },
  add: function(book, callback) {
    return db.query(
      'insert into book values(?,?,?,?)',
      [book.book_id, book.name, book.author, book.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from book where book_id=?', [id], callback);
  },
  update: function(id, book, callback) {
    return db.query(
      'update book set name=?,author=?, isbn=? where book_id=?',
      [book.name, book.author, book.isbn, id],
      callback
    );
  }
};
module.exports = book;
