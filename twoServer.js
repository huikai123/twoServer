//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var aPORT=7000;
var bPORT=7500;

//Create a server
var aserver = http.createServer(function (request, response){
    // response.statusCode = 503;
    response.end('It works! Path Hit: ' + request.url);
});

var bserver = http.createServer(function (request, response){
    // response.statusCode = 503;
    response.end('It works! Path Hit: ' + request.url);
});

//Lets start our server
aserver.listen(7000, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("server listening on: http://localhost:%s", aPORT);
});

bserver.listen(7500, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("server listening on: http://localhost:%s", bPORT);
});