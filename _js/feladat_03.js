'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function getAvg(arr) {
    let sumOfElements = 0;
    for (let i=0; i<arr.length-1; i +=1) {
        sumOfElements += arr[i];
    }
    let averageOfElements = sumOfElements / arr.length;
    return averageOfElements;

}

console.log('A tömb elemeinek átlaga: '+getAvg(numbersArr));