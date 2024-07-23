'use strict';
let number = prompt("Введіть ціле число:");
if (number !== null && number.trim() !== '' && Number.isInteger(Number(number))) {
    if (number > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            alert(`${number} є простим числом.`);
        } else {
            alert(`${number} не є простим числом.`);
        }
    } else {
        alert(`${number} не є простим числом.`);
    }
} else {
    alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}




