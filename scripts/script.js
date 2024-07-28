new WOW({
  animateClass: 'animate__animated',
}).init();

// const slogan = document.querySelector('.slogan');
const sloganTitle = document.querySelector('.slogan-title span');

setInterval(function () {
  // if(!flag && !slogan.classList.contains('change')&&sloganTitle.classList.contains('change')){
  //   slogan.classList.toggle('change');
    sloganTitle.classList.toggle('change')
  // }else {
  //
  // }
  // flag = !flag
}, 1000);

const servicesItemsImage = document.querySelectorAll('.services-item-image');


const wave = setInterval(function () {
  Array.from(servicesItemsImage).findIndex(elem => {

  })
},1000);
