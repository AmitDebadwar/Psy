var express = require("express");
var app = express();
var path = require("path");
var pdf = require('express-pdf');
var pdff = require('html-pdf');

var jsonServer = require('json-server');

app.use('/api', jsonServer.router('db.json'));
app.use(express.static('node_modules'));
app.use(express.static('src'));
app.use(express.static('/ng2-ckeditor'));
//app.use(pdf);


app.get('/', function (req, res) {
  res.sendFile('index.html', { "root": __dirname });
});




app.listen(3000,()=>{
  console.log("PSY is running on port 3000");
});

console.log("Running at Port 3000");