const express = require('express');


const app = express();

app.get("/",(req,res)=>{
    // res.send("Started");
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date= new Date();
    const d= date.getDay();
    const week = weekday[d];
   res.send(`${d}: ${week}`);
   console.log(weekday[new Date().getDay()]);
});

app.listen(8000, ()=>{
    console.log("Hello World..");
});