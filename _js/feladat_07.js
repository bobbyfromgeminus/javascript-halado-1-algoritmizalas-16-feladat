'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function bubbleSortDesc(arr, nth) {
    let sorted;
    do {
        sorted = false;
        for (let i=0; i< arr.length - 1; i +=1) {
            if (arr[i] < arr[i+1]) {
                const tempHolder = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tempHolder;
                sorted = true;
            }
        }
    } while (sorted);
    return(arr[nth-1]);
}

console.log('A tömb harmadik legnagyobb eleme: '+bubbleSortDesc(numbersArr, 3));