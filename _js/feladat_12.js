'use strict';

/*  Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb,
    és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe!
    A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe.
    Írasd ki a rendezett tömböt! */

const sampleArr = [123,3425,23,false,765,54,'23',675,true,987,45,'string',23.456,234,322];
const numbersArr = [];
const nanArr = []

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

function getTypeOfElement(arr) {
    for (let i=0; i<arr.length-1; i += 1) {
        if (typeof arr[i] === 'number' || typeof arr[i] === 'float') {
            numbersArr.push(arr[i]);
        }
        else {
            nanArr.push(arr[i]);
        }
    }
    return(bubbleSortAsc(numbersArr).concat(nanArr));

}

console.log('A növekvő sorrendbe rendezett tömb: '+getTypeOfElement(sampleArr));