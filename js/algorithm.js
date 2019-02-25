
'use strict';


//global vars
//user_string = user input;
user_array = [];
sigil_array = [];

//helper functions

//random_number: pulled from a previous project of Merry's.

function random_number (max_num, min_num) {
  var max = Math.ceil(max_num);
  var min = Math.floor(min_num);
  var num = Math.floor(Math.random()*(max-min+1))+min;
}

//remove duplicate letters and vowels, match individual letters up with library arrays and select shape at random

function process_sigil() {
user_array = array.from(newSet(user_array.split('')));
user_array.join(a,e,i,o,u);
for (i = 0; i < user_array.length; i++){
  eval('library.${user_array[i]}');
  //pull random_number shape from the library, store in array till ready to render, 
}
};

//constructor(necessary? will we just have the one object?)
var library ={

  b: [],
  c: [],
  d: [],
  f: [],
  g: [],
  h: [],
  j: [],
  k: [],
  l: [],
  m: [],
  n: [],
  p: [],
  q: [],
  r: [],
  s: [],
  t: [],
  v: [],
  w: [],
  x: [],
  y: [],
  z: [],

};
//, select a random set of coordinates from the array and push taht to the array of "to be rendered"
//when we have run through the entire array, select random starting coordinates for each shape, and render them to the canvas, uing any colors user has selected via radio buttons.

//object instantnation(necessary?)

//event lisiteners
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var container = document.querySelector('.container');

left.addEventListener('mouseenter',() => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave',() => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter',() => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave',() => {
  container.classList.remove('hover-right');
});

  //submit button
var submit = document.getElementById('submit');

submit.addEventListener('event',process_sigil());

  
  //radio buttons
var radio = document.getElementsByClassName('color');

radio.addEventListener('event',);

//store rendered sigils to local storage
//set user generated sigil and user_string into local storage

//init

