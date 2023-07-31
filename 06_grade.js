var gradeCalculation=function(marks){
    var convertMarks=+marks
    if (100>marks || marks<=0|| isNaN(convertMarks)||marks==null||marks==undefined) {
        console.log(` Your marks->${marks} is Invalid, Please enter valid marks`);
            
        
    } else {
        if (marks>=90) {
            console.log(` Fantastic Marks :${marks}, Your grade is A+`);
            
            
        } {
            if(75>=marks&& marks<90){
                console.log(` Excellent Marks :${marks}, Your grade is A`);
                

            }   
            if(50>=marks && marks<75){
                console.log(` Good Marks :${marks}, Your grade is B`);
                

            }     
            if(35>=marks && marks<50){
                console.log(` Marks is :${marks}, Your grade is C,Need Improvement`);
                

            }
        }
        
    }

}

//i=i+1
const gradeArray=[98,80,90,0,150,-7,35,29,64,49,91,"Eighty",undefined,null]
console.log(gradeArray.length-1);
for (let i = 0; i <gradeArray.length; i++) {
    gradeCalculation(gradeArray[i]);

}