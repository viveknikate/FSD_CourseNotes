//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js"); 
const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// mongoose.connect('mongodb://localhost:27017/todolistDB')  
mongoose.connect('mongodb+srv://viveknikate:Vivek%4012345@cluster0.1mlfhsg.mongodb.net/todolistDB?retryWrites=true&w=majority')

const itemSchema = new mongoose.Schema({
  name: {
    type:String, 
    required: true
  }
});

const Item = model('Item', itemSchema)

const I1 = new Item({
  name: 'Item-1'
});

const I2 = new Item({
  name: 'Item-2'
})

const I3 = new Item({
  name: 'Item-3'
})

const defaultItems = [I1,I2,I3]

const listSchema = {
  name: String,
  items: [itemSchema]
};

const List = mongoose.model('List',listSchema)


app.get("/", function(req, res) {

// const day = date.getDate();
  Item.find().then((item)=>{
    // console.log(item)

    if(item.length == 0){
      Item.insertMany(defaultItems);
      res.redirect('/')
    }else{
      res.render("list", {listTitle: 'Today', newListItems: item});
    }
  })
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list.toLowerCase();

  // console.log(listName)

  const addingItem = new Item({
    name: itemName
  })
  
  if(listName === 'today'){
    addingItem.save()
    res.redirect('/')
  }else{
    List.findOne({name:listName}).then((foundElement)=>{
      foundElement.items.push(addingItem)
      foundElement.save();
      res.redirect('/'+listName);
    }).catch(()=>{
      // console.log('List not found')
    })
  }
});


app.post('/delete',(req, res)=>{
  const checkId =  req.body.deleteBtn;
  const listName = req.body.listName.toLowerCase();

  if(listName ==='today'){
    Item.findByIdAndRemove(checkId).then(()=>{
      res.redirect('/')
    })
  }else{
    List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkId}}}).then((foundItem)=>{
      res.redirect('/'+listName);
    })
  }
  
  // res.redirect('/')
  //findByIdAndRemove method will only work if you give callback function to it. else it won't work.
})

app.get('/:randomString',(req, res)=>{
  const customListName = req.params.randomString.toLowerCase();

  List.findOne({name:customListName}).then((foundElement)=>{

    let Capitalize = foundElement.name.charAt(0).toUpperCase()+foundElement.name.slice(1).toLowerCase();

    res.render('list',{listTitle:Capitalize, newListItems:foundElement.items})
  }).catch(()=>{
    const l1 = new List({
      name:customListName,
      items:defaultItems
    })  
    l1.save();
    res.redirect('/'+customListName)
  })
})

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
