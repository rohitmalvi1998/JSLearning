// If boolean is used , true is 1 amd false is  0

console.log("==========Implicit converions of string============");
let result;
result='3' + '2';
console.log(result,"Here the + operator convert the number into string datatype amd concat the two string number ");

result='3' + true;
console.log(result,"Here the first value's data type is string amd second value data type is boolean so the '+' operator will convert the boolean datatype into string and concat the the two value ");

result='3' + undefined;
console.log(result,"Here the first value's data type is string amd second value data type is undefined so the '+' operator will convert the boolean undefined into string and concat the the two value ");

result='3' + null;
console.log(result,"Here the first value's data type is string amd second value data type is null so the '+' operator will convert the null datatype into string and concat the the two value ");


console.log("=========Implict  boolean conversion to number==========");

let result2;

result2='4'-true;
console.log("Here the first value datatype is  string and second value datatype is boolean, so in this the '-' operator will perform substraction operation snd result will be ", result2);

result2=4+true;
console.log("Here the first value datatype is number and second value datatype is boolean, so in this the '+' operator will perform Addition operation and result will be ",result2);

result2=4+false;
console.log("Here the first value datatype is  number and second value datatype is boolean, so in this the '+' operator will perform addition operation and result will be ",result2);

console.log("=========Implict  string conversion to number==========");

let result3;


result3='4'-'2';
console.log("Here the first value datatype is  string and second value datatype is string, so in this the oprant '-' operator  so what he did he will gives a priority to implicit into number datatype and than will perform substraction operation and result will be ", result3);

result3='4'-2;
console.log("Here the first value datatype is  string and second value datatype is number, so in this the oprant '-' operator  so what he did he will gives a priority to implicit into number datatype and than will perform substraction operation and result will be ",result3);

result3='4'*2;
console.log("Here the first value datatype is  string and second value datatype is number, so in this the oprant '-' operator  so what he did he will gives a priority to implicit into number datatype and than will perform multiplication operation and result will be ",result3);

result3='4'/2;
console.log("Here the first value datatype is  string and second value datatype is number, so in this the oprant '-' operator  so what he did he will gives a priority to implicit into number datatype and than will perform divison operation and result will be ",result3);


console.log("=================Interesting Facts =============");
console.log(0=='0', "In binary comparison operators it will compare the value ");
console.log(0=='',"Because first operant contain '0' and the second operant contain 'space' so by default in the place of space it will be consider as 0 , so th result will be true after comparison.");
console.log(0==false, "Because in first value is '0' amd second value is boolean which is equal to 0 so when the binary comparison operators will be perform it will compare the value ");
console.log(null==undefined);
console.log(1==[1]);
console.log(1==true,"Because in first value is '1' amd second value is boolean which is equal to 1 so when the binary comparison operators will be perform it will compare the value ");
console.log(1=='1'," Because in binary comparison operators it will compare the value ");
