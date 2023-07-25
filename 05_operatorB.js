var greaterNumber=function(num1,num2){
    if (num1>num2) {
        console.log(num1," is greater");
        
    }
    else{
        console.log(num2," is greater");
    }
    
}
greaterNumber(30,20);

var numberType=function(value1){
    if (value1%2==0) {
    console.log(`The number: ${value1} is even number`);        
    }
    else
    console.log(`The number: ${value1} is an odd number`);
}
numberType(97);
console.log("===========Step3=========");

var stringLengthType=function(stringValue){
    var wordLength=stringValue.length;
    // console.log(stringLengthValue);
    if (wordLength%2==0) {
        var wordLengthType="Even"
        return wordLengthType ;
        // console.log(`The length of the  string "${stringValue}" is even`);
        
    }
    else{
        var wordLengthType="Odd"
        return wordLengthType ;
        
        // console.log(`The length  of the string "${stringValue}" is odd`);
    }


}
console.log(`The length of the  string "JavaScript" is ${stringLengthType("Javascript")}`);
console.log(`The length of the  string "Developer" is ${stringLengthType("Developer")}`);
console.log(`The length of the  string "Google" is ${stringLengthType("Google")}`);
// stringLengthType("Developer");
// stringLengthType("Google");