'use strict';

var initialAsk = prompt ('Hello, what is your name?');
alert('Nice to meet you, ' + initialAsk);
//console.log('Nice to meet you, ' + initialAsk);

var askRead = prompt ('Did you read my About Me website ' + initialAsk);
//console.log('Did you read my About Me website ' + initialAsk);

if(askRead.toLowerCase() === 'yes') {
  alert(initialAsk + ' I hope you found it interesting!');
} else if (askRead === 'no'){
  alert(initialAsk + ' Please look it over.');
} else {
  alert(initialAsk + ' lower and UPPER case letters matter.');
}

var askFrom = prompt ('Are you from the area?');

if(askFrom.toLowerCase() ==='yes') {
  alert('I came here when I was 4 years old.');
} else if (askFrom === 'no') {
  alert('Me neither!');
} else {
  alert('I am from the East Coast');
}

var askFamily = prompt ('Do you have any siblings?');

if(askFamily.toLowerCase() ==='yes') {
  alert('I have one brother and one sister');
} else if (askFamily === 'no') {
  alert('Got it!');
} else {
  alert('Families come in all shapes and sizes!');
}

var askPets = prompt ('Do you have any pets?');

if(askPets.toLowerCase() ==='yes') {
  alert('I would love to see pictures!');
} else if (askPets === 'no') {
  alert('My cat passed away in 2017.');
} else {
  alert('Gotta love them.');
}

var askCoffee = prompt ('Do you want to go grab some coffee after this');

if(askCoffee.toLowerCase() === 'yes') {
  alert('Great, ' + initialAsk + ', hope there is a place that is still open.');
} else if (askCoffee === 'no') {
  alert('Tea is good, too, ' + initialAsk);
} else {
  alert('Good to meet you, ' + initialAsk);
}








