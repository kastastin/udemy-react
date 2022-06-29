// setTimeout(function() {
//     console.log('hello');
// }, 2000);

// const timerId = setTimeout(function() {
//     console.log('hello');
// }, 2000);

// clearInterval(timerId);

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello');

// function logger() {
//     console.log('logger');
// }

// const timerId = setTimeout(logger, 2000);


// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // timeId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('logger');
//     i++;
// }


// let timerId = setTimeout(function log() {
//     console.log('log');
//     timerId = setTimeout(log, 500);
// }, 500);


// Animation
const btn = document.querySelector('.btn');

function myAnimation() {
    let position = 0;
    const element = document.querySelector('.box'),
          id = setInterval(frame, 10);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = `${position}px`;
            element.style.left = `${position}px`;
        }
    }
}

btn.addEventListener('click', myAnimation);