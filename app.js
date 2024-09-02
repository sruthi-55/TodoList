const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req,res){
    let today = new Date();
    let day = today.getDay();
    let typeOfDay;
    if(day===0 || day===6)  
        typeOfDay = "Weekend";
    else    typeOfDay = "Weekday";
    console.log(typeOfDay);
    res.render("index",{typeOfDay: typeOfDay});
});

app.post('/', function(req,res){
    
});

app.listen(3000, function(){
    console.log("Server listening at port 3000");
});