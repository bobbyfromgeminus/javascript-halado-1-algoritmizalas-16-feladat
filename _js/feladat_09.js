'use strict';

/*  Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot!
Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg! */

const numbersArr = [123,3425,765,54,675,987,45,234,322];
let targetNumber = 23;
let isInArray = false;

function bubbleSortAsc(arr) {
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
    return(arr);
}

function binarySearch(sortedArray, target){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === target) {
            isInArray = true;
            return isInArray;
        } else if (sortedArray[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return isInArray;
    
}


console.log('Szerepel a tömbben a 23-as szám (logaritmikus kereséssel)? - ' + binarySearch(bubbleSortAsc(numbersArr), targetNumber));