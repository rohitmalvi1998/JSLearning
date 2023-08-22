//In js we call funstion as first class citizen
//1.Functionexpression
//2.callback
//3.function can return another function

function show(){
    console.log("inside show function");
var innerfunction=function(){
    console.log("inside inner function");
}
}

var inner= show();
inner();
//show()();