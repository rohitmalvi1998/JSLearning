let student={
    name:"Rohit",
    age:20,
    city:"Nagpur",
    company:"TCS",
    Education:["SSC","HSC","Graduation","Post-Graduation"],
    address:{
        street:"Marunji",
        Area:"Hinjewadi",
        city:"Pune",
        state:"MH"
    }
}
console.log(student.Education[2]);
console.log(student.address);
let keyStudent=Object.keys(student)
for (const keyStudent in student) {
    if (Object.hasOwnProperty.call(student, keyStudent)) {
        const element = student[keyStudent];
        
        console.log(`StudentKey:${keyStudent} -->Value:${element}`);
        
    }
}



