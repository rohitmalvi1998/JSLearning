let professor={
    professorName:"Suresh",
    professorAge:40,
    dateOfBirth:"12/09/1988",
    branch:"CSE",
    IsMarried:"Yes",
    degrees:{
        engineering:"CSE",
        PHD:"ADV Computing",
        MS:"Cloud Computing"
    },
    certificates:["Hacker Rank Participation","Certificates in IFE course", "Certificates in Adv Programming"],

    teacherDegrees:function () {
        console.log(`The Degrees of Professor : ${this.degrees.engineering}, ${this.degrees.PHD}, ${this.degrees.MS}`);
        
    }


}



professor.teacherDegrees()
professor.totalExperience="14 years"
console.log("The professor object after adding new property :",professor);
professor.certificates.push("LeetCode Participation")
console.log("Object after  adding new certificate :",professor);
professor.certificates.push("Oracle Certified")
console.log("The last element of the certificate array is :", professor.certificates[professor.certificates.length-1]);
