//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

let isUserAuthenticated = false;

//creating middleware
function passwordCheck(req, res, next) {
     const pass = req.body['password'];

     if(pass == 'Vivek@123')
     {
          isUserAuthenticated = true;
     }
     next();
}

//using middleware
app.use(passwordCheck);

app.get('/',(req, res)=>{
     res.sendFile(__dirname + '/public/index.html')
})

app.post('/check',(req, res)=>{
     if(isUserAuthenticated){
          res.sendFile(__dirname+'/public/secret.html');
     }else{
          res.redirect('/');
     }
})

app.listen(3000, ()=>{
     console.log('running on port 3000');
})
