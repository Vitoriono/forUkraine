
let up_nuv = document.querySelector('.topnav');
let active = document.querySelector('.topnav h2');
let first = document.querySelector('.header');
let second = document.querySelector('.container_a');
let third = document.querySelector('.container_b');
let fourth = document.querySelector('.container_c');
let article = document.querySelector('.info');

up_nuv.onmouseenter = () => {
  up_nuv.style.opacity = '0.7';
  up_nuv.style.transition ='all 1s ease';
}

up_nuv.onmouseleave = () => {
  up_nuv.style.opacity = '0.0';
}

active.onmouseenter = () => {
  active.style.color = 'rgb(145, 81, 81)';
  first.style.opacity = '1.0';
  first.style.transition = 'all 2s ease';
  
  let delay1 = function() {
    setTimeout(() => (
      second.style.opacity = '1.0',
      second.style.transition = 'all 2s ease'), 1000)
  }

  delay1();

  let delay2 = function() {
    setTimeout(() => (
      third.style.opacity = '1.0',
      third.style.transition = 'all 2s ease'), 2000)
  }

  delay2();

  let delay3 = function() {
      setTimeout(() => (
        fourth.style.opacity = '1.0',
        fourth.style.transition = 'all 2s ease'), 3000)
  }

 delay3();

}

active.onmouseleave = () => {
  active.style.color = 'rgb(182, 159, 159)';
}


active.onclick = () => {
  active.style.color = 'rgb(104, 26, 26)';
  article.style.opacity = '1.0';
  article.style.transition = 'all 2s ease';
}



 







