const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
const newArray=arrayNumbers.map((currentValue)=>{
    return currentValue+10;
});
console.log("New Array : ",newArray);

const cubeArray=arrayNumbers.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
});
console.log("Cube Array :",cubeArray);


const newIndexArray=arrayNumbers.map((currentValue,index)=>{
    return currentValue+index;
});
console.log("New Index Array :",newIndexArray);


