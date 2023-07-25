console.log("==============Step1=============");

function squareOfWordLength(argu){
var result=argu.length
var squareOfWordLength=result*result;
console.log(`The square of the length of the string is= ${squareOfWordLength}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log("==============Step2=============");
var stringFE=function(arg2){

    var stringLength=arg2.length;
    var totalNumberOfWords=arg2.split(" ").length;
    console.log(`The length of the string is= ${stringLength} and the Total number of words in the string is = ${totalNumberOfWords}`);

    console.log(` The Division of the string length and the total numbers of words in strings is = ${stringLength/totalNumberOfWords}`);
    console.log("The product of the string length and total words in string =" ,stringLength*totalNumberOfWords);

}
stringFE("I am Angular Developer")








