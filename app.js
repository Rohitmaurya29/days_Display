const express = require('express');


const app = express();
const body= require("body-parser");//to get the html file data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


const item = [""];
app.get("/",(req,res)=>{
    // const name= req.body.name;
    // const nme= req.body.name;
    res.render("app", {data:item});
    // res.send(nme);
});

app.post("/",(req,res)=>{
    const name= req.body.name;
    // res.render("app", {data:name});
    item.push(name);
    console.log(name);
    res.redirect("/");
});




// app.use(express.bodyParser());

app.listen(8000, ()=>{
    console.log("Hello World..");
});