new WOW({
  animateClass: 'animate__animated',
}).init();

const slogan = document.querySelector('.slogan');
const sloganTitle = document.querySelector('.slogan-title span');
let flag = false;
setInterval(function () {
  // if(!flag && !slogan.classList.contains('change')&&sloganTitle.classList.contains('change')){
  //   slogan.classList.toggle('change');
    sloganTitle.classList.toggle('change')
  // }else {
  //
  // }
  // flag = !flag
}, 1000);