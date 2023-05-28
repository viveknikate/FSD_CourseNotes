const express  = require('express');
const bodyParser = require('body-parser');

const app  = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

var items = ['Wake Up early','Study (complete the modules)','Go get nap'];

app.get('/', (req, res)=>{
  var today = new Date();

  // if(today.getDay() === 6 || today.getDay() ===0)
    // {
    //   res.sendFile(__dirname+'/index.html');
    // }
    // else{
    //   res.write("<h1>Uh..! NO..!, I have to work.. This is weekday</h1>")
    // }
  
    
  // today=4
  

  // switch(today){
  //   case 0:
  //     day = 'Sunday'
  //     break;
  //   case 1:
  //       day = 'Monday'
  //       break;
  //   case 2:
  //       day = 'Tuesday'
  //       break;
  //   case 3:
  //       day = 'Wednesday'
  //       break;
  //   case 4:
  //       day = 'Thursday'
  //       break;
  //   case 5:
  //       day = 'Friday'
  //       break;
  //   case 6:
  //       day = 'Saturday'
  //       break;
  //   case 7:
  //       day = 'Sunday'
  //       break;
  //   default:
  //     console.log("Invalid Day.!");
  //     break;
  // }

  var options ={
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }

  var day= today.toLocaleDateString('en-US', options);

  // console.log(day)
  res.render('list', {kindOfDay: day, newListItems: items});
})


app.post('/',(req, res)=>{

  const item = req.body.newItem;
  items.push(item);

  // console.log(items);
  res.redirect('/');

})


app.post('/',(req, res)=>{
  let poped = items.pop();
  console.log(poped);
  res.redirect('/')
})

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})