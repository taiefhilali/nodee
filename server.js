



const app=require('./app.js');
const http=require('http');
const server=http.createServer(app);
server.listen(8090)


//seance5!!!!

























// const express = require("express");
// const app = express();
// const port = 8080;

// const logDateTime= (req,res,next)=>{
//     req.dateTime=new Date();
//     console.log(new Date());
//     next();
// };

// const requireJsonContent = () => {
//     return (req, res, next) => {
//     if(req.headers['content-type'] !== 'application/json') {
//     res.status(400).send('Server requires application/json');
//     } else {
//     next();
//     }}}

// app.use(logDateTime);

// app.get('/' ,middle, (req,res,next)=>{
//     res.send (`Hello :)  ${req.dateTime}`);
// });


// app.listen(port ,()=>console.log(`server is running on port:${port}`));


// // //var http = require ('http');
// // const express=require('express');
// // const app= express();




// // const logdatatime=(req,res,next) =>{

// // req.dateTime=new Date();

// //     console.log(new Date());
// //     next();

// // }

// // const requirejsoncontent=()=> {

// //     return (req,res,next) => {
       
// //     if(req.headers['content-type'] !== 'application/json'){res.status(400).send('server requires application/json')
// //     }else
// //     {next();
    
// //     }
    
// // }}
// // app.use(logdatatime);
// // app.get('/',requirejsoncontent(),(req,res,next) =>{

// //     res.send((`Hellp 4TWIN5  at ${req.dateTime}`));


// // } )


// // app.listen(8090);