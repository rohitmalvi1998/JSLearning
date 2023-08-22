console.log("=====================Step1===============================");

let arrowFunction=()=>{
    console.log("Good Morning,Today is Tuesday");

}
arrowFunction();
console.log("=====================Step2===============================");


let multiplication=(num1,num2,num3=1)=>{
    var result=num1*num2*num3
    console.log(`The Product of three number (${num1}, ${num2}, ${num3}) = ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log("=====================Step3===============================");
let addition= (parm1,parm2,parm3,parm4,parm5)=>// used spread operator to copy the all the values which were passed when addition function  was called
{
    return parm1+parm2+parm3+parm4+parm5;
}

console.log("The addition of the 5 number :",addition(100,100,200,349,756))

console.log("The Concatenation of string :" ,addition("I am ","learning ","ES6 ", "features ","in depth"));

