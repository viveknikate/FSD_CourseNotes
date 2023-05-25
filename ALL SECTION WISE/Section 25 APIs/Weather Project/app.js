
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const https = require('https');
const { urlencoded } = require("body-parser");

app.use(bodyParser(urlencoded({extended:true})));

app.get('/',(req, res)=>{
     res.sendFile(__dirname+'/index.html');
})


app.post('/', (req, res)=>{
     
     const apiKey = '36a426e3b4273c7036e6726ddbd68c64';
     const unit = 'metric';
     const city = req.body.cityName;

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`

     https.get(url, (response)=>{
          // // console.log(response);     //response will print complete data received from that url
               // // console.log(response.statusCode);

               // if(response.statusCode == 200)
               //      res.send("<center><h1>The Server Up & running</h1></center>")
               // else if(response.statusCode == 404)
               //      res.send("<center><h1>Requested Page Not Found</h1></center>")
               // else if(response.statusCode == 401)
               //      res.send("<center><h1>Authentication App Id problem.</h1></center>")

          response.on('data', (info)=>{
               // console.log(info); //This is in hexadecimal code to convert it into JSON use below method

               // console.log(JSON.parse(info));
               // res.send(JSON.parse(info));
               
               // const weatherData = JSON.parse(info);
               // console.log(weatherData)

               // const id = weatherData.weather[0].id;             //in weather data there is another array called weather so we gave index there.
               // console.log(id);
               
               // //to ACCESS the specific data from json file you can copy the path from JSON VIEWER PRO chrom extension
               
                    // const desc = weatherData.weather[0].description;
                    // console.log(desc);

                    // var obj = {
                    //      name: 'vivek',
                    //      age: 22,
                    //      city: 'Bengaluru',
                    //      country: 'India'
                    // }

                    // console.log(JSON.stringify(obj));
                    // console.log(obj)

                    // const temp = weatherData.main.temp;
                    // console.log(temp);
               
               const weatherData = JSON.parse(info);
               const temp1 = weatherData.main.temp
               console.log(temp1);

               const desc = weatherData.weather[0].description;
               console.log(desc);

               const icon = weatherData.weather[0].icon;
               // const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
               const imgURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";

               // res.send(`<center><h1>The Temperature in Bengaluru is ${temp1} <br /> Description : ${desc}</h1></center>`)
               
               
               res.send("<center> <h1>The Temperature in "+city+" is "+ temp1 +" <img src="+imgURL+" /> </h1> <p>In "+city+" <cite>"+desc+"</cite> there.</p> </center>")
               
               // res.write("<p>Description:"+desc+"</p>");
               // res.write("<center><h1>The Temperature in Bengaluru is "+ temp1 +" <img src="+imgURL+" /> </h1></center>")
               // res.write(`<center><h1>The Temperature in Bengaluru is  ${temp1} <img src= ${imgURL} /> </h1></center>`)
               // res.send();

          })

     });
})

app.listen(3000,()=>{
     console.log("Server is Running on port 3000");
})