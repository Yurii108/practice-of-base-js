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



let countSheep = function (num){
    let sheeps = '';
    for (let i = 1; i <= num; i++) {
    sheeps += `${i} sheep... `;
    }
    return sheeps;
    };

    console.log(countSheep(10));