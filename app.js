'use strict'

let name = prompt('what is your name?')
let day = prompt('how is your day going?');
let time = prompt ('What time is it?');
let email = prompt ('Sign Up with your email to get a Discount Updates')
let message;

if(time <= 11){
    message= 'Have A Good Morning!';
}
else if (time <= 18){
    message = 'Have A Good Afternoon!';
}
else if(time <= 24){
    message = 'Have A Good Evening!';
}
else {
    message = 'Time does not exist';
}

document.write('Hey ' +  name + ' ! ' + message  +   'Here is a free Champagne. ENJOY!');



/////
let userAnswer = ''
do{
   let answer = prompt('guess a number from 1 - 10?');
   userAnswer = answer 

    if (answer === '5') {
       console.log('good job');
      
    } else {
         alert('try again');
    }

} while (userAnswer != '5');

function displayChampagne() {
    let output= '';
    let champagne = prompt('scale of 1-5, how many champagne do you want?');
    for(let i = 0; i < champagne; i++){
    output= output + "<img class='champagne' src='champagne.png'/>";}
    return document.write(output);

}
displayChampagne();
    
    
    


