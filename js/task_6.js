let age = prompt("Вкажіть ваш вік: ");
age = Number(age);
let result = document.querySelector('#result');

if (age) {
    if (age >= 14 && age <= 90) {
        result.innerHTML = `${age} знаходиться між 14 і 90 включно.`;
    } else if (age < 14) {
        result.innerHTML = `${age} менше 14.`;
    } else if (age > 90) {
        result.innerHTML = `${age} більше 90.`;
    } 
} else {
    result.innerHTML = "Ви ввели не число!";
}

