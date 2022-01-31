'use strict'

let name = prompt('What is your name?');
let time = prompt('What time is it?');
let email= prompt( 'what is your email');
let message;

if(time <= 11){
    message = 'Good Morning!';
} else if (time <= 18){
    message = 'Good Afternoon!';
}  else if(time <= 24){
    message = "Good Evening!";
} else {
    message = "Time does not exist!";
}

document.write('Hello ' + name + '! ' + message + email);

