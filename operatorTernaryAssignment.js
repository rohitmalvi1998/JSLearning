function maleMarriageEligibility(gender,age,boyName)
{
    var eligibleMale=(gender==="Male" &&age>=21)?`Hey ${boyName} you are eligible for Marriage`: `Hey ${boyName} you are not eligible for Marriage`;
    // console.log(eligibleMale);
    return eligibleMale;
}

function femaleMarriageEligibility(gender,age,girlName)
{
    var eligibleFemale=(gender==="Female" &&age>=21)?`Hey ${girlName} you are eligible for Marriage`: `Hey ${girlName} you are not eligible for Marriage`;
    // console.log(eligibleMale);
    return eligibleFemale;
}
console.log("=====Step1========");

var male1 =maleMarriageEligibility("Male",22,"Bill Gates");
 var male2=maleMarriageEligibility("Male",17,"Steve jobs");

 console.log(male1);
 console.log(male2);

 console.log("=====Step2========");


var female1=femaleMarriageEligibility("Female",17,"Jenifer");
var female2=femaleMarriageEligibility("Female",17,"Stephie");
console.log(female1);
 console.log(female2);
