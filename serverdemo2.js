//Load module

var http = require('http');
var msg = "<h1>This Is <br/> Mihir Savaliya </h1>";
http.createServer(function(req,res){

    res.writeHead(200,{'content-type':'text/html'});
    res.end(msg);
    
}).listen(3000);
console.log("This is server side code http://127.0.0.1:3000");