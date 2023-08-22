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