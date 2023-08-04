let employeeDetails={
    empName:"Rohit",
    empNumber:123,
    dateOfJoining:"13/08/2022",
    address:{
        street:"Wakad",
        city:"Pune",
        State:"MH"

    },
    education:["SSC","HSC","Grad",true,123],
    certificates:function() {
        //console.log("Welcome to object function");
        console.log(type);
        console.log(employeeDetails.education);
            console.log(`Education : ${this.education[0]},${this.education[1]}`);        
    }
}
console.log(employeeDetails);
console.log(employeeDetails.empName);
console.log(employeeDetails.address.street);
employeeDetails.empName="Amol"
console.log(employeeDetails);
employeeDetails.isMarried="Yes"
console.log(employeeDetails);
console.log(employeeDetails.education[employeeDetails.education.length-1]);
console.log(employeeDetails.certificates());



