"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you already watched?", "5");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you already watched?", "5");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const filmName = prompt("Write one of the last movies you watched", ""),
              filmRate = prompt("How much would you rate it?", "");
        
        if (filmName != null && filmRate != null && 
            filmName != "" && filmRate != "" && filmName.length < 50) {
            personalMovieDB.movies[filmName] = filmRate;
            console.log("Done!");
        } else {
            console.log("Error!");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Watched quite a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic spectator");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a cinephile");
    } else {
        console.log("Something went wrong!");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genre is number ${i + 1}`);
    }
}

writeYourGenres();

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */