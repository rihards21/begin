const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
//it will overwrite 4th added element and wont add 5th element
//var item = "";
// this is better


// should go under app express bc express isint loaded so ejs cant work
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// we need this lane to execute css, otherwise it wont work with dynamic program
app.use(express.static("public"));

app.get("/", function(req, res){

let day = date.getDate();

//list is ejs file which we called it that way, 
// kindOfDay is the name we gave to ejs variable in list.ejs,
// and the day(what and without single quetes like in ejs ) 
//is the value that we raplace the kindOfDay(where) back in ejs usually they use the same for kindOfday and day
    res.render('list', {listTitle: day, newListItems: items});

 
});


app.post("/", function(req,res){
    
    let item = req.body.newItem;
if (req.body.list === "work"){
workItems.push(item);
res.redirect("/work");
} else {
    items.push(item);
    res.redirect("/")
};


});

app.get("/work", function(req,res){
    res.render("list", {listTitle : "work list", newListItems: workItems});
    });
//DIFFRENT WAY
/*
var today = new Date();
var currentDay = today.getDay();
var day = "";

switch (currentDay) {
case 0:
    day = "Sunday";
    break;
    case 1:
    day = "monday";
    break;
    case 2:
    day = "tuesday";
    break;
    case 3:
    day = "wednesday";
    break;
    case 4:
    day = "thursday";
    break;
    case 5:
    day = "friday";
    break;
    case 6:
    day = "saturday";
    break;
    default:
        console.log("Error: current day is equal to: " +currentDay);
}
res.render('list', {kindOfDay: day});
*/


/*var day = "";

if (today.getDay() === 6 ) {
    day = "saturday";
} 
    else if(today.getDate() === 1){
        day = "Monday";
        
    }else if(today.getDate() === 1){
        day = "Tuesday";
    } else if(today.getDate() === 1){
        day = "Wedneday";
    } else if(today.getDate() === 1){
        day = "Thursday";
    }else if(today.getDate() === 1){
        day = "Friday";
    } else {
        day = "Sunday";
    }*/
app.listen(3000, function(){
    console.log("this server is running at port 30000");
});