let deer = document.querySelector('.deer');
let bird = document.querySelector('.bird');
let hedgehog = document.querySelector('.hedgehog');
let squirrel = document.querySelector('.squirrel');
let lynx = document.querySelector('.lynx');
let grouse = document.querySelector('.grouse');
let nightingale = document.querySelector('.nightingale');
let array = [deer, bird, hedgehog, squirrel, lynx, grouse, nightingale ];

window.onload = () => {
  let random = Math.floor(Math.random()*array.length);
  let value = array[random];
  console.log(value);
  value.style.display = 'block';
}