class vehicle{
    vehicleName;
    vehicleModel;
    vehicleNumber;
    vehicleColor;
    vehicleType;
    constructor(vName, vModel, vNumber, vColor, vType ){
        this.vehicleName=vName
        this.vehicleModel=vModel
        this.vehicleNumber=vNumber
        this.vehicleColor=vColor
        this.vehicleType=vType
    }
    vehicleDetails(){

        console.log(`========================================${this.vehicleName}====================================================`);

        console.log(`Vehicle Details is Vehicle Name: ${this.vehicleName} , Vehicle Model: ${this.vehicleModel},
        vehicle Number: ${this.vehicleNumber}, Vehicle Color: ${this.vehicleColor}, vehicle Type : ${this.vehicleType}`);
    
    }
}
class college{
    collegeName;
    collegeAddress;
    collegeRanking;
    collegeRating;
    collegeType;

    constructor(cName,cAddress,cRanking,cRating,cType)
    {
        this.collegeName=cName
        this.collegeAddress=cAddress
        this.collegeRanking=cRanking
        this.collegeRating=cRating
        this.collegeType=cType
    }

    display(){
        console.log(`========================================${this.collegeName}====================================================`);
        console.log(`College Details is college Name: ${this.collegeName} , college Address: ${this.collegeAddress},
        college Ranking: ${this.collegeRanking}, college Rating: ${this.collegeRating}, college Type : ${this.collegeType}`);
    
    }
}

let vehicleAudi=new vehicle("Audi","A8",999,"Black","Diesel")
let vehicleBMW=new vehicle("BMW","X8",111,"Blue","Diesel")
let vehicleMercedes=new vehicle("Mercedes","X1",777,"white","Petrol")
let vehicleJaguar=new vehicle("Jaguar","RangeRover",888,"Dark Blue","Diesel")
let vehicleInovaa=new vehicle("Enovaa","g9",333,"Sky Blue","Diesel")
let vehicleHector=new vehicle("MG Hector","s8",899,"Black","Petrol")

let arrayOfVehicles=[vehicleAudi,vehicleBMW,vehicleMercedes,vehicleJaguar,vehicleHector]
for (const element of arrayOfVehicles) {

    element.vehicleDetails();
       
}


let collegeMIT=new college("MIT","Pune",5,4,"Autonomous")
let collegeCOEP=new college("COEP","Pune",1,4,"Autonomous")
let collegeSBJain=new college("SBJAIN","Nagpur",10,4,"Semi-Autonomous")
let collegeRaisoni=new college("Raisoni","Nagpur",5,2,"Autonomous")
let collegeRMCOE=new college("RMCOE","Pune",5,5,"Autonomous")

let arrayOfCollege=[collegeMIT,collegeCOEP,collegeSBJain,collegeRaisoni,collegeRMCOE]
for (const element2 of arrayOfCollege) {
    //console.log(arrayOfCollege[]);
    element2.display();
    
    
}



function traverseObject(collegeObject){
    
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element4 = collegeObject[key];
            console.log(`${key} :- ${element4}`);
            
        }
    }
    console.log("================================================");
}
for (const element3 of arrayOfCollege) {
     traverseObject(element3);
    
}
/*
let traverseobject=function(object){
    for(const key in object){
        if(object.hasOwnProperty.call(object,key)){
            const element=object[key];
            console.log(`${key}:-${element}`);
        }
    }
}
traverseobject(college1);
console.log(`------------------------------------`);
traverseobject(college2);
console.log(`------------------------------------`);
traverseobject(college3);
console.log(`-------------------------------------`);
traverseobject(college4);
*/