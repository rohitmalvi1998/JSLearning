console.log("=============Step1==============");
var square =function(num){
    var squareOfNumber=num*num;
    console.log(squareOfNumber);
    console.log(typeof square);
}
square(5);
console.log("=============Step2==============");

var rectangle=function(Length, Breadth){
    var areaOfRectangle=Length*Breadth;
    console.log("Area of Rectangle = ", areaOfRectangle);
}

rectangle(499,917);
console.log("=============Step3==============");

var swappingFunction=function(a,b){
    console.log("Before Swapping :" ,"Value1 =",a,"Value2=",b);
    var temp=a;
    a=b;
    b=temp;
    console.log("After Swapping :" ,"Value1 =",a,"Value2=",b);
}
swappingFunction("Mahi","Raina");
swappingFunction(5,7);

console.log("=============Step4==============");


var stringFunction=function(value){
    console.log("The Total number if character in the string is =",value.length);
    console.log("The Character at 6th position is=", value.charAt(6));
    console.log("The Character at 11th position is=", value.charAt(11));
    console.log("The last Character of the String is is=", value.charAt(value.length-1));
    console.log("The First Character of the String is is=", value.charAt(0));
    console.log("The Third Character of the String is is=", value.charAt(3));
    var TotalWOrds=value.split(" ").length;
    var result= TotalWOrds*TotalWOrds
    console.log("The Square of the words given in the string  =",result);

}
stringFunction("JS the most popular language of internet");