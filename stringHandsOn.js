function stringHandsOn(){
    console.log("==========Step1============");
    var string1="   Hey you are doing good,keep it up   ";
    console.log(string1);
    console.log("==========Step2============");
    console.log("The length of the string is =",string1.length);
    console.log("==========Step3============");
    var trimString=string1.trim();
    var lengthTrimString=trimString.length;
    console.log(`The string after removing extra spaces: ${trimString} and its length is :${lengthTrimString}`);
    console.log("==========Step4============");
    var trimStarts=string1.trimStart();
    var trimEnds=string1.trimEnd();
    var totalNumberOfExtraSpacesRemoved=(string1.length-trimStarts.length)+(string1.length-trimEnds.length);
    console.log(`The total number of extra spaces removed = ${totalNumberOfExtraSpacesRemoved}`);
    console.log("==========Step5============");
    console.log(trimString,": The First Character of the string is ",trimString.charAt(0)," and the last Character of the string is",trimString.charAt(trimString.length-1));
    console.log("==========Step6============");
    console.log("The total number of words in the string :",trimString.split(" ").length);

    
    console.log("==========Step7============");
    console.log("The index of the good from string : ",trimString," is at :",trimString.search("good"));
    console.log("==========Step8============");
    console.log("The substring starting from 22 to last character of string is",trimString.substring(22,trimString.length-1));
    console.log("==========Step9============");
    console.log(trimString.startsWith("Hey"));
    console.log("==========Step10============");
    console.log(trimString.endsWith("up"));
    //console.log("==========Step1============");
}

stringHandsOn();