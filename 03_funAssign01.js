function display(){
    console.log("Function with no argument and no return");
}
function helloProgram(){
    console.log("Hello Guys");
}

function personalDetails(firstName,lastName,collegeName){
    console.log("My name is ",firstName,lastName,"\nMy college name is =",collegeName);
}

function swapValues(value1,value2){
    console.log("Before Swapping :" ,"Value1 =",value1,"Value2=",value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swapping :" ,"Value1 =",value1,"Value2=",value2);
}
function addThreeValues(value1,value2,value3){
    var result=value1+value2+value3;
    console.log("The Addition of three value=",result)
    }

    function bankDetails(bankName,accountNum,location,pinCode){
        console.log("I am having account in ",bankName,"and my account number is ",accountNum,".","The Address of my bank is ",location,",",pinCode);
    }

console.log("======Step1=======");
display();
helloProgram();

console.log("======Step2======");
personalDetails("Rohit","Malvi","Piet");

console.log("======Step3======");
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("======Step4======");
addThreeValues(10.53,600,40);
addThreeValues("Hello ","Good Morning ","Friends")
console.log("====================================");
bankDetails("CITI BANK",123456788912344,"PUNE",221345);
bankDetails("SBI",893456788912321,"NAGPUR",440023);
bankDetails("KOTAK MAHINDRA",673456788910000,"NAGPUR",440098);