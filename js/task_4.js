let result = document.querySelector('#result');
let answer = "alert у такому випадку НЕ видається.";

// Завдання №4
if ("0") {
    alert('Привіт');
    answer = "alert у такому випадку видається."
}

result.innerHTML = answer;