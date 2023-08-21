

function add(num1, num2, ...num){
    // console.log(num);
    // console.log(`num1 : ${num1}  , num2 : ${num2} `);
    // console.log("Length of array",num.length);
var restArray=num
console.log("Rest Array parameter",restArray);
var sum=0;
for (let i = 0; i < restArray.length; i++) {
    const element = restArray[i];
    sum=sum+element
    
}
console.log("The addition of the Rest Parameter Value :", sum);
}
add(5,60);
add(3,5,60,3,4,5,6);
add(1,2,3,4);