'use strict';

/*  Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú,
    csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe!
    Írasd ki a rendezett tömböt! */

const numbersArr = [123.23452,3425.235234,23.5234,765.324,54.574,675.345,987.234,45.124,23.456,234.567,322.85];

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

console.log('A növekvő sorrendbe rendezett tömb: '+bubbleSortAsc(numbersArr));