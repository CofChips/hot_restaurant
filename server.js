const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

const reservations = [
    {
        id:"01",
        name: "Aidan",
        email: "aidan@something.com",
        phone: "(123) 555-1234"
}];

const waitingList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/assets/home.html"));
})

app.get("/tables",function(req,res){
    res.sendFile(path.join(__dirname,"/assets/tables.html"));
})

app.get("/reserve",function(req,res){
    res.sendFile(path.join(__dirname,"/assets/reserve.html"));
})

app.get("/api/reservations",function(req,res){
    return res.json(reservations)
})

app.listen(PORT,function(req,res){
    console.log("App listening on PORT:"+PORT);


})