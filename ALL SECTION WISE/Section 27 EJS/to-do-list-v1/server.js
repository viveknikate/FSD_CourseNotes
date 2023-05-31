
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

let Items = ['one','two','three','four'];
let Works = ['meet','development','agenda meet'];

let today = date.fetchDay();

// let today = date.fetchDate();

app.get('/',(req,res)=>{
     res.render('List', {title:"Personal_List", whichDay:today, ListItems:Items})
})


app.post('/',(req,res)=>{

     // console.log(req.body);

     var item = req.body.task;
     if(req.body.buttonValue === 'Personal_List')
     {
          Items.push(item);
          res.redirect('/')
     }else{
          Works.push(item);
          res.redirect('/work');
     }

})

app.get('/work',(req, res)=>{
     res.render('List',{title:"Work_List", whichDay:today, ListItems:Works})
})

app.get('/about',(req, res)=>{
     res.render('about');
})

// app.post('/work',(req,res)=>{ 
//      var item = req.body.task;
//      Works.push(item);
//      res.redirect('/work');
// })

app.listen(3000,()=>{
     console.log('Server is running on port 3000');
})