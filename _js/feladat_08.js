'use strict';

/*  Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük,
    hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést! */

const numbersArr = [123,'23',3425,true,765,54,675,987,45,234,322];

function isItInArray(arr, num) {
    let inArray = false;
    for (let i=0; i< arr.length - 1; i +=1) {
        if (arr[i] == num) {
            inArray = true;
        }
    }
    return(inArray);
}

console.log('Szerepel a tömbben a 23-as szám? - '+isItInArray(numbersArr, 23));