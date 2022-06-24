'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const form = document.querySelector('form.add'),
          addingInput = form.querySelector('.adding__input'),
          checkbox = form.querySelector('[type="checkbox"]'),
          movieList = document.querySelector('.promo__interactive-list'),
          genre = document.querySelector('.promo__genre'),
          poster = document.querySelector('.promo__bg'),
          advertiseImages = document.querySelectorAll('.promo__adv img');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isFavorite = checkbox.checked;
        let newFilm = addingInput.value;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (isFavorite) {
                console.log('Adding favorite film');
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    function sortArray(array) {
        array.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArray(films);

        films.forEach((film, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(index, 1);
                createMovieList(films, parent);
            });
        });
    }


    
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

    const deleteAdvertiseImages = (imgs) => {
        imgs.forEach(img => {
            img.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    deleteAdvertiseImages(advertiseImages);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});


/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */