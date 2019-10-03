var mongoose = require("mongoose");
var signupdb = require("./signupdbschema");
mongoose.connect(
  "mongodb://localhost:27017/libraryUsers", {
    useNewUrlParser: true
  },
  function (err) {
    if (err) console.log("Mongoose Connect Error !!");
  }
);



module.exports = {
  adduser: user => {
    try {
      return new Promise((resolve, reject) => {
        let name = user.username;
        console.log(name);
        let pass = user.password;
        var newuser = new signupdb(user);
        //                 if (user.username != null && user.password != null)
        if (name.length > 0) {
          newuser.save(function (err, data) {
            if (err) {
              return reject({
                status: "error",
                data: err
              });
            }

            return resolve({
              status: "success",
              data: data
            });
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  },


  loginuser: user => {
    try {
      return new Promise((resolve, reject) => {
        let name = user.username;

        let password = user.password;
        if (name.length > 0 && password.length > 0) {

          var filter = {
            username: user.username,
            password: user.password
          };
          var userCount;
          //

          return new Promise((resolve, reject) => {
            signupdb.find(filter, function (err, data) {
              if (err) {
                return reject(err);
              }
              return data;
              userCount = data.length;
              return resolve();
            });
          });

        }

      });
    } catch (err) {
      console.log(err);
    }

    function getalternatives(user) {
      main = "Kolkata"
      a1 = "Calcutta";
      a2 = "Kol";

      name = user.username;

      if (name == a1 || name == a2 || name == a3) {

        return main;
      }

    };
  },




  //getting alternatives for



};