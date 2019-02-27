
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
  g: [[[275, 275, 35, .80, 1],'arc'], [[190, 180, 42, 77], 'rect']],
  h: [[[175, 50, 100, 0, .5],'arc'], [[170, 300, 60, 27], 'rect']],
  j: [[[200, 145, 50, 0, 2 ], 'arc'], [[125, 50, 150, 13], 'rect']],
  k: [[[200, 270, 75, .15, 1], 'arc'], [[170, 200, 20, 2], 'rect']],
  l: [[[135, 178, 40, 23, .5], 'arc'], [[120, 178, 4, 31], 'rect']],
  m: [[[195, 405, 60, 0, 2], 'arc'], [[170, 60, 69, 41], 'rect']],
  n: [[[380, 170, 80, 0, 1], 'arc'], [[65, 1, 32, 129], 'rect']],
  p: [[[310, 40, 35, 55, .5], 'arc'], [[165, 60, 64, 142], 'rect']],
  q: [[[200, 390, 80, 0, 2], 'arc'], [[160, 104, 89, 120], 'rect']],
  r: [[[90, 35, 8, 23, 1], 'arc'], [[123, 135, 132, 19], 'rect']],
  s: [[[25, 330, 70, 35, .5], 'arc'], [[130, 190, 129, 54], 'rect']],
  t: [[[75, 75, 15, 0, 2], 'arc'], [[170, 89, 47, 139], 'rect']],
  v: [[[200, 75, 40, .15, 1], 'arc'], [[140, 400, 124, 147], 'rect']],
  w: [[[200, 75, 10, 86, .5], 'arc'], [[182, 69, 38, 3], 'rect']],
  x: [[[330, 85, 95, 0, 2], 'arc'], [[72, 32, 53, 16], 'rect']],
  y: [[[280, 300, 100, 0, 1], 'arc'], [[66, 86, 91, 11], 'rect']],
  z: [[[15, 2, 380, 100, .5], 'arc'], [[48, 140, 75, 128], 'rect']],

};

function write_sigil(sigil_array){
  ctx.clearRect(0,0,400,500);
  // var mood_color = moods.mood_value.strokeStyle;
  // ctx.strokeStyle = mood_color;
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
//Store text input into local storage
var save_button = document.getElementById('save');
var text_array = [];


//Store images into local storage
var img_array = [];

var local_storage = function(event){
  event.preventDefault();

  var new_img = sigil_space.toDataURL(); //transform canvas image into img URL

  if (localStorage.getItem('pic')){ //if local storage exists, add parse img URLs and add them to array.
    var stringy_img_array = localStorage.getItem('pic');
    img_array=JSON.parse(stringy_img_array);}

  img_array.push(new_img); //add new img to array
  console.log(img_array);

  stringy_img_array = JSON.stringify(img_array); //stringify and store img_array into local storage
  localStorage.setItem('pic', stringy_img_array);
};

save_button.addEventListener('click', local_storage);

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

function render_sigil(event){
  event.preventDefault();
  var user_string = document.getElementById('text-input').value;
  console.log('user_string', user_string);

  var sigil_array = process_sigil(user_string);

  console.log(sigil_array);
  write_sigil(sigil_array);

}

//radio buttons
var moods = document.getElementById('form');
var mood_value;

function handle_mood(color_selection){
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
}

function change_color(render_color_theme){
  if(mood_value === 'happy'){
    ctx.strokeStyle = '#f4cb42';
    sigil_space.style.backgroundImage = 'url(/img/happy.jpg)';  
  }else if(mood_value === 'chill'){
    ctx.strokeStyle = '#185096';
    sigil_space.style.backgroundImage = 'url(/img/chill.jpg)';  
  }else if(mood_value === 'chaotic'){
    ctx.strokeStyle = '#eae8ef';
    sigil_space.style.backgroundImage = 'url(/img/chaotic3.jpg)';
  }else if(mood_value === 'sad'){
    ctx.strokeStyle = '#0a6077';
    sigil_space.style.backgroundImage = 'url(/img/sad3.jpg)';
  }
}

moods.addEventListener('submit', function(event){
  handle_mood(event);
  change_color(event);
  render_sigil(event);
});
// store rendered sigils to local storage
// set user generated sigil and user_string into local storage

//init
