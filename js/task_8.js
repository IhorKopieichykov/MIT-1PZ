let result = document.querySelector('#result');
let arr = [];

var i = 0;
while (i < 3) {
    alert( "номер " + i + "!" );
    i++;
    arr.push("номер " + i + "!");
}

result.innerHTML = arr;