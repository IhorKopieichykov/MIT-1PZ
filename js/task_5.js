const result = document.getElementById('result');

// Завдання №5
const answer = prompt('Яка "офіційна" назва JavaScript?', 'ECMAScript');

if (answer == 'ECMAScript') {
    result.innerHTML = 'Вірно! ECMAScript';
    alert("Вірно!");
} else {
    result.innerHTML = "Не знаєте? «ECMAScript»!";
    alert("Не знаєте? «ECMAScript»!")
}