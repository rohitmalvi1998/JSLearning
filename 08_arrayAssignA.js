arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"]

console.log("The first Element of the the array is",arrayFruits[0]);
console.log("The last Element of the the array is",arrayFruits[arrayFruits.length-1]);

arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"]
arrayFruits.unshift("Papaya")
console.log(arrayFruits);
arrayFruits.splice(4,1)
console.log("Array after removing the mango : ",arrayFruits);
arrayFruits.push("Pineapple")
console.log("Array after inserting the Pineapple: ",arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log("Array after Inserting the Dragon Fruit : ",arrayFruits);

let arrayReplace=arrayFruits.splice(2,1,"Kiwi")
console.log(arrayFruits);

console.log("Element starting from '1' to '4' :- ",arrayFruits.slice(1,4));

console.log("The last three elements of the array are",arrayFruits[arrayFruits.length-3],arrayFruits[arrayFruits.length-2], arrayFruits[arrayFruits.length-1]);

