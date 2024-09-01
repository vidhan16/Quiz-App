var express = require("express");
var app = express();

app.use("/",express.static("./frontend"));

app.listen(8080,()=>{
    console.log("Server running on port : 8080");
});