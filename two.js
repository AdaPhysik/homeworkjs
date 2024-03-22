//  Работа с инструкциями if() else

// let a = -3 ;
// if (a > 0 ) {
//     console.log("Верно");
// } else if (a <= 0) {
//     console.log("Неверно");
// } else {
//     console.log("Неверно")
// }

// let a = -3 ;
// if (a < 0 ) {
//     console.log("Верно");
// } else if (a >= 0) {
//     console.log("Неверно");
// } else {
//     console.log("Неверно")
// }   

// let a = 0 ;
// if (a => 0 ) {
//     console.log("Верно");
// } else if (a > 0) {
//     console.log("Неверно");
// } else {
//     console.log("Неверно")
// }   
// let a = 0 ;
// if (a != 0 ) {
//     console.log("Верно");
// } else if (a == 0) {
//     console.log("Неверно");
// } else {
//     console.log("Неверно")
// }   


// Работа с логическими переменными

// let test=true;  
// console.log((test)?'Верно':'Неверно');

// if (test){
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let test = false ;
// if ( test ) {
//     console.log("Верно");
// } else if (a != 0) {
//     console.log("Неверно");
// } else {
//     console.log("Неверно")
// }   
// через тернарный оператор тоже можно вывести
// const a = "test";
// a === "test" ? console.log("Верно") : console.log("Неверно");





// Работа с && ||

// let a = 3;
// if (a > 0 && a<5){
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let a = -3;
// if (a === 0 || a===2){
//     a +=7;
//     console.log(a);
// } else {
//     a /=10;
//     console.log(a);
// }

// let a = 5;
// let b = 2;
// if (a <= 1 || b >= 3){
//     console.log(a+b);
// } else {
//     console.log(a-b);
// }

// let a = 56;
// let b = 8;
// if (a > 2 && a < 11 || b >=6 && b <=14 ) {
//     console.log ("Верно");
// } else {
//     console.log("Неверно");
// }

// Циклы while and for
// let i = 1;
// while(i<101) {
//     console.log(i);
//     i++;

// }

// for (let i=1; i<101;i++) {
//     console.log(i);
// }

// for (let i=11; i<34;i++) {
//     console.log(i);
// }

//  let i = 11;
//  while(i<34) {
//      console.log(i);
//      i++;

//  }

//  for (let i = 1; i<=100; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
//  }

//  let i = 1;
//  while(i<=100) {
//     if (i % 2 ==  0) {
//         console.log(i);
//     }
//     i++;
//  }

// let sum = 1;
// for( let i = 1; i<=100; i++) {
//     sum +=i;
//     console.log(sum);
// }

// ******* let result = 1; 
// while(i <= 100) {
//     i++;
//     result +=i;
// }
// console.log(result);


// На switch- case

// let num = 5;

// switch (num) {
//     case 1:
//         console.log('Зима');
//         break;

//     case 2:
//         console.log('Весна');
//         break;
//     case 3:
//         console.log('Лето');
//         break;

//     case 4:
//         console.log('Осень');
//         break;

//     default:
//         console.log('Ой-ой-йо-йо')
// }


//  ОБЩИЕ ЗАДАЧКИ

// 1

// let day = 15;
// if(day>0 && day<=10) {
//     console.log('Первая декада');
// } else if (day >10 && day <=20) {
//     console.log('Вторая декада');
// } else {
//     console.log('Третья декада');
// }


//2

// let month = 12;

// month %=12; //вот  это условие помогает учесть декабрь

// if(month >= 0 && month <= 2) {
//     console.log('Зимушка');
// } else if (month >= 3 && month <= 5) {
//     console.log('Вёсна');
// } else if (month >= 6 && month <= 8) {
//     console.log('Лето');
// } else {
//     console.log('Осень')
// }


//3 

// let string = 'abcde';
// res = (string[0]=== 'a') ? console.log("Да") : console.log("Нет");

// 4

// let string = '12345';
// res = (string[0] === '1' || string[0] === '2' || string[0] === '3' ) ? console.log("Да") : console.log("Нет");


//5   почему-то пока что не получается,но есть ощущение,что точно надо делать через 
// цикл for  и скорее всего через массивы будет решение

for (let i = 0; i < (string);i++ ){
    sum +=(int);
    string[i]
}

