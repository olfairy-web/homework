// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    name: "Olga",
    age: 28,
    city: "Nsk",
    hairColor: "violet",
    profession: "Florist",
    hobby: "Knitting",
};
for (let key in person) {
    console.log(`${key}:`, person[key]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
    for (let key in object) {
    return false;
    }
    return true;
}
console.log(isEmpty({})); 
console.log(isEmpty({ name: "Carl" })); 

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const cat1 = {
    Name: "Murka",
    Color: "black",
    Gender: "female",
    sheIsHungry: true,
};

function cloneAndModify(object, modifications) {
    const clonedObject = { ...object, ...modifications };

    for (let key in clonedObject) {
        console.log(`${key}: ${clonedObject[key]}`);
    }
    return clonedObject;
}

const modifications = {
    sheIsHungry: false,
    Age: 3
};

const updatedCat = cloneAndModify(cat1, modifications);
console.log("Обновленная кошка:", updatedCat);


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);


const callAllMethods = (object) => {
    for (let key in object) {
        if (typeof object[key] === 'function') {
            object[key](); 
        }
    }
};

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

callAllMethods(myObject);


