/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer  from 'inquirer';
import qrImage from  'qr-image';
import fs from 'fs';

inquirer.prompt([
     {
          message: 'Enter your URL..',
          name:"URL"
     }
]).then((ans)=>{
     const URL = ans.URL;
     // console.log(ans);

     const qr_svg = qrImage.image(URL);
     qr_svg.pipe(fs.createWriteStream("ulr.png"))

     fs.writeFile("MineURL.txt", URL, (err)=>{
          if(err)
               throw err;

          console.log('file is saved.');
     })

}).catch((err)=>{
     console.log("Got Error: "+err);
})
