
// document.querySelectorAll('button')[0].addEventListener('click',handleClick);
// document.querySelectorAll('button')[1].addEventListener('click',handleClick);
// document.querySelectorAll('button')[2].addEventListener('click',handleClick);
// document.querySelectorAll('button')[3].addEventListener('click',handleClick);
// document.querySelectorAll('button')[4].addEventListener('click',handleClick);
// document.querySelectorAll('button')[5].addEventListener('click',handleClick);
// document.querySelectorAll('button')[6].addEventListener('click',handleClick);



// for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
//      document.querySelectorAll('.drum')[i].addEventListener('click',handleClick);
// }

// function handleClick(){
//      // new Audio('sounds/tom-1.mp3').play();
//      var audio = new Audio('./sounds/tom-1.mp3');
//      audio.play();
// }


// document.addEventListener('keypress', function(event){
//      alert("key pressed "+event.key.toUpperCase());
// })

var len = document.querySelectorAll('.drum').length;

document.addEventListener('keypress',function (e){
     makeSound(e.key);
     buttonAnimation(e.key);
});

for (let i = 0; i < len; i++) {
     document.querySelectorAll('.drum')[i].addEventListener('click',function (){
          var buttonInnerText = this.innerHTML;
          makeSound(buttonInnerText);
          buttonAnimation(buttonInnerText); 
     });
}

function makeSound(key){
     switch (key) {
          case 'w':
               new Audio('./sounds/tom-1.mp3').play();
               break;
          case 'a':
               new Audio('sounds/tom-2.mp3').play();
               break;
          case 's':
               new Audio('./sounds/tom-3.mp3').play();
               break;
          case 'd':
               new Audio('./sounds/tom-4.mp3').play();
               break;
          case 'j':
               new Audio('./sounds/snare.mp3').play();
               break;
          case 'k':
               new Audio('./sounds/crash.mp3').play();
               break;
          case 'l':
               new Audio('./sounds/kick-bass.mp3').play();
               break;
          default:
               console.log(buttonInnerText);   
               break;
     }
}

function buttonAnimation(currentKey){
     var activeBtn = document.querySelector('.'+currentKey);
     activeBtn.classList.add('pressed');

     setTimeout(() => {
          activeBtn.classList.remove('pressed');
     }, 300);
}