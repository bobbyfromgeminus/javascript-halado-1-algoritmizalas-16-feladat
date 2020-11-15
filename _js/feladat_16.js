'use strict';

/*  Adott két azonos elemszámú, csak egész számokat tartalmazó tömb.
    Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát.
    Írassuk ki az új tömböket! */

const sampleArr1 = [23,3425,765,54,42];
const sampleArr2 = [23,675,987,42,234];

function getSegmDiff(arr1, arr2) {
    let segm = [];
    let diff = [];
    for (let i=0; i< arr1.length; i +=1) {
        let target = arr1[i];
        for (let j=0; j< arr2.length; j +=1) {
            if (arr2[j] === target) {
                segm.push(target);
                delete arr1[i];
                delete arr2[j];
            } else {

            }
        }
    }
    diff = arr1.concat(arr2);
    return('Metszet: '+segm+' | Különbség: '+diff);
}

function getUnion(arr1, arr2) {
    return arr1.concat(arr2);
}

function getDescartes(arr1, arr2) {
    let decartes = [];
    for (let i=0; i<arr1.length; i +=1) {
        let base = arr1[i];
        for (let j=0; j< arr2.length; j +=1) {
            decartes.push(arr2[j]*base);
        }
    }
    return(decartes);
}

console.log('A két tömb uniója: '+getUnion(sampleArr1, sampleArr2));
console.log('A két tömb Decartes szorzata: '+getDescartes(sampleArr1, sampleArr2));
console.log(getSegmDiff(sampleArr1, sampleArr2));