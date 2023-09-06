//Set: It is collection of unique elements.

//Syntax
var setName=new Set();
setName.add(10);
setName.add(20);
console.log(setName);
setName.clear()
console.log(setName);
setName.add(20)
console.log("After additon",setName);

var arr=[1,2,31,4,1,5,6,7,8,8,8,9,1]
console.log(arr);
const setArr=[...new Set(arr)];
console.log("Set Array :" ,setArr);


//Map :
/**
 * It is used to collection of elements in key-value pairs
 * *Key : it should be unqiue
 *  Syntax :
 * const map_name=new Map();
 * 
 * 
 */
//Adding values to map :
 const mapTest=new Map();
 mapTest.set("name","Rohit Malvi")
 mapTest.set("Brother","Sumit Malvi")
 mapTest.set("Mother name","Seema Malvi")
 mapTest.set(23,90)
 //mapTest.set("name","Rohit Malvi")
console.log(mapTest);
 console.log(mapTest.keys());
 const mapKeys=mapTest.keys();
 for (const key of mapKeys) {
    console.log(key,"=>>>",mapTest.get(key));

    
 }
class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate)
    {
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }


}
const axis_bank= new Bank("Axis Bank","Pune",123145,"AXQ123",8.9)
const mapClass=new Map();
mapClass.set("bankName",axis_bank.bankName)
mapClass.set("location",axis_bank.location)
mapClass.set("accountNo",axis_bank.accountNo)
mapClass.set("ifsc",axis_bank.ifsc)
mapClass.set("interestRate",axis_bank.interestRate)
console.log(mapClass);
const mapClassKeys=mapClass.keys()
//Traversing the class object embed insisde the map using for of loop
for (const key of mapClassKeys) {
    console.log(key,"=>>",mapClass.get(key));
    
}
let testObject={
    test1:"Value1",
    test2:"Value2"
}
for (const key in testObject) {
    if (Object.hasOwnProperty.call(testObject, key)) {
        const element = testObject[key];
        console.log(key,"==>",element);

        
    }
}