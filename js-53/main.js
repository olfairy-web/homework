// Задание 1.
// Дан массив пользователей:

// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
// ]
// users.push(
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
// );
// console.log(users);

// Добавьте в конец массива двух пользователей:


// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
// ]
// function sumAllAges(users){
// let sum = 0;
// for (let i = 0; i < users.length; i++){
//   sum += users[i].age;
// }
// return sum;
// }
// function getUserAverageAge(users) {
//   if (users.length === 0) {
//     return 0;
//   }
//   return sumAllAges(users) / users.length;
// }

// console.log('Средний возраст:', getUserAverageAge(users));


// const users = [
//     { name: 'Alex', age: 24, isAdmin: false },
//     { name: 'Bob', age: 13, isAdmin: false },
//     { name: 'John', age: 31, isAdmin: true },
//     { name: 'Jane', age: 20, isAdmin: false },
// ];

// function getUserAverageAge(users) {
//     if (users.length === 0) {
//     return 0;
//     }

//     let sum = 0;
//     users.forEach(user => {
//     sum += user.age;
//     });

//     return sum / users.length;
// }

// console.log('Средний возраст:', getUserAverageAge(users)); 




// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
// ]
// users.push(
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
// );


// function getAllAdmins(users) {
//   const admins = [];
//   users.forEach(user => {
//     if (user.isAdmin === true) {
//       admins.push(user);
//     }
//   });
//   return admins;
// }

// console.log('Администраторы:', getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {

if (n === undefined) {
    return arr.length > 0 ? [arr[0]] : [];
}


if (n === 0) {
    return [];
}


if (n > arr.length) {
    console.error(`Не может быть больше длины массива: ${arr.length}`);
    return arr;
}

if (n < 0) {
    return [];
}

const result = [];
let count = 0;

arr.forEach(element => {
    if (count < n) {
    result.push(element);
    count++;
    }
});

return result;
}

console.log(first([1, 2, 3, 4, 5], 3));         
console.log(first([1, 2, 3, 4, 5], 10));         
console.log(first([]));                        
console.log(first([1, 2, 3, 4, 5],undefined));                        



