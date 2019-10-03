const express = require("express");
const app = express();
const db = require("./dboperations");
const userdb = require("./signupdboperations");

const bodyparser = require("body-parser");

// Defining Path for URL Re-routes
var path = require("path");

// Body Parser will parse the HTML and return it in non-encoded format
app.use(
    bodyparser.urlencoded({
        extended: false
    })
);

// Body Parser will parse the HTML and return it in JSON format
app.use(bodyparser.json());

// Defining IP-Address and PORT number
const ipaddress = "127.0.0.1";
const port = 3125;

// Listening to the IP-Address:PORT number
app.listen(port, ipaddress, () =>
    console.log(`Listening at ${ipaddress}:${port}...`)
);

app.post("/signup", async (req, res) => {
    console.log("User Add");
    res.json(await userdb.adduser(req.body));

});

app.post("/signin", async (req, res) => {
    console.log("User login");
    res.send({
        status: 'success'
    });

});


app.post("/savebook", async (req, res) => {
    console.log("save called");
    res.json(await db.addbooks(req.body));
});