// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 7000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// const express = require('express');
// const app = express();

// app.get('/path', (req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.send('Hello, World!');
// });

// app.listen(9000, () => {
//   console.log('Server is running on port 9000');
// });


// const myServer=http.createServer((res,req)=>{
// console.log(req);
// req.end("Hello JI Kaise ho");
// });

// myServer.listen(7100,()=> console.log("Your Server Is Started"));


 
 



const express=require("express");
const app=express();

app.get("/",(req,res)=>{                                                                                                                                                                                                                                                                                                                                    
   return res.send("Hello Worild");
});
app.get("/about", (req,res)=>{
   return res.send("Hello This a about Page");
    });
    

   app.listen(8000,()=> console.log("Your Server is started"));




   