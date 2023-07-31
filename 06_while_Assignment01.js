var functionIncrement=function (){
    var i=5;
    while (i<=15) {
        
        console.log(i);
        i++;
    }
    //for (let i = 5; i <=15 ; i++) {
        
    }


var functionDecrement=function(){
    var j=50;
    while (j>40) {

        console.log(j);
        j--;
     }
    // for (let j = 50; j > 40; j--){
    // }
}


 var function_Odd=function(){
     console.log("The First 15 odd numbers are :");
   var  z = 0;
//     
     while (z<30) {
        if (z%2!=0) {
           console.log(`${z} is an odd number`);
            
        }
        z++;
            }   
        }
var function_Even=function(){
    console.log("The First 15 even numbers are :");
var z=30;    
while (z <30) {
            if (z%2==0) {
             console.log(`${z} is an Even number`);
                
        
    }
         }
        
     }
 
 var functionTable_1=function(){
     var n=10
var q=1;
while (q <=n) {
    console.log(5*q);
    q++;
    
}
 }
//     for (let q = 1; q <=n; q++) {
//         console.log(5*q);
        
//     }
// }

 var functionTable_2=function(){
     var n=10;
    var q=1;
    while (q <=n) {
        
        console.log(10*q);
        q++;
    }
}

 var functionReverseTable=function(){
var q=100;
while (q>=10) {
    console.log(q);
    q=q-10;
}        
}
//     for ( let q=100; q>=10; q=q-10) {
//         console.log(q);
        
//     }
// }

functionIncrement();
console.log("=====================================");
functionDecrement();
console.log("=====================================");
function_Odd();
console.log("=====================================");
function_Even();
console.log("=====================================");
functionTable_1();
console.log("=====================================");
functionTable_2();
console.log("=====================================");

functionReverseTable();