const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
let arrayLength=arrayNumbers.length;
console.log("The length of the array is =",arrayLength);
console.log("The first element of the array is = ",arrayNumbers[0]," The Last element of the array is = ",arrayNumbers[arrayLength-1]);
console.log(" The Third Last element of the array is = ",arrayNumbers[arrayLength-3]);


console.log(`----------- Log even indexed element -----------`);

for (let index = 0; index < arrayLength; index++) {

    if (index%2==0) {

        const element = arrayNumbers[index];

        console.log(element); 

    }

}

 
    console.log("The Elements at Odd position are : ");
for (let i = 0; i < arrayLength; i++) {
    if (i%2!=0) {
        console.log(arrayNumbers[i]);
    }
     
    }



console.log("=====The Sum of  elements at even position are====");
let sumEven=0;
for (let i = 0; i < arrayLength; i++) {
    if (i%2==0) {

    sumEven=sumEven+arrayNumbers[i] ;
    }

    }    console.log("The Sum of  elements at even position are : " , sumEven);

console.log("=====The  Sum of the Elements at Odd position are===");
sumOdd=0;
for (let i = 0; i < arrayLength; i++) {

    if (i%2!=0) {
        sumOdd=sumOdd+arrayNumbers[i];
    }
}
console.log("The Sum of  elements at even position are : " , sumOdd);

    console.log("=========The Sum of  all the array elements=========");
    let sumArray=0;
    for (let i = 0; i < arrayLength; i++) {
        sumArray=sumArray+arrayNumbers[i] ;
        }
    console.log("The Sum of  elements at even position are : " , sumArray);
    
console.log("====The element which are multiple of 5 ==================================");
for (let index = 0; index < arrayLength; index++) {
    if (arrayNumbers[index]%5==0) {
        console.log(arrayNumbers[index]);
        
    }
    
}
console.log("=========================================================================");
let numberAvailable=arrayNumbers.includes(115)
console.log("Is number 115 available :" , numberAvailable);

console.log("=========================================================================");
let numberAvailable2=arrayNumbers.includes(23)
console.log("Is number 23 available :" , numberAvailable2);

console.log("================Array after adding 55 and 66 before 3 position=================");
arrayNumbers.splice(3,0,55,66);
console.log("Array after adding 55 and 66 before 3 position",arrayNumbers);

console.log("==============Array after removing the element from 4 th positon=========================");
  arrayNumbers.splice(4,3)
 console.log(arrayNumbers);

