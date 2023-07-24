var https   = require('http');
var fs      = require('fs');
var url     = require('url');

https.createServer(function(req,res){
    var q        = url.parse(req.url,true);
    var fileName = q.pathname.substring(1);
    console.log(fileName);

    fs.readFile(fileName,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            return res.end("404 Not found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081,function(){
    console.log('Server started at http://localhost:8081');
});