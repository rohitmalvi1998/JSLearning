var marriageEligibility=function (gender,age) {
    if (gender==null|| gender==undefined || age==undefined ||age==null) {
        console.log("Please enter a valid age or gender");
        
    } else {
        if (gender=="Male" && age>=21) {
            console.log(`Gender :${gender}-->You are eligible for marriage`);
            
        } else {
            if (gender=="Female" && age>=18) {
                console.log(` Gender :${gender}-->You are eligible for marriage`);
                
            }
            else{
                console.log(` Gender :${gender}-->You are not eligible for marriage`);
            }
            
        }
        
    }
    
}

marriageEligibility("Male",17);

marriageEligibility("Male",25);

marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);