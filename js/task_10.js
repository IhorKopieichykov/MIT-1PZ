let result = document.querySelector('#result');
let arr = [];

function min(a, b) {
    if (a < b){
        return a;
    } else {
        return b;
    }
}

arr.push(min(2, 5) == 2);
arr.push(min(3, -1) == -1);
arr.push(min(1, 1) == 1);

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

result.innerHTML = arr;

