const express = require('express');

const app = express();

app.get('/', (req, res) =>{
     // console.log(req);
     console.log("This is Home page");
     res.send('<h1> Hello world..!</h1>')
})

app.get('/contact', function (req, res){
     console.log("This is Contact page");
     res.send("<h1>ContactUs on : vivek.nikate@capgemini.com</h1>")
})

app.get('/about', function (req, res){
     console.log('This is about us page')
     res.send("<center><h1>This is My WebSite. Software Engineer at Capgemini</h1></center>")
})

app.listen(4555,()=>{
     console.log("On Port no. 4555 server is running");
});