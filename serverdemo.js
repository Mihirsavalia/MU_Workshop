

//Load module

var http = require('http');

//Create Server
http.createServer(function(req,res){

    //print message
    res.end('<h1> Savalia</h1>');


}).listen(4000);
console.log("This is server side code http://127.0.0.1:4000");