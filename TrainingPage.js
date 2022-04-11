'use strict';

// if (2 == 2) {
//     console.log('Ok');
// } else {
//     console.log('error');
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// let i = 0;
// while (i < 2) {
//         const a = prompt('Один из просмотренных ранее фильмов?', ''),
//               b = prompt('Насолько оцените его?', '');
//               i++; 
        
//               if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDV.movies[a] = b;
//                 console.log('done');        
//         } else {
//                 console.log('error');
//                 i--;
//         }
// } 

// let i = 0;
// do {
//         const a = prompt('Один из просмотренных ранее фильмов?', ''),
//               b = prompt('Насолько оцените его?', '');
              
        
//               if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDV.movies[a] = b;
//                 console.log('done');  
//                    i++;       
//         } else {
//                 console.log('error');
          
//         }
// }
// while (i < 2);

// const taxt = 'Hello World';

// console.log(taxt.slice(-7, -2));

// const a = prompt('Один из просмотренных ранее фильмов?', ''),
//       b = prompt('Насолько оцените его?', ''),
//       c = prompt('Один из просмотренных ранее фильмов?', ''),
//       d = prompt('Насолько оцените его?', '');

// personalMovieDV.movies[a] = b;
// personalMovieDV.movies[c] = d;
        
// console.log(personalMovieDV);

// document.querySelector(".header").innerText = "Hi Yurii";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//         }
//      } else {
//             console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         }
//     }

// let arr = [1, 2, 3, 4, 8, 6, 7];

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }


// let qvation = prompt('Як діла?');
// console.log(qvation);

// function func() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i); 
//     }

// }

// func();

// let actorss = ['masha', 'vasya', 'pety'];

// function myActorss() {
   
//     for (let isd of actorss) {
//         console.log(isd);
//     }
//     for (let i = 0; i < actorss.length; i++) {
//         console.log(actorss[i]);  
//     }
// }

// myActorss();

// function nunu(n1, n2){
//     return (n1 * n2); 
// }
// console.log(nunu(45, 4));



// let countSheep = function (num){
//     let sheeps = '';
//     for (let i = 1; i <= num; i++) {
//     sheeps += `${i} sheep... `;
//     }
//     return sheeps;
//     };

//     console.log(countSheep(10));

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

// if (10 == 10) {
//     console.log('Super!');
// } else {
//     console.log('do not super!');
// }

                // for (let i = 1; i <= 3; i++) {
                //         personalMovieDV.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                //  }

                // {
                //     const ganre = prompt(`Ваш любимый жанр под номером ${i}`);
                //     personalMovieDV.genres[i - 1] = ganre;
                //     }

                // if (personalMovieDV.genres != null && personalMovieDV.genres != '' &&) {
                //     personalMovieDV.genres[i - 1] = ganre;

                // personalMovieDV.toggleVisibleMyDB();
// // personalMovieDV.remembreMyFilms();
// // personalMovieDV.detectPersonalLevel();
// personalMovieDV.showMyDB(personalMovieDV.pravet);
// personalMovieDV.writeYourGenres();
            
// writeYourGenres: function() {
//     for (let i = 1; i <= 3; i++) {
//             const ganre = prompt(`Ваш любимый жанр под номером ${i}`);
            
//             if (ganre === '' || ganre == null) {
//             console.log('Вы ввели неправильное действия'); 
//             i--;
//             } else {
//             personalMovieDB.genres[i - 1] = ganre;
//             }
    
//     }
    
//     personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр #${i + 1} - это ${item}`);
//     });

// }

// for (let i = 1; i < 2; i++) {
//     const ganres = prompt(`Введите название фильмов через запятую`);
    
//     if (ganres === '' || ganres == null) {
//     console.log('Вы ввели неправильное действия'); 
//     i--;
//     } else {
//     personalMovieDB.genres = ganres.split(', ');
//     personalMovieDB.genres.sort();
//     }

// }