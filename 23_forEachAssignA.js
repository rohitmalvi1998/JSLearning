console.log("==================Step1==============");

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
arrayNumbers.forEach( (currentValue, index, array)=>{
    console.log(currentValue );
} ); 
console.log("==================Step 2==============");
arrayNumbers.forEach( (currentValue, index, array)=>{
    if (currentValue>0) {
        console.log(currentValue );
    }
} ); 
console.log("==================Step3==============");
var arrayNumbers2=[]
arrayNumbers.forEach( (currentValue, index, array)=>{
    if (currentValue<0) {
        
        console.log(arrayNumbers2.push(currentValue));
    }
} ); 

console.log(arrayNumbers2);
console.log("==================Step4==============");

arrayNumbers.forEach( (currentValue, index, array)=>{
   if (currentValue%2==0) {
    
       console.log("The number is even ",currentValue );
   }
} ); 

console.log("==================Step5==============");

var sum=0
arrayNumbers.forEach( (currentValue, index, array)=>{
    sum=sum+currentValue;
} ); 

console.log( "The Sum of all array element are :",sum );
console.log("==================Step6==============");

arrayNumbers.forEach( (currentValue, index, array)=>{
    if (index%2==0) {

    console.log(arrayNumbers[index]);
        
    }
} ); 
