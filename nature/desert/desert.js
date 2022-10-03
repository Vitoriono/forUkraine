let deer = document.querySelector('.deer');
console.log(deer);

let bird = document.querySelector('.bird');
console.log(bird)

let array = [deer, bird];

window.onload = () => {
  let random = Math.floor(Math.random()*array.length);
  let value = array[random];
  console.log(value);
}