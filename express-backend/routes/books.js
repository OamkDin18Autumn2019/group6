const express = require("express");
const router = express.Router();
let books = require("../testdb");

router.get("/list", async (req, res) => {
    try {
      res.status(200).json({
        data: books
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let book = books.find(book => book._id === id);
      res.status(200).json({
        data: book
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  module.exports = router;