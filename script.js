"use strict";

const namber0films = +prompt('Сколько фильмов вы помотрели?', '');

const personalMovieDV = {
        count: namber0films,
        movies: {},
        actors: {},
        genres: [],
        pravet: false
};

const a = prompt('Один из просмотренных ранее фильмов?', ''),
      b = prompt('Насолько оцените его?', ''),
      c = prompt('Один из просмотренных ранее фильмов?', ''),
      d = prompt('Насолько оцените его?', '');

personalMovieDV.movies[a] = b;
personalMovieDV.movies[c] = d;

console.log(personalMovieDV);
