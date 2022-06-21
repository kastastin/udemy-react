"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you already watched?", "5");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already watched?", "5");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const filmName = prompt("Write one of the last movies you watched", ""),
                  filmRate = prompt("How much would you rate it?", "");
            
            if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
                personalMovieDB.movies[filmName] = filmRate;
                console.log("Done!");
            } else {
                console.log("Error!");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Watched quite a few films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic spectator");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are a cinephile");
        } else {
            console.log("Something went wrong!");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
            let genres = prompt("Enter your favorite genres separated by commas").toLowerCase();

            if (genres === '' || genres === null) {
                console.log('You entered incorrect data or did not enter it at all');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Favorite genre ${index + 1} - is ${item}`);
        });
    }
};

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/