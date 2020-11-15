'use strict';

// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

const numbersArr = [123,3425,765,54,675,987,45,234,322];

function bubbleSortAsc(arr, nth) {
    let sorted;
    do {
        sorted = false;
        for (let i=0; i< arr.length - 1; i +=1) {
            if (arr[i] > arr[i+1]) {
                const tempHolder = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tempHolder;
                sorted = true;
            }
        }
    } while (sorted);
    return(arr[nth-1]);
}

console.log('A tömb második legkisebb eleme: '+bubbleSortAsc(numbersArr, 2));