// *Задача 1.
const number = 13;

if (number % 2 == 0){
    console.log("Число чётное");
}
    
else{
    console.log("Число нечётное");
}
    


// *Задача 2.
let age = 16; 
let discount = age < 18 ? 10 : (age <= 65 ? 20 : 30);
console.log(`Ваша скидка: ${discount}% `);



let userAge = 66; 
let userDiscount;

switch (true) {
  case userAge < 18:
    userDiscount = 10;
    break;
  case userAge >= 18 && age <= 65:
    userDiscount = 20;
    break;
  case userAge >= 65:
    userDiscount = 30;
    break;
  default:
    userDiscount = 0; 
}

console.log(`Ваша скидка: ${userDiscount}% `);

// *Задача 3.

// const userName = prompt("Введите Имя");
// const password = prompt("Введите пароль");

// if ((userName === "admin" || userName === "user") && password === "123456") {
//     alert("Доступ разрешен");
// } else {
//     alert("Доступ запрещен");
// }



// *Задача 4.



const weight = +prompt("Введите вес посылки(кг):");
const deliveryType = prompt("Введите тип доставки:");
if (weight <= "0" )  {
    alert("Некорректный вес посылки");
} else if (deliveryType !== "Стандарт" && deliveryType !== "Экспресс" && deliveryType !== "Премиум") {
    alert("Неверный тип доставки");
} else {
    let baseCost;
        if (weight < 1) {
            baseCost = 5;
        } else if (weight <= 5) {
            baseCost = 10;
        } else {
            baseCost = 15;
        }
   
    let coefficient;
        switch (deliveryType) {
            case "Стандарт":
                coefficient = 1;
                break;
            case "Экспресс":
                coefficient = 1.5;
                break;
            case "Премиум":
                coefficient = 2;
                break;
        }
        const totalCost = baseCost * coefficient;
        alert(`Итоговая стоимость доставки: ${totalCost}$.`);
}


