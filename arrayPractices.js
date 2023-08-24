// let arrayPractice=[1,2,3,3,4,5]


// console.log(arrayPractice[1]);

// var element=arrayPractice.splice(1,4)
// console.log(arrayPractice);
//arrayPractice.pop() //pop out last element from array
//arrayPractice.shift()//pop out first element of the array
//arrayPractice.push(20)//push element in the  last array
//arrayPractice.unshift(70)
//let arrayP= arrayPractice.slice(2,4);
///console.log(arrayP);//push element in the  first array
//arrayPractice.slice(4)
let array2=[7,0,8,5,10];
console.log(...array2);
let length=array2.length;
 
// Splice
//array2.splice(1,0,2,3)// using this we will add the element at position 1 ->> 2 & 3.

array2.splice(1,2,2,3)// using this we have replaced the element at position 1 to 2 with 2 & 3.
//array2.splice(1,1) // using this we have deleted the element at position 1 
console.log(array2); 
// array2[0]=largest;
//  for (let i = 0; i < array2.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//     if (array2[i]>array2[j]) {
//         const temp = array2[i];
//         array2[i] = array2[j];
//         array2[j]=temp;
//     }
//     }   
// }
// console.log(array2);
//}


console.log("============Traversing array  'For In' loop=====================================");
var array3=[]
for (const value in array2) {
        const element = array2[value];
        //console.log();
        array3.push(element)
    }

console.log("Array - > 3 : " ,array3.join(" "));// join metthod returns array as string  and does not change the original
//array.The default separator is comma (,). we can also specify any separator.


    //    Iterable

    //Iterable: It is object which can be looped over or iterated over with the help  of for loop.
    //String ,array, set, map are all nuilt -in iterables because each of there iterables object implements 
    //an @iterator method.


