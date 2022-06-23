/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertiseImages = document.querySelectorAll('.promo__adv img'),
      movieList = document.querySelector('.promo__interactive-list');

hideAdvertiseImages(advertiseImages); // task 1
document.querySelector('.promo__genre').textContent = 'драма'; // task 2
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'; // task 3
addSortingAndNumbering(); // task 4 & 5

function hideAdvertiseImages(imgs) {
    imgs.forEach(img => {
        img.remove();
    });
}

function addSortingAndNumbering() {
    movieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((film, index) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${index + 1}. ${film}
                <div class="delete"></div>
            </li 
        `;
    });
}


/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */