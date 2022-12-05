let fullHeight, innerHeight;
let progressBar = document.querySelector('.progressbar>.grogressbar-line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
  fullHeight = document.body.scrollHeight;
  innerHeight = window.innerHeight;
  progressBar.style.width = (scrollY*100 / (fullHeight - innerHeight  )) + '%';
}

fillProgressLine();