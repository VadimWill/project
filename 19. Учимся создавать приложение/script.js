"use strict";

let numberOfFilms = +prompt('How many muvies are you watched');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let quest1 = prompt("One of the last movies", ''),
    quest3 = +prompt("How much would you rate it?", ''),
    quest2 = prompt("One of the last movies", ''),
    quest4 = +prompt("How much would you rate it?", '');

personalMovieDB.movies[quest1] = quest3;
personalMovieDB.movies[quest2] = quest4;
// personalMovieDB.movies.quest3 = 4;
// personalMovieDB.movies.quest4 = 4;

console.log(personalMovieDB);