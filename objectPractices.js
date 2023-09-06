
/*
let person={

};
console.log("Before adding property to  empty",person);
person.name="Rohit Malvi"
person.age=24
person.company="INTEL"
console.log("====================After=======================================");
console.log("After adding property to  empty",person);

console.log("=============Traversing an object ==========================");
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log("Key",key,"==>","Value:",element);

        
    }
}

const student={
    name:"Rohit",
    age:24,
    education:{
        SSC:"10th",
        HSC:"12th",
        GRAD:"B.E"
    },
    greet:function(num1,num2){

console.log("Hello , i am inside object");
var result=num1*num2;
console.log(result);
}
}
student.greet(20,30)
*/

let bankSbi={
    bankName:"SBI",
    ifsc:"SBIA12345",
    mobileNumber:123456,

    //pinCode:12345

}
let bankLocation={
    street: "Laxmi Chowk",
    city:"Pune",
    pincode:121456
}

let clonedBankDetails=Object.assign({},bankSbi,bankLocation);
console.log(clonedBankDetails);




  