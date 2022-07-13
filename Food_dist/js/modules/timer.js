function timer() {

    const deadline = '2022-08-06 0:00:00';

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math. floor ((t / 1000 / 60 % 60)),
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            setCorrectDateFormat();

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

            function setCorrectDateFormat() {
                function checkDigits(size, selector, words) {
                    if (size == 1) {
                        selector.nextSibling.data = words[0];
                    } else if (size >= 2 && size <= 4) {
                        selector.nextSibling.data = words[1];
                    } else {
                        selector.nextSibling.data = words[2];
                    }
                }

                checkDigits(t.days, days, ['день', 'дня', 'дней']);
                checkDigits(t.hours, hours, ['час', 'часа', 'часов']);
                checkDigits(t.minutes, minutes, ['минута', 'минуты', 'минут']);
                checkDigits(t.seconds, seconds, ['секунда', 'секунды', 'секунд']);
            }
        }
    }

    setClock('.timer', deadline);
}

module.exports = timer;