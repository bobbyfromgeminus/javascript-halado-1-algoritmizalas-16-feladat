'use strict';

/*  Adott egy tetszőleges pozitív egész számokat tartalmazó tömb.
    Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat!
    Írjuk ki a 2 tömböt! */

const sampleArr = [123,3425,765,54,675,987,45,234];

function selectOddEven(arr) {
    let isOdd = [];
    let isEven = [];
    for (let i=0; i< arr.length; i +=1) {
        if (arr[i]%2 === 0) {
            isEven.push(arr[i]);
        } else {
            isOdd.push(arr[i]);
        }
    }
    return('Párosak: '+isEven+' | Páratlanok: '+isOdd);
}

console.log(selectOddEven(sampleArr));