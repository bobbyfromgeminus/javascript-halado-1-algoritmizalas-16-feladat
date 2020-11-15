'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function getSum(arr) {
    let sumOfElements = 0;
    for (let i=0; i<arr.length-1; i +=1) {
        sumOfElements += arr[i];
    }
    return sumOfElements;

}

console.log('A tömb elemeinek összege: '+getSum(numbersArr));