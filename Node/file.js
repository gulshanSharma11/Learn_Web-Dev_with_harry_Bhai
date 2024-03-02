const a=4;
const b=5;
var c = a+b;
console.log(c);
function main(a,b){
    return a+b;
}
main(4,5);

const fs=require("fs");

//fs.writeFileSync("./index.txt","console.log(hello Sir)");
 // how to export this file?
 fs.readFileSync("./index.txt",(err)=>{});
 

const data=fs.readFileSync('index.txt',"utf-8" );
console.log(data);
fs.appendFileSync("./index.txt","/nJai Ram Ji  kI");
fs.unlinkSync("./index.txt");



