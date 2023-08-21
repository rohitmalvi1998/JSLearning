// 1.Object Destructuring
let student={
    fullName:'Rohit Malvi',
    age:24,
    company:"Tcs",
    city:"Pune"

}
let city=student.city
let company=student.company
const {age,pin}=student
console.log(age, pin);
let{FullName,date=21}=student
console.log(FullName, date);



console.log(company);
console.log(city);
console.log('test');



// 2.Array Destructuring

var arr=[2,4,5,6,7,80]
let [num1, num2]=arr
console.log(num1,num2);
//arr.splice(2,2)
//console.log(arr);