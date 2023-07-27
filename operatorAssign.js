var tcsEligibility=function(gradScore,hscScore,sscScore,candidateName){
var checkEligibility=(gradScore>=70||hscScore>=80||sscScore>=90)?`Congrats ${candidateName} you are eligible for TCs Interview.`:`Congrats ${candidateName} you are not eligible for TCS Interview`;
    console.log(checkEligibility);
}
tcsEligibility(80,86,90,"Rohit");
tcsEligibility(70,55,80,"Shanaya");
tcsEligibility(55,50,60,"Ria");
//   array a[5];
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(a[i]);
    
}