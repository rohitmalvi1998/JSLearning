var voteEligible=function(age){

    if (130>=age<0  || age==undefined ||age==null) {
        console.log(` Your age->${age} is invalid , Please enter an valid age`);
        
        
    } else {
        if (age>=18) {
            console.log(` Your age->${age} is valid, and you are eligible for voting`);
            
        } else {
            console.log(` Your age->${age} is valid, but you are not eligible for voting`);
            
        }
        
    }
}
const ageValue=[45,17,8,90,20,-10,200,0,undefined,null];
for (let i = 0; i < ageValue.length; i++) {
    voteEligible(ageValue[i]);
}