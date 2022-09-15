const result = document.querySelector("#result");
let arr = [];

for (let i = 2; i <= 10; i++) {
    if (!(i % 2)) {
        console.log(i);
        arr.push(i);
    }    
}
result.innerHTML = arr;
console.log(arr);