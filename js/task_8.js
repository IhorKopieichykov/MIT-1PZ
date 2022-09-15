const result = document.querySelector('#result');
let arr = [];

var i = 0;
while (i < 3) {
    alert( "номер " + i + "!" );    
    arr.push("номер " + i + "!");
    i++;    
}

result.innerHTML = arr;