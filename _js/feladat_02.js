'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function getMax(arr) {
    let actualMax = arr[0];
    for (let i=0; i<arr.length-1; i +=1) {
        if (actualMax<arr[i]) {
            actualMax = arr[i];
        }
    }
    return actualMax;

}

console.log('A tömb legnagyobb eleme: '+getMax(numbersArr));