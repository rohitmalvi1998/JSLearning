var string1="How are you all. Welcome to the daily sync"
var string2=" Friends"
console.log(string1.length);
console.log(string1.concat( string2));
var trimstring=string1.trim();
var trimStartString=string1.trimEnd();

console.log(string1);
console.log(trimstring);
console.log(trimStartString);
console.log(string1.replace("Morning","Evening"));
console.log(string1.search("sync"));
console.log(string1.indexOf("sync"));


 console.log("Ther length of String1 =", string1.length,"The length of trimstring=",trimStartString.length);

 console.log(`Ther length of String1 ${string1.length} . The length of trimstring ${trimStartString.length}`);