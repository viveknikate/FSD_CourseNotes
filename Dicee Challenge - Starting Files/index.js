var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

// document.querySelector('img').setAttribute('src',`./images/dice${randomNumber1}.png`);
document.querySelector('.img1').setAttribute('src','./images/dice'+randomNumber1+'.png')


document.querySelectorAll('img')[1].setAttribute('src',`./images/dice${randomNumber2}.png`);
// document.querySelector('.img2').setAttribute('src','./images/dice'+randomNumber2+'.png');

if(randomNumber1 > randomNumber2)
    document.getElementById('result').innerHTML = '🚩Player 1 Win';
else if(randomNumber2 > randomNumber1)
    document.getElementById('result').innerHTML = 'Player 2 Win🚩';
else
    document.getElementById('result').innerText = 'Match Drawn \n Play again!!';