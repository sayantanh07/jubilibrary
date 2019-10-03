var mongoose = require("mongoose");
var book = require("./dbschema");
mongoose.connect(
    "mongodb://localhost:27017/library", {
        useNewUrlParser: true
    },
    function (err) {
        if (err) console.log("Mongoose Connect Error !!");
    }
);

module.exports = {
    addbooks: bookname => {
        try {
            return new Promise((resolve, reject) => {
                    var books = new book(bookname);
                    books.save(function (err, data) {
                        if (err) {
                            return reject({
                                status: "error",
                                data: err
                            })
                        }
                        return resolve({
                            status: "success",
                            data: data
                        });
                    });
                }

            )
        } catch (err) {
            console.log(err);
        }

    }
}