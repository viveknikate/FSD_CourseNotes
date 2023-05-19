
function reload(){
     var rand1 = Math.floor(Math.random() * 6) + 1;
     var rand2 = Math.floor(Math.random() * 6) + 1;

     document.querySelector('.img1').setAttribute('src',`./images/dice${rand1}.png`);
     
     document.querySelector('.img2').setAttribute('src',`./images/dice${rand2}.png`);

     if(rand1 > rand2){
          document.querySelector("#result").innerHTML = "Player 1 won the Match..!";
     }
     else if( rand1 == rand2)
          document.querySelector("#result").innerHTML = "Match Draw";
     else
          document.querySelector("#result").innerHTML = "Player 2 won the Match..!";
}