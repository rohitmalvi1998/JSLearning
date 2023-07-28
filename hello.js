/*console.log("hello world");
var salary=null;

console.log(typeof(salary));
var num1="2";
console.log(typeof(num1));
va r result =num1 ++  
console.log("value",result, typeof(result));
*/
function check(age,name){

    //var Eligibility="Uk";
    var ageResult=+age
    console.log(ageResult);
    //var ageValue= +age 
    if (isNaN(ageResult)) {
        console.log("invalid"); 
        
    }
    else{
        console.log("valid");
    
    }

}    


check("UK","Rohnnit");
check("30","rohit")
