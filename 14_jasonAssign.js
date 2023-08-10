let jsonOBject=`{
"name":"Aleix Melon",
"id":"E00245",
"role":["DEV","DBA"],
"age":23,
"doj":"11-12-2019",
"married":false,
"address":{
    "street":"32,laham st",
    "city":"Innsbruck",
    "country":"Austria"
},
"referred-by":"E0012"


}`;

let jsonObject=JSON.parse(jsonOBject)
console.log("The type of the jsonObject is :" ,typeof jsonObject);
console.log(jsonObject.role[0]);
let splitName=jsonObject.name.split(" ")
console.log(splitName[1]);

let splityear=jsonObject.doj.split("-")
console.log(splityear[2]);
