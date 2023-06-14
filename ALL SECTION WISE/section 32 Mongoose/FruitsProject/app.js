const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB')

const fruitSchema = new mongoose.Schema({
     name:{
          type: String,
          required:true
     },
     rating: {
          type: Number,
          min: 1,
          max: 10
     },
     review: {
          type: String,
          required: true
     }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
     name:'Apple',
     rating: 8,
     review:'Pretty Solid as fruit'
});

// fruit.save();

const fruit2 = new Fruit({
     name:'New_fruit2',
     rating: 10,
     review:'Pretty New as fruit'
});

// fruit2.save();

const fruit3 = new Fruit({
     name:"NamedAnonymousFruit1",
     review:'This is a review for anonymous Fruit',
     rating: 9
});

// fruit3.save();

const personSchema = mongoose.Schema({
     name:String,
     age:Number,
     // likeFruit: fruitSchema
     likeFruit: {
          type: fruitSchema,
          required: true
     }
});

const person = mongoose.model('People', personSchema);

const p1 = new person({
     name: 'Nikate',
     age:22
})

// p1.save();

const p2 = new person({
     name:'Vivek',
     age:23
})

const Mango = new Fruit({
     name:'Mango',
     rating:8,
     review:'Sweet fruit'
});

const Kiwi = new Fruit({
     name: 'Kiwi',
     rating:10,
     review:'The best fruit'
});

// Mango.save();

const p3 = new person({
     name:'Person99',
     age:99,
     likeFruit: Kiwi
})

// p3.save().then(()=>{
//      console.log('Saved succesffully')
// })

// p2.save();



// const Pineapple = new Fruit({
//      name:'Pineapple',
//      rating:9,
//      review:'Tasty fruit'
// });


// Fruit.insertMany([Kiwi, Pineapple, Mango]).then(()=>{
//      console.log('Successfully added the fruits');
// }).catch(
//      (err)=>{
//           console.log(err);
//      }
// )

// throw new MongooseError('Model.find() no longer accepts a callback');
// Fruit.find((err,fruits)=>{
//      if(err){
//           console.log(err);
//      }else{
//           console.log(fruits);
//      }
// })


Fruit.updateOne({_id: "64861e6dfa3f5b14cf21a38d"}, {name: "AnonymousFruit2"}).then(function(){
     console.log('sucessfully updated..!');
}).catch(function(err){
     console.log(err);
})

// Fruit.deleteOne({name: 'AnonymousFruit2'}).then(function(){
//      console.log('sucessfully deleted..!');
// }).catch(function(err){
//      console.log(err);
// })

// Fruit.deleteOne({_id:'64861da600df48632c4cc5fa'}).then(function(){
//      console.log('sucessfully deleted..!');
// }).catch(function(err){
//      console.log(err);
// })

// Fruit.find().then((fruits)=>{

//      console.log(fruits);          //printing all fruits data

//      // fruits.forEach( element => {
//      //      console.log(element.name);              //just printing the name of fruits
//      // });
// }).catch((err)=>{
//      console.log('enable to connect .. '+err);
// }).finally(()=>{
//      mongoose.connection.close();
// })

// person.deleteMany({age:{$gt:20}}).then(function(){
//      console.log('sucessfully deleted..!');
// });


person.find().then((ppl)=>{
     console.log(ppl)
}).catch(()=>{
     console.log("Enable to connect..!");
}).finally(()=>{
     mongoose.connection.close();
})