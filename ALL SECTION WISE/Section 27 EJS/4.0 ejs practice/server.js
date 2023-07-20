import express from 'express';
import ejs from 'ejs';

const server = express();

// const day = new Date(7,24,2023).getDay();
const day = new Date(7,22,2023).getDay();

server.set('view engine', 'ejs');

server.get('/',(req, res)=>{
     // console.log(day);

     if(day ==1 || day == 6){
          res.render("index",{txt:"It's Party Time"});
     }else{
          res.render("index",{txt:"It's Work Time, Meet Goals.."});
     }

})

server.listen(4000,(req, res)=>{
     console.log("Server is running on port 4000");
})