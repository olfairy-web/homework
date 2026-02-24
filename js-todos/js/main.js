"use strict"

// создаем пустой по умолчанию массив

// внутри ф-ции нужно будет создавать обьект и добавлять в массив todos, а из ф-ции createtodo возвращать обьект который создали


const todoKeys = {
    // исп ключи чтобы в значении можно было менять записи и названия("")
    id: "ID",
    text: "Description",
    is_completed: "is_completed",
};

 
const todos = [];

// ф-я для ошибки чтобы сократить код
const errTodoNotFound = todoId => `Todo with id ${todoId} is not found`;

// создаем ф-ю которая будет брать самый максимальный id из ф и возвращать на 1 больше. значение по умолчанию 0. maxId-аккумулятор, (нумерованный список)
const getNewTodoId = todos => 
    todos.reduce((maxId, todo)=> Math.max(maxId, todo[todoKeys.id]), 0) +1;

const createTodo = (todos, text) =>{
const newTodo = 
{ 
    [todoKeys.id]: getNewTodoId(todos), 
   [todoKeys.text]: text, 
    [todoKeys.is_completed]: false
};

todos.push (newTodo);
return newTodo;
} ;
// createTodo(todos, "Задача 1");
// createTodo(todos, "Задача 2");
// createTodo(todos, "Задача 3");
// console.log(todos);

// ф-я выполнения задачи

const completeTodoById = (todos , todoId) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId);
    if (todo === undefined){
        console.error (errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    // console.log(todo);
    return todo;
}
// completeTodoById()

// удаление задачи по id
const deleteTodoById = (todos , todoId) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
     if (todoIndex === -1){
        console.error (errTodoNotFound(todoId));
        return todos;
    }
    // если элемент по индексу найден то удаляем его из массива
    todos.splice(todoIndex, 1);
    return todos;
};



// фильтр по статусу false/true
const getTodosByStatus = (todos, isCompleted) => 
    todos.filter(todo => todo[todoKeys.is_completed] === isCompleted);

// редактирование задач
const updateTodoText = (todos, todoId, newText) => {
    if (!newText || newText.trim() === '') {
        console.error('Text cannot be empty');
        return null;
    }
    const todo = todos.find(todo => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.text] = newText.trim();
    console.log(`Task #${todoId} updated`);
    return todo;
};




