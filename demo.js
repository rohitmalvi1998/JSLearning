const array = [ "Rohita", "Ashutosh", "Deepak", "Vishwa" ]
// var counter=0;
// for (const element of array) {
//    let str= element.toUpperCase()

//    for (const chr of str) {
//     if (chr=="A") {
//         counter=counter+1;
//     }
    
//    }
   
// }
// console.log(counter);
array.forEach(element => {
console.log("Array :",element);    
});
var count=0 
for (const element of array) {
    var value=element
    for (const chr of value) {
        if (chr == 'a' ||chr=='A') {
            
            count=count+1
        }    
    }
}
console.log(count);

// var str="hee"
// str.
