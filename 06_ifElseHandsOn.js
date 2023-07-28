var checkvalue=function(num1){
    if (num1%2==0) {

        console.log(`The number ${num1} is an even number`);
    }
    else{
        console.log(`The number ${num1} is an odd number`);
    }
}

var checkVoteEligibility=function(age){
    if (age>=18) {
        console.log(`You are eligible to vote`); 
        
    } else {
        console.log(`You are not eligible to vote`);
        
    }

}



var stringCheck=function(stringValue) {
    var result=stringValue.length;
    if (result>10) {
        console.log(`String contains more than 10 ten character`);
        
    } else {
        console.log(`String contains does not contain more than 10 ten character`);
        
    }
    
}

var stringCheck2=function(stringValue2) {
    if (stringValue2.includes(("java")==true)) {
        console.log(`Yes 'Java ' is available in the string ${stringValue2}`);
        
    } else {
        console.log(` 'Java ' is not available in the string ${stringValue2}`);
    }
}
console.log("=====================Step1=================");
const numbervalue=[45,55,70,89,65];
for(i=0 ;i<5;i++){

    checkvalue(numbervalue[i]);
}

console.log("=====================Step2=================");

const voteValue=[18,20,17,40];
for(j=0 ;j<5;j++)
{
    
    checkVoteEligibility(voteValue[j]);
}

console.log("=====================Step3=================");

stringCheck("JavaScript -ES6");

console.log("=====================Step4=================");

stringCheck2("JavaScript Language");
