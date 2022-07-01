'use strict';

// https://drive.google.com/file/d/1eTxWzmaDfN0CXHC7Dv_AE39A1GlNO1nI/view
const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth,
//       height = box.clientHeight;

// const width = box.offsetWidth,
//       height = box.offsetHeight;

const width = box.scrollWidth,
      height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style);
// console.log(style.display);

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0;
// window.scrollBy(0, 400); // from current px
// window.scrollTo(0, 400);