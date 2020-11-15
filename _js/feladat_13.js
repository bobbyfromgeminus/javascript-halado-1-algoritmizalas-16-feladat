'use strict';

/*  Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb.
    A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg).
    A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
    Írasd ki a rendezett tömböt! */

const sampleArr = [123,3425,765,54,675,987,45,234,322];

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


function pushToArr(arr) {
    const inputNumber = parseInt(prompt('Adj meg egy számot!'), 10);
    arr.push(inputNumber);
    return(bubbleSortAsc(arr));
}

console.log('Az egy számmal bővített és növekvő sorrendbe rendezett tömb: '+pushToArr(sampleArr));