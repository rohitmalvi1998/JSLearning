let array=[4,5,6,4,5,8,5,7,8,9,7,8];
console.log("Original Array",array);
let uniqueArr = [];
    
    // loop through array
    for(let i of array) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
