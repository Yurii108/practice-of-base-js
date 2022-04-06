"use strict";

let namber0films;

function start() {
        namber0films = +prompt('Сколько фильмов вы помотрели?', '');
while (namber0films == '' || namber0films == null || isNaN(namber0films)) {
        namber0films = +prompt('Сколько фильмов вы помотрели?', '');
        }
}

start();


const personalMovieDV = {
        remembreMyFilms() {
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
        
        },
        detectPersonalLevel() {
                if (personalMovieDV.count < 10) {
                        console.log('Просмотренно довольно мало фильмов');
                } else if  (personalMovieDV.count >= 10 && personalMovieDV.count < 30) {
                        console.log('Вы класический зритель');
                } else if (personalMovieDV.count >= 30) {
                        console.log('Вы киноман');
                } else {
                        console.log('Произошла ошибка');
                }
        },
        showMyDB (hidden) {
                if (!hidden) {
                        console.log(personalMovieDV);
                }
        },
        writeYourGenres() {
                for (let i = 1; i <= 3; i++) {
                       personalMovieDV.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                } 
         },
        // count: namber0films,
        movies: {},
        actors: {},
        genres: [],
        pravet: true,
        toggleVisibleMyDB() {
                if (this.pravet === false) {
                        this.pravet = true;
                } else {
                        this.pravet = false;
                }
        }
};

// personalMovieDV.toggleVisibleMyDB();
personalMovieDV.showMyDB();

// console.log(personalMovieDV.pravet);
console.log(personalMovieDV.showMyDB);



// personalMovieDV.remembreMyFilms();


// //detectPersonalLevel();



// showMyDB(personalMovieDV.pravet);


// writeYourGenres();