const age = prompt("Вкажіть ваш вік: ");
age = Number(age);
const result = document.querySelector('#result');
let answer = '';

if (age) {
    if (age >= 14 && age <= 90) {        
        answer = `${age} знаходиться між 14 і 90 включно.`;
    } else if (age < 14) {
        answer = `${age} менше 14.`;
    } else if (age > 90) {
        answer = `${age} більше 90.`;
    } 
} else {
    answer = "Ви ввели не число!";
}
result.innerHTML = answer;
console.log(answer);
