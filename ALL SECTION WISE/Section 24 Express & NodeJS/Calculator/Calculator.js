
const express = require('express');
const bodyParse = require('body-parser');
const { urlencoded } = require('express');


const app = express();

app.use(bodyParse(urlencoded({extended:true})));

app.get('/', function (req, res){
     // res.send("<h1>Hello world..!</h1>")
     // console.log(__dirname)
     res.sendFile(__dirname+'/index.html');
})

app.get('/about',(req,res)=>{
     res.send("<h1>About us..!</h1>")
})

app.get('/contact',(req,res)=>{
     res.send("<h1>Contact Us Page</h1>")
})


app.post('/',(req,res)=>{
     
     // console.log(req.body);
     // console.log(req.body.num1);
     // console.log(req.body.num2);
     var n1 = req.body.num1;
     var n2 = req.body.num2;
     
     //string format
     // res.send("Thanks for posting \n"+`The result of ${n1} + ${n2} = ${n1+n2}`);
     
     // integer addition 
     n1 = parseInt(n1)
     n2 = Number(n2)
     res.send("Thanks for posting \n"+`The result of ${n1} + ${n2} = ${n1+n2}`);
})


app.get('/bmicalculator', (req, res)=>{
     res.sendFile(__dirname+'/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) =>{
     
     let a = parseInt(req.body.wt)
     let b = parseInt(req.body.ht)
     res.send(`Your BMI ${a / b}`);     
})

app.listen(3000, ()=>{
     console.log("Server started running on port no.3000");
})