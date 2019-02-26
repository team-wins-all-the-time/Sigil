
'use strict';

//global vars
var button = document.getElementById('submit');
console.log('submit', button);
var form = document.getElementById('form');
console.log('form', form);
var radio = document.getElementsByClassName('color');
console.log('radio', radio);
// var user_array = [];
// console.log('user_array', user_array);
var sigil_array = [];
console.log('sigil_array', sigil_array);
var sigil_space = document.getElementById('generator');
var ctx = sigil_space.getContext('2d');

//helper functions

//random_number: pulled from a previous project of Merry's.

function random_number (max_num, min_num) {
  var max = Math.ceil(max_num);
  var min = Math.floor(min_num);
  var num = Math.round(Math.random()*(max-min))+min;
  return num;
}

//remove duplicate letters and vowels, match individual letters up with library arrays and select shape at random

function process_sigil(user_string) {
  console.log('begining of process_sigil',user_string);
  var user_array = Array.from(new Set(user_string.split('').map(letter => letter.toLowerCase())));
  console.log('after newSet and array.from', user_array);
  var to_remove = ['a','e','i','o','u','.','!',',',' '];
  user_array = user_array.filter(letter => !to_remove.includes(letter));
  console.log('after array.join', user_array);
  var sigil_array = [];
  for (var i = 0; i < user_array.length; i++){
    // var thing = eval(`library.${user_array[i]}`);
  var thing = library[user_array[i]];
    console.log(user_array[i]);
    sigil_array.push(thing[random_number(1,0)]);
    console.log(random_number(1,0));
    console.log(thing);

  }
  return sigil_array;
}

// function color_selection(event, user_mood){
//   event.preventDefault();
//   //this is the event handler for radio button submission

// }

//constructor(necessary? will we just have the one object?)
var library ={
  b: [[[150, 75, 25, 0, 2], 'arc'], [[150, 75, 100, 0], 'rect']],
  c: [[[100, 50, 35, .60, 1], 'arc'], [[150, 75, 25, 50], 'rect']],
  d: [[[150, 75, 25, 0, .5], 'arc'], [[100, 150, 97, 80], 'rect']],
  f: [[[100, 50, 35, 0, 2], 'arc'], [[85, 20, 150, 150], 'rect']],
  g: [[[50, 100, 35, .80, 1],'arc'], [[30, 100, 42, 77], 'rect']],
  h: [[[100, 50, 100, 0, .5],'arc'], [[70, 20, 60, 27], 'rect']],
  j: [[[200, 45, 50, 0, 2 ], 'arc'], [[15, 101, 150, 13], 'rect']],
  k: [[[150, 70, 84, .5, 1], 'arc'], [[69, 6, 20, 2], 'rect']],
  l: [[[75, 100, 40, 23, .5], 'arc'], [[12, 59, 4, 31], 'rect']],
  m: [[[175, 50, 60, 0, 2], 'arc'], [[37, 57, 69, 41], 'rect']],
  n: [[[100, 150, 80, 0, 1], 'arc'], [[65, 1, 32, 129], 'rect']],
  p: [[[100, 50, 35, 55, .5], 'arc'], [[67, 59, 142, 64], 'rect']],
  q: [[[50, 200, 80, 0, 2], 'arc'], [[70, 104, 89, 120], 'rect']],
  r: [[[50, 35, 8, 23, 1], 'arc'], [[123, 135, 132, 19], 'rect']],
  s: [[[25, 130, 70, 35, .5], 'arc'], [[19, 113, 129, 54], 'rect']],
  t: [[[39, 100, 15, 0, 2], 'arc'], [[115, 89, 47, 139], 'rect']],
  v: [[[150, 150, 40, .15, 1], 'arc'], [[49, 93, 124, 147], 'rect']],
  w: [[[200, 75, 10, 86, .5], 'arc'], [[122, 69, 38, 3], 'rect']],
  x: [[[100, 85, 95, 0, 2], 'arc'], [[72, 32, 53, 16], 'rect']],
  y: [[[100, 100, 100, 0, 1], 'arc'], [[66, 86, 91, 11], 'rect']],
  z: [[[8, 2, 100, 100, .5], 'arc'], [[48, 140, 75, 128], 'rect']],

};

function write_sigil(sigil_array){
  ctx.beginPath();
  for (var l = 0; l < sigil_array.length; l ++){
    console.log(sigil_array);
    if (sigil_array[l][1] === 'rect'){
      ctx.rect(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3]);
    }
    else if (sigil_array[l][1] === 'arc'){
      ctx.arc(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3], sigil_array[l][0][4] * Math.PI);
    }
  }
  console.log(sigil_array);
  ctx.stroke();
}
//, select a random set of coordinates from the array and push taht to the array of "to be rendered"
//when we have run through the entire array, select random starting coordinates for each shape, and render them to the canvas, uing any colors user has selected via radio buttons.

//object instantnation(necessary?)

//event lisiteners
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var container = document.querySelector('.container');

var target_left_arrow = document.getElementById('left-arrow');
var target_right_arrow = document.getElementById('right-arrow');

left.addEventListener('click',() => {
  target_right_arrow.src = ('/img/right.png');
  container.classList.add('click-left');
});

var split_screen_right = function(event){
  if(event.target.id === 'right-arrow'){
    container.classList.remove('click-left');
    target_right_arrow.src = ('');
  }
}

left.addEventListener('click',split_screen_right); 


right.addEventListener('click',() => {
  container.classList.add('click-right');
  target_left_arrow.src = ('/img/left.png');
});

var split_screen_left = function(event){
  if(event.target.id === 'left-arrow'){
  container.classList.remove('click-right');
  target_left_arrow.src = ('');
  }
}

right.addEventListener('click', split_screen_left);
  
  //submit button
var submit = document.getElementById('submit');

form.addEventListener('submit',function (event){
  event.preventDefault();
  var user_string = document.getElementById('text-input').value;
  console.log('user_string', user_string);

  var sigil_array = process_sigil(user_string);

  console.log(sigil_array);
  write_sigil(sigil_array);
  
});


//radio buttons

// radio.addEventListener('event', function (event){
//   event.preventDefault();
//   console.log(event.target.radio.value);
//   // var user_mood = event.target.radio.value;
//   console.log('user_mood', event.target.submit.value);
// });

//store rendered sigils to local storage
//set user generated sigil and user_string into local storage

//init


