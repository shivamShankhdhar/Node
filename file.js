var fs = require("fs"); //file system - fs 
var data = fs.readFileSync('txt.txt');
console.log(data.toString());
console.log('program ended');