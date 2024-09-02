const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let items = [];
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    var options = {
        weekday: "short",
        month: "short",
        day: "numeric",
    };
    var today = new Date();

    let curDay = today.toLocaleString("en-us", options);

    res.render("index", { day: curDay, items: items });
});

app.post("/", function (req, res) {
    items.push(req.body.newItem);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log("Server listening at port 3000");
});
