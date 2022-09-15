const result = document.querySelector('#result');

const browser = prompt('Який у вас браузер?', 'Chrome');

// switch (browser) {
//     case 'IE':
//         alert('О, та у вас IE!'); 
//         result.innerHTML = 'О, та у вас IE!';
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Так, і ці браузери ми підтримуємо'); 
//         result.innerHTML = 'Так, і ці браузери ми підтримуємо';
//         break;
//     default:
//         alert('Ми сподіваємося, що і в вашому браузері все ок!');
//         result.innerHTML = 'Ми сподіваємося, що і в вашому браузері все ок!';
// }

if (browser == 'IE') {
    alert('О, та у вас IE!'); 
    result.innerHTML = 'О, та у вас IE!';
} else if (browser == 'Chrome' || browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera') {
    alert('Так, і ці браузери ми підтримуємо'); 
    result.innerHTML = 'Так, і ці браузери ми підтримуємо';
} else {
    alert('Ми сподіваємося, що і в вашому браузері все ок!');
    result.innerHTML = 'Ми сподіваємося, що і в вашому браузері все ок!';
}


    