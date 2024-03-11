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



//---------------------------express---------------------------

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
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


 
 //------------------------------ routing----------------------------



const express=require("express");
const blog = require('./routes/blog')
const product=require('./routes/product')  




const app=express();
app.use('/blog', blog)
app.use('/product',product)

app.get("/",(req,res)=>{                                                                                                                                                                                                                                                                                                                                    
   return res.send("Hello Worild");
});
app.get("/about", (req,res)=>{
   return res.send("Hello This a about Page");
    });

    app.post("/", (req, res)=>{
      console.log(" post request");
      return res.send("This is your post request")
    })
    
    app.put("/",( req,res)=>{
      console.log("This is your Put Requestt");
      return res.send("PUT requewst");
    })

   app.listen(7100,()=> console.log("Your Server is started"));




   