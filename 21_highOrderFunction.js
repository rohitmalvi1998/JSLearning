function greet(callback){
    console.log("Good Morning");
    callback();
    let inner =function(){
        console.log("Thank you , i am good");
    }
    return inner;

}
function inquire() {
    console.log("HOW ARE YOU");
    
}


greet(inquire)();
//Passing Function as an argument!

function greet2(name){
    return `Hi!! ${name} `;
}
  
function greet_name(greeting,message,name){
       console.log(`${greeting(name)} ${message}`);
}
  
greet_name(greet2,'Welcome To GeeksForGeeks','JavaScript');


