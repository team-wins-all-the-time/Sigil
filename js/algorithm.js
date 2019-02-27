
'use strict';

//global vars
var button = document.getElementById('submit');
var form = document.getElementById('form');
var radio = document.getElementsByClassName('color');
var sigil_array = [];
var sigil_space = document.getElementById('generator');
var ctx = sigil_space.getContext('2d');
var user_string;


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
  var user_array = Array.from(new Set(user_string.split('').map(letter => letter.toLowerCase())));
  var to_remove = ['a','e','i','o','u','.','!',',',' '];
  user_array = user_array.filter(letter => !to_remove.includes(letter));
  var sigil_array = [];
  for (var i = 0; i < user_array.length; i++){
    // var thing = eval(`library.${user_array[i]}`);
    var user_letter = library[user_array[i]];
    sigil_array.push(user_letter[random_number(4,0)]);
  }
  return sigil_array;
}



/* Generating new shapes:
  circles need 5 indices in their first array, and the string 'arc' as [1]
  rectangles need 4 indicies in their first array, and the string 'rect' as [1]
  lines need 4 indicies in their first array, and the string 'line' as [1]
  triangles need 6 indicies in their first array, and the string 'tri' as [1]

  If you add a new template in the write_sigil function, be sure to incriment the max number in the random_number function a few lines above.
  */

var library ={
  b: [[[250, 275, 25, 0, 2], 'arc'], [[150, 175, 100, 0], 'rect'], [[200, 50, 200, 450], 'line'], [[125,125,125,45,45,125], 'tri'], [[100,100, 150, 150, 150, 100, 50, 125, 150, 125],'complex']], 
  c: [[[100, 100, 35, .60, 1], 'arc'], [[190, 375, 25, 50], 'rect'] [[300, 75, 400, 75],'line'], [[300, 200, 400,100, 300, 50], 'tri']],
  d: [[[300, 375, 25, 0, .5], 'arc'], [[155, 150, 97, 80], 'rect'], [[50, 200, 350, 50], 'line'], [[200,200,200,250,250,200], 'tri']],
  f: [[[200, 50, 35, 0, 2], 'arc'], [[145, 185, 150, 150], 'rect'], [[200, 200, 400, 400], 'line'], [[100,100,150,100,100,150], 'tri']],
  g: [[[275, 275, 35, .80, 1],'arc'], [[190, 180, 42, 77], 'rect'], [[50, 200, 350, 200], 'line'], [[300,250,300,150,200,200], 'tri']],
  h: [[[175, 50, 100, 0, .5],'arc'], [[170, 300, 60, 27], 'rect'], [[200, 50, 200, 450], 'line'], [[150,500,250,500,200,400], 'tri']],
  j: [[[200, 145, 50, 0, 2 ], 'arc'], [[125, 50, 150, 13], 'rect'], [[250, 100, 250, 400], 'line'], [[100,125,125,100,50,50], 'tri']],
  k: [[[200, 270, 75, .15, 1], 'arc'], [[170, 200, 20, 2], 'rect'], [[200, 50, 200, 450], 'line'], [[400,500,100,400,0,0], 'tri']],
  l: [[[135, 178, 40, 23, .5], 'arc'], [[120, 178, 4, 31], 'rect'], [[300, 150, 400, 250], 'line'], [[225,250,250,225,250,250], 'tri']],
  m: [[[195, 405, 60, 0, 2], 'arc'], [[170, 60, 69, 41], 'rect'], [[50, 400, 350, 400], 'line'], [[100,100,300,300,90,200], 'tri']],
  n: [[[380, 170, 80, 0, 1], 'arc'], [[65, 1, 32, 129], 'rect'], [[150, 150, 250, 150], 'line'], [[150,50,250,50,200,500], 'tri']],
  p: [[[310, 40, 35, 55, .5], 'arc'], [[165, 60, 64, 142], 'rect'], [[300, 200, 300, 450], 'line'], [[300,125,350,125,250,150], 'tri']],
  q: [[[200, 390, 80, 0, 2], 'arc'], [[160, 104, 89, 120], 'rect'], [[100, 500, 200, 500], 'line'], [[50,125,350,125,200,200], 'tri']],
  r: [[[90, 35, 8, 23, 1], 'arc'], [[123, 135, 132, 19], 'rect'], [[200, 150, 300, 250], 'line'], [[225,225,225,245,245,225], 'tri']],
  s: [[[25, 330, 70, 35, .5], 'arc'], [[130, 190, 129, 54], 'rect'], [[200, 50, 200, 450], 'line'], [[150,50,250,50,200,0], 'tri']],
  t: [[[75, 75, 15, 0, 2], 'arc'], [[170, 89, 47, 139], 'rect'], [[200, 0, 200, 500], 'line'], [[200,50,200,100,150,75], 'tri']],
  v: [[[200, 75, 40, .15, 1], 'arc'], [[140, 400, 124, 147], 'rect'], [[200, 150, 200, 250], 'line'], [[200,300,200,400,300,350], 'tri']],
  w: [[[200, 75, 10, 86, .5], 'arc'], [[182, 69, 38, 3], 'rect'], [[150, 250, 300, 250], 'line'], [[350,350,350,450,200,400], 'tri']],
  x: [[[330, 85, 95, 0, 2], 'arc'], [[72, 32, 53, 16], 'rect'], [[50, 250, 350, 250], 'line'], [[200,100,300,50,400,350], 'tri']],
  y: [[[280, 300, 100, 0, 1], 'arc'], [[66, 86, 91, 11], 'rect'], [[100, 50, 100, 150], 'line'], [[200,250,100,300,300,300], 'tri']],
  z: [[[15, 2, 380, 100, .5], 'arc'], [[48, 140, 75, 128], 'rect'], [[50, 100, 150, 100], 'line'], [[100,125,200,45,400,125], 'tri']],

};

