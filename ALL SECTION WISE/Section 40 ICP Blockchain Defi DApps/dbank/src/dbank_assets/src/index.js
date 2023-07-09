import {dbank} from '../../declarations/dbank';

// dbank

window.addEventListener('load', async function(){
  // console.log("Finished Loading");
  Update();
})

document.querySelector('form').addEventListener('submit', async function(event){
  event.preventDefault();
  // console.log('Submitted');
  const button = event.target.querySelector('#submit-btn');

  const inputAmount =  parseFloat(document.getElementById('input-amount').value);
  const withdrawalAmount =  parseFloat(document.getElementById('withdrawal-amount').value);

  button.setAttribute('disabled', true);

  if(document.getElementById('input-amount').value.length != 0)
    await dbank.topUP(inputAmount);
  
  if(document.getElementById('withdrawal-amount').value.length != 0)
    await dbank.WithDraw(withdrawalAmount);
  

  await dbank.compound();

  Update();

  document.getElementById('input-amount').value = '';
  document.getElementById('withdrawal-amount').value = '';

  button.removeAttribute("disabled");

});

async function Update(){

  // var currentAmount = await dbank.checkBalance();
  // currentAmount = currentAmount.toFixed(2);
  // document.getElementById('value').innerText = currentAmount;

  var currentAmount = await (await dbank.checkBalance()).toFixed(2);
  // currentAmount = currentAmount.toFixed(2);
  document.getElementById('value').innerText = currentAmount;
}