function wordCount(str){
    console.log(str)
    str=str.toLowerCase() // i am very good ui developer
    console.log(str);

    console.log(str.length);
    let vowel=['a','e','i','o','u']
    let c=0
    for( i=0; i<str.length;i++) 
        {
            console.log(i,str[i]);
            if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
                {
                    
                    c=c+1
                }

            
        }

console.log(c);

}
var cubeOfNumber=function (){
    let cubeOfNumbers=0;
    for (let i = 1; i <=5; i++) {
         cubeOfNumbers=(i*i*i )+cubeOfNumbers;

    }

console.log("Cube ",cubeOfNumbers);
    
}

var oddPositionedChars=function (stringChar) {
    let stringLength=stringChar.length
    for (let i = 0; i < stringLength; i++) {
        const char=stringChar[i]
        if (i%2!=0 && char!=' ') {
            console.log("position of Character =" ,i,"Character at odd position", stringChar[i]);
            
        }
    }
    //console.log(stringLength);

}

wordCount("I am very good IT Developer");
cubeOfNumber();
console.log("================String 1===================");
oddPositionedChars("Hards work always pay back");
console.log("================String 2===================");
oddPositionedChars("Soon I will be Angular IT");