function write_sigil(sigil_array){
  ctx.clearRect(0,0,400,500);
  ctx.beginPath();
  for (var l = 0; l < sigil_array.length; l ++){
    if (sigil_array[l][1] === 'rect'){
      ctx.rect(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3]);
    }
    else if (sigil_array[l][1] === 'arc'){
      ctx.arc(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3], sigil_array[l][0][4] * Math.PI);
    }
    else if (sigil_array[l][1] === 'line'){
      ctx.moveTo(sigil_array[l][0][0], sigil_array[l][0][1]);
      ctx.lineTo(sigil_array[l][0][2], sigil_array[l][0][3]);
    }
    else if (sigil_array[l][1] === 'tri'){
      ctx.moveTo(sigil_array[l][0][0], sigil_array[l][0][1]);
      ctx.lineTo(sigil_array[l][0][2], sigil_array[l][0][3]);
      ctx.lineTo(sigil_array[l][0][4], sigil_array[l][0][5]);
      ctx.closePath();
    }
    else if (sigil_array[l][1] === 'complex') {
      ctx.moveTo(sigil_array[l][0][0], sigil_array[l][0][1]);
      ctx.lineTo(sigil_array[l][0][2], sigil_array[l][0][3]);
      ctx.lineTo(sigil_array[l][0][4], sigil_array[l][0][5]);
      ctx.lineTo(sigil_array[l][0][6], sigil_array[l][0][7]);
      ctx.lineTo(sigil_array[l][0][8], sigil_array[l][0][9]);

    }
    ctx.stroke();
  }
}
//Store text input into local storage
var save_button = document.getElementById('save');
var text_array = [];
var img_array = [];


var local_storage = function(event){

  event.preventDefault();

  var new_img = sigil_space.toDataURL(); //transform canvas image into img URL

  if (localStorage.getItem('pic')){ //if local storage exists, add parse img URLs and add them to array.
    var stringy_img_array = localStorage.getItem('pic');
    img_array=JSON.parse(stringy_img_array);}

  if(localStorage.getItem('text')){
    var stringy_text_array = localStorage.getItem('text');
    text_array = JSON.parse(stringy_text_array);}

  img_array.push(new_img); //add new img to array
  text_array.push(user_string);
  console.log(img_array);
  console.log(text_array);

  stringy_img_array = JSON.stringify(img_array); //stringify and store img_array into local storage
  localStorage.setItem('pic', stringy_img_array);
  stringy_text_array = JSON.stringify(text_array);
  localStorage.setItem('text', stringy_text_array);
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

// var submit = document.getElementById('submit');

function render_sigil(event){
  event.preventDefault();
  user_string = document.getElementById('text-input').value;
  console.log('user_string', user_string);

  var sigil_array = process_sigil(user_string);

  console.log(sigil_array);
  write_sigil(sigil_array);
}



// Saving sigils made into local storage

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

    sigil_space.style.backgroundImage = 'url(/img/newhappy.jpg)';

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

