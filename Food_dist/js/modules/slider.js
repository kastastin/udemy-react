function slider({container, slide, nextArrow, prevArrow, totalCounter, currCounter, wrapper, field}) {

    let offset = 0,
        slideIndex = 1;

    const slider = document.querySelector(container),
          slidesWrapper = document.querySelector(wrapper),
          slidesInner = document.querySelector(field),
          wrapperWidth = window.getComputedStyle(slidesWrapper).width,
          slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currCounter);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = wrapperWidth;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
          
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `; 
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    function moveSlide() {
        slidesInner.style.transform = `translateX(-${offset}px)`;
    }

    function addZero() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function removeActiveDots() {
        dots.forEach(dot => dot.style.opacity = '0.5');
    }

    function activateDot() {
        dots[slideIndex - 1].style.opacity = 1;
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        const width = deleteNotDigits(wrapperWidth);
        
        if (offset == width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }
        
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        
        moveSlide();
        addZero();
        removeActiveDots();
        activateDot();
    });

    prev.addEventListener('click', () => {
        const width = deleteNotDigits(wrapperWidth);

        if (offset == 0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        
        moveSlide();
        addZero();
        removeActiveDots();
        activateDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(wrapperWidth) * (slideTo - 1);

            moveSlide();
            addZero();
            removeActiveDots();
            activateDot();
        });
    });
}

export default slider;