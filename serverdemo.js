var a=13;
var b=18;
var c=a+b;
console.log("A = "+a);
console.log("B = "+b);
console.log("Sum = "+c);

//Load module

var http = require('http');

//Create Server
http.createServer(function(req,res){

    //print message
    res.end(''+c);

}).listen(3000);
console.log("This is server side code http://127.0.0.1:3000");