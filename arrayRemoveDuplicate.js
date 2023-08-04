// let array=[4,5,6,4,5,8,5,7,8,9,7,8];
// console.log("Original Array",array);
// let uniqueArr = [];
    
//     // loop through array
//     for(let i of array) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);

// let a=[4,5,6,4,5,8,5,7,8,9,7,8];
// let b=[]
// for(i=0;i<a.length;i++){
//     for(j=0;j<b.length+1;j++){
//         if(b.includes(a[i])){
            

//             continue;
//         }
//         else{
//             b.push(a[i])

//         }

//     }
// }
// console.log(b);

let a=[4,5,6,4,5,8,5,7,8,9,7,8];
let b=[]
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length+1; j++) {

        if (b.includes(a[i])) {

            continue;
            
        }
        
        else{
            b.push(a[i])
        }
        
    }
    
}
console.log(b);