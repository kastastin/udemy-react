'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // 2
// console.log(btns[0].classList.item(0)); // blue
// console.log(btns[0].classList.item(1)); // some

// btns[0].classList.toggle('blue');
// btns[0].classList.remove('blue');
// btns[0].classList.add('red');
// btns[0].classList.add('red', 'some');

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});


wrapper.addEventListener('click', (e) => {
    // if (e.target && e.target.matches('button.red')) {
    if (e.target && e.target.tagName == 'BUTTON') {
        console.log('ok');
    }
});

const newBtn = document.createElement('button');
newBtn.classList.add('red');
wrapper.append(newBtn);