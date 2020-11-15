'use strict';

/*  Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt,
    objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot! */

const sampleArr = [123,3425,23,false,765,54,'23',675,true,987,45,'string',23.456,234,322];
let targetNumber = 23;
let isInArray = false;

function isItInArray(arr, num) {
    let counter = 0;
    for (let i=0; i< arr.length - 1; i +=1) {
        if (arr[i] == num) {
            counter += 1;
        }
    }
    return(counter);
}

console.log('Hányszor szerepel a tömbben a 23-as szám? - '+isItInArray(sampleArr, targetNumber));