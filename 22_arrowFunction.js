var add=function(params) {
    console.log(2+2);
}
add();

//Arrow function syntax

let arrowfun=()=>{
     //console.log("This is arrow function");
return "This is arrow function"
}
let value=arrowfun();
console.log(value);

arrowfun();
let arrowfun2=()=>"This is arrow function"
//    console.log("This is arrow function");
arrowfun();
//console.log(value);

let multiply=(num1, num2, num3=1)=>{
    console.log(num1*num2*num3);//num3=1 it is default value 
}
multiply(5,5);


