"use strict";

// Just animate the logo
const initSlide2 = function(){
  anime({
    targets: '#img-fini',
    scale: 1.2,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });
};