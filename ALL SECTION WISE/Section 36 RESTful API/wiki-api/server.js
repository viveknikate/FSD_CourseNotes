const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');

const server = express();

server.use(bodyParser.urlencoded({
     extended: true
}))

server.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/wikiDB');

const wikiSchema = mongoose.Schema({
     title: String,
     content: String
})

const Article = mongoose.model('article',wikiSchema)

server.set('view engine','ejs');

// server.get('/articles',(req, res)=>{
//      Article.find().then((foundArticles)=>{
//           res.send(foundArticles);
//      }).catch((err)=>{
//           res.send("<center><h1>Error 404 Page not found!</h1></center>"+err)
//      })
// })

// server.post('/articles',(req, res)=>{
     
//      // console.log(req.body.title);
//      // console.log(req.body.content);

//      const newArticle = new Article({
//           title : req.body.title,
//           content : req.body.content
//      });

//      newArticle.save().then(()=>{
//           res.send('Saved successfully');
//      });
// });

// server.delete('/articles',(req, res)=>{
//      Article.deleteMany().then(()=>{
//           res.send("<h1>Deleted all articles</h1>");
//      }).catch((err)=>{
//           res.send('<center><h1>Error</h1>'+ err +'</center>')
//      })
// })

// chaining of methods

//Restquests targetting articles 

server.route('/articles')
     .get((req, res)=>{

          Article.find().then((foundArticles)=>{
               res.send(foundArticles);
          }).catch((err)=>{
               res.send("<center><h1>Error 404 Page not found!</h1></center>"+err)
          })
          
     })
     .post((req, res)=>{
          const newArticle = new Article({
               title : req.body.title,
               content : req.body.content
          });
     
          newArticle.save().then(()=>{
               res.send('Saved successfully');
          });
     })
     .delete((req, res)=>{
          Article.deleteMany().then(()=>{
               res.send("<h1>Deleted all articles</h1>");
          }).catch((err)=>{
               res.send('<center><h1>Error</h1>'+ err +'</center>')
          })
     })

//Requests targetting specific articles

server.route('/articles/:articleName')
     .get(function (req, res){

          Article.findOne({title: req.params.articleName}).then((foundArticle)=>{
               
               // console.log(foundArticle.title);

               if(foundArticle)
                    res.send(`The Article is about \n ${foundArticle}`);
               else
                    res.send(`Article you are searching for ${req.params.articleName}, is not available.`)
          })
     })

     .put((req, res)=>{
          Article.updateOne(
               {title: req.params.articleName},
               {title: req.body.title, content: req.body.content},
               // {overwrite: true}
          ).then(()=>{
               res.send("Updated Successfully")
          })
     })

     .delete((req, res)=>{
          Article.deleteOne({title: req.params.articleName}).then((artDel)=>{

               if (req.params.articleName) {
                    res.send(`Article about ${req.params.articleName} is deleted..!`)
               } else {
                    res.send(`The article ${req.params.articleName} doesn't exist`)
               }
          })
     })


server.listen(3000,()=>{
     console.log('Server is running on port 3000')
});