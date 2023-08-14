/*
//Variable

var test;//Variable declaration.
test=12;// variable intialization
var test2="String";//variable declaration and intialization
var fullName;
fullName="Rohit Malvi";
console.log(fullName);
console.log("=======After Updation===========");
fullName="Rohit Manoj Malvi";
console.log(fullName);
var num=10;
var stringName="Rohit Malvi";
var booleanValue=true;
console.log("typeof ",typeof booleanValue,"type of :" ,typeof stringName,"type of : ",  typeof num);

var num1=10;
var num2=20;
var temp;
temp=num1;
num1=num2;
num2=temp
console.log("num1: ",num1, "num2:" ,num2);
*/

// var abhi;
// console.log(abhi);

let variable=(function(){

    console.log("This is Anonymous Function")
}
)
variable();

/*

Function: It is piece of code which is used to perform particular task or action.
* It is user for readability of he code.
* It helps for reusability of the code. 
Syntax:

function name(params) {
    
}
*/
/*
{

    // Block where we write the piece of code

}
*/

//String 
/*
String : It is a sequence of characters.
Its index starts from o and the last index of the string is "string.length -1 ".
*/ 
var var1="Test"
let varLength=var1.length
console.log(`The String is --> ${var1}`);
console.log(`The length of String  --> ${varLength}`);
//how to fetch string data
console.log( `The First Value of the string is -->  ${var1[0]}`);
console.log(`The Last Value of the string is -->  ${var1[var1.length-1]}`);

//How to traverse the string 
let var2=" How are you "
console.log("Before StartTrim ",var2.length);
let trimVar=var2.trimStart()
console.log("After StartTrim",trimVar.length);
for (let i = 0; i < var2.length; i++) {
   console.log(var2[i], end=" ");
    
}
var var3=  new String("Rohit")// another way to declare and initialize an string
console.log(var2.concat(" ").concat(var3));

console.log(var2.charCodeAt(1));
//console.log(9>8>7);
 console.log(var2.charAt(4));