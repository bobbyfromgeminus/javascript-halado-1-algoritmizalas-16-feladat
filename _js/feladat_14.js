'use strict';

/*  Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben.
    Rendezzük úgy a tömböt, hogy minden szám után egy string következzen!
    Írasd ki a rendezett tömböt! */

const sampleArr = [123,3425,765,54,675,987,45,234,'Enterprise','Stargazer','Hood','Reliant','Defiant','Excelsior','Voyager','Botany Bay'];

function mergeArrays(arr) {
    const newArr = [];
    let isNumbers = [];
    let notNumbers = [];
    for (let i=0; i< arr.length - 1; i +=1) {
        if (typeof arr[i] === 'number') {
            isNumbers.push(arr[i]);
        } else {
            notNumbers.push(arr[i]);
        }
    }
    const arrLength = arr.length / 2;
    for (let i = 0; i < arrLength; i += 1) {
        newArr.push(isNumbers[i]);
        newArr.push(notNumbers[i]);
    }
    return(newArr);
}

console.log('Vegyes tömb rendezése (egy szám és egy string): '+mergeArrays(sampleArr));