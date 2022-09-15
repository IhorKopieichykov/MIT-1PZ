const result = document.querySelector('#result');

// Завдання №3
const userName = prompt("Введіть ім'я");


if (userName) {
    result.innerHTML = userName;
    console.log(userName);
} else {
    result.innerHTML = "Ви не ввели ім'я!";
}
