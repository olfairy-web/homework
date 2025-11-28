

// Создайте объект с вашим описанием

const user = {
    name: 'Olga',
    age: 28,
    isAdmin: false
}
console.log(user)


// Создайте метод объекта, который в качестве аргумента будет 
// принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const userTwo = {
    rob: {sayHello(name){
            console.log(`Hello ${name}`)
        }
    }
}
userTwo.rob.sayHello('"Robert"')


// Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
// Объявите отдельную переменную, в которой будет храниться количество простых
//  пользователей, начальное значение будет - 0. Обойдите массив пользователей 
//  и если пользователь не является админом - прибавьте к ранее созданной 
//  переменной единицу.После окончания работы цикла выведите в консоль переменную
//   с количеством простых пользователей.


const users = [
    {

        name: 'Katya',
        age: 39,
        isSimple: true,
        isAdmin: false
    },
    {

        name: 'Dandy',
        age: 45,
        isSimple: false,
        isAdmin: true
    },
    {
        name: 'Ann',
        age: 40,
        isSimple: false,
        isAdmin: true
    },
    {
        name: 'Petya',
        age: 20,
        isSimple: true,
        isAdmin: false
    },
]
let simpleUsersCount = 0
for (let i = 0; i < users.length; i++) {
    const user = users[i]
    if (!user.isAdmin) {
        simpleUsersCount++;
    }
}
console.log(`Количество простых пользователей: ${simpleUsersCount}`)
