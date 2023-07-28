var num= 23;
if (num>34) {
    console.log("Condition is true");
    
}
if (num>30) {
    console.log("num is greater than");
    
} else {
    console.log("Condition is  false  ");
    
}
function voteEligibility(age,name) {
    if(age<=0 && typeof([age]=='string'))
    {
        console.log(`${name} your age ${age } is invalid`);

    }
    if (age>=18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }

    
}
voteEligibility(18,"Shany")
voteEligibility
