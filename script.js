"use strict";

const namber0films = +prompt('Сколько фильмов вы помотрели?', '');

const personalMovieDV = {
        count: namber0films,
        movies: {},
        actors: {},
        genres: [],
        pravet: false
};

for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных ранее фильмов?', ''),
              b = prompt('Насолько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDV.movies[a] = b; 
                console.log('done');
        } else {
                console.log('error');
                i--;
        } 
}

if (personalMovieDV.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
} else if  (personalMovieDV.count >= 10 && personalMovieDV.count < 30) {
        console.log('Вы класический зритель');
} else if (personalMovieDV.count >= 30) {
        console.log('Вы киноман');
} else {
        console.log('Произошла ошибка');
}

console.log(personalMovieDV);
const a = prompt('Один из просмотренных ранее фильмов?', ''),
      b = prompt('Насолько оцените его?', ''),
      c = prompt('Один из просмотренных ранее фильмов?', ''),
      d = prompt('Насолько оцените его?', '');

personalMovieDV.movies[a] = b;
personalMovieDV.movies[c] = d;

console.log(personalMovieDV);
