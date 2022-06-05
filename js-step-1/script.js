"use strict";

const numberOfFilms = +prompt("How many films have you already watched?", "5");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Watched quite a few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a cinephile");
} else {
    console.log("Something went wrong!");
}

console.log(personalMovieDB);


/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/