'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function getMin(arr) {
    let actualMin = arr[0];
    for (let i=0; i<arr.length-1; i +=1) {
        if (actualMin>arr[i]) {
            actualMin = arr[i];
        }
    }
    return actualMin;

}

console.log('A tömb legkisebb eleme: '+getMin(numbersArr));