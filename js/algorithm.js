
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


//constructor(necessary? will we just have the one object?)
var library ={
  b: [[[250, 275, 25, 0, 2], 'arc'], [[150, 175, 100, 0], 'rect']],
  c: [[[100, 100, 35, .60, 1], 'arc'], [[190, 375, 25, 50], 'rect']],
  d: [[[300, 375, 25, 0, .5], 'arc'], [[155, 150, 97, 80], 'rect']],
  f: [[[200, 50, 35, 0, 2], 'arc'], [[145, 185, 150, 150], 'rect']],
  g: [[[50, 100, 35, .80, 1],'arc'], [[300, 180, 42, 77], 'rect']],
  h: [[[175, 50, 100, 0, .5],'arc'], [[70, 20, 60, 27], 'rect']],
  j: [[[200, 145, 50, 0, 2 ], 'arc'], [[300, 150, 150, 13], 'rect']],
  k: [[[150, 270, 84, .5, 1], 'arc'], [[70, 200, 20, 2], 'rect']],
  l: [[[75, 178, 40, 23, .5], 'arc'], [[120, 10, 4, 31], 'rect']],
  m: [[[175, 56, 60, 0, 2], 'arc'], [[37, 57, 69, 41], 'rect']],
  n: [[[380, 170, 80, 0, 1], 'arc'], [[65, 1, 32, 129], 'rect']],
  p: [[[310, 40, 35, 55, .5], 'arc'], [[67, 59, 142, 64], 'rect']],
  q: [[[50, 390, 80, 0, 2], 'arc'], [[70, 104, 89, 120], 'rect']],
  r: [[[90, 35, 8, 23, 1], 'arc'], [[123, 135, 132, 19], 'rect']],
  s: [[[25, 330, 70, 35, .5], 'arc'], [[19, 113, 129, 54], 'rect']],
  t: [[[39, 150, 15, 0, 2], 'arc'], [[115, 89, 47, 139], 'rect']],
  v: [[[150, 275, 40, .15, 1], 'arc'], [[49, 93, 124, 147], 'rect']],
  w: [[[200, 75, 10, 86, .5], 'arc'], [[122, 69, 38, 3], 'rect']],
  x: [[[330, 85, 95, 0, 2], 'arc'], [[72, 32, 53, 16], 'rect']],
  y: [[[280, 300, 100, 0, 1], 'arc'], [[66, 86, 91, 11], 'rect']],
  z: [[[15, 2, 380, 100, .5], 'arc'], [[48, 140, 75, 128], 'rect']],

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
};

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
};

right.addEventListener('click', split_screen_left);

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
var moods = document.getElementById('form');
var mood_value;

moods.addEventListener('submit',function(color_selection){
  color_selection.preventDefault();
  if(document.getElementById('happy').checked){
    mood_value = document.getElementById('happy').value;
  }else if(document.getElementById('chill').checked){
    mood_value = document.getElementById('chill').value;
  }else if(document.getElementById('chaotic').checked){
    mood_value = document.getElementById('chaotic').value;
  }else if(document.getElementById('sad').checked){
    mood_value = document.getElementById('sad').value;
  }
  return(mood_value);
});

moods.addEventListener('submit',function(render_color_theme){
  if(mood_value === 'happy'){
    sigil_space.style.backgroundImage = 'url(/img/happy.jpg)';
  }else if(mood_value === 'chill'){
    sigil_space.style.backgroundImage = 'url(/img/chill.jpg)';
  }else if(mood_value === 'chaotic'){
    sigil_space.style.backgroundImage= 'url(/img/chaotic2.jpg)';
  }else if(mood_value === 'sad'){
    sigil_space.style.backgroundImage = 'url(/img/sad2.jpg)';
  }
});


// store rendered sigils to local storage
// set user generated sigil and user_string into local storage

//init
