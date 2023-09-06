const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
const greatestArray=arrayNumbers.filter((number)=>{
    return number>50;

});
console.log(" Greatest Array : ",greatestArray);

const evenArray=arrayNumbers.filter((number)=>{
    return number%2==0;

});
console.log("Even Array : ",evenArray);


const oddArray=arrayNumbers.filter((number)=>{
    return number%2!=0;

});
console.log("odd Array :",oddArray);

const multipleOfFiveArray=arrayNumbers.filter((number)=>{
    return number%5==0;

});
console.log("Multiple Of Five Array :",multipleOfFiveArray);

const numberBetweenArray=arrayNumbers.filter((number)=>{
    return number>20 && number<50;
    //20<number

});
console.log("Number Between Array :",numberBetweenArray);


