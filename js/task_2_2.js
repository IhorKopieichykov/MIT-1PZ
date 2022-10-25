function sumArgs () {       
    return [].reduce.call(arguments, (prev, item) => {
        return prev + item;
    });
    
}

function applyAll (func, ...args) {
    return func.apply(this, args);
}

alert(applyAll(sumArgs, 1, 2, 3));

const result = document.querySelector('#result');
result.innerHTML = sumArgs(1, 2, 3);