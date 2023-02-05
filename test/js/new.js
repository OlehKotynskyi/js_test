"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   mavies: {},
   actors: {},
   genres: [],
   privat: false,
};

const a = prompt('Один из последних фильмов?', ''),
   b = prompt('На сколько оцените его?', ''),
   c = prompt('Один из последних фильмов?', ''),
   d = prompt('На сколько оцените его?', '');

personalMovieDB.mavies[a] = b;
personalMovieDB.mavies[c] = d;

console.log(personalMovieDB);