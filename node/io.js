var fs = require("fs");

console.log("Process one");

fs.readFile('list.txt', "utf8", function(err,data){
	console.log(data);
});

console.log("Process two");