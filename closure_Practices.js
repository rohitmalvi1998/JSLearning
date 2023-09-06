let globalVariable="Hi i am global"
const global2="Hi i am global 2 "
function outerFunc(){
    let outerValue="Hi i am outer function"
    console.log(outerValue);
    function innerFunc(){
        let innerValue="Hi i am inner function"
        console.log(innerValue);
        console.log(outerValue);
        console.log(globalVariable);
        console.log(global2);
        
    }
    return innerFunc;
}

let inner=outerFunc()
inner();

console.log(test1);
var test1=2;
