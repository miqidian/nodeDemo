var fs = require("fs");
fs.readFile("input.text",function(err,data){
    if(err){
    return console.error(err);
    }
    console.log(data.toString());
});
console.log("执行程序，非堵塞");