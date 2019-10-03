var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var book = new Schema({
    bookname: String,
});




module.exports = mongoose.model("book", book);