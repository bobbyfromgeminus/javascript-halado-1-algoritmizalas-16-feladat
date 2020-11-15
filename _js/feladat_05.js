'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i=0; i<arr.length-1; i +=1) {
        if (arr[i]%2===0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;

}

console.log('A tömb páros elemei: '+getEvenNumbers(numbersArr));