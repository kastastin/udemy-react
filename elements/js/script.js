'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';
const boxWidth = 500;
box.style.cssText = `background-color: blue; width: ${boxWidth}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'),
      text = document.createTextNode('text node');

div.classList.add('black');
document.body.append(div);
// wrapper.appendChild(div);
// document.querySelector('.wrapper').append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[0]);
// hearts[0].after(div);


// circles[0].remove();
// wrapper.removeChild(hearts[0]);
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.textContent = 'Hi';
div.innerHTML = '<h1>Hello World!</h1>';
// div.insertAdjacentHTML('beforebegin', '<h2>tag h2</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>tag h2</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>tag h2</h2>');
// div.insertAdjacentHTML('afterend', '<h2>tag h2</h2>');