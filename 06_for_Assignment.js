var functionIncrement=function (){
    for (let i = 5; i <=15 ; i++) {
        console.log(i);
        
    }
}

var functionDecrement=function(){
    for (let j = 50; j > 40; j--){
        console.log(j);
    }
}

var function_Odd=function(){
    console.log("The First 15 odd numbers are :");
    for (let z = 0; z <30; z++) {
        if (z%2!=0) {
            console.log(`${z} is an odd number`);
            
        }
        
    }
}

var function_Even=function(){
    console.log("The First 15 even numbers are :");
    for (let z = 0; z <30; z++) {
        if (z%2==0) {
            console.log(`${z} is an Even number`);
            
        }
        
    }
}
var functionTable_1=function(){
    var n=10
    for (let q = 1; q <=n; q++) {
        console.log(5*q);
        
    }
}

var functionTable_2=function(){
    var n=10
    for (let q = 1; q <=n; q++) {
        console.log(10*q);
        
    }
}

var functionReverseTable=function(){
        
    for ( let q=100; q>=10; q=q-10) {
        console.log(q);
        
    }
}

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