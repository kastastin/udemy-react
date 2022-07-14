const btn = document.querySelector('.btn'),
      element = document.querySelector('.box');

let position = 0;

function myAnimation() {
    position++;
    element.style.top = `${position}px`;
    element.style.left = `${position}px`;

    if (position < 300) {
        requestAnimationFrame(myAnimation);
    }

}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);