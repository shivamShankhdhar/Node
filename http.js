var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("shivam shankhdhar <br>");
    res.write("another line shivam shankhdhar");
    res.end();
}).listen(8081);
console.log('server started at http://localhost:8081');