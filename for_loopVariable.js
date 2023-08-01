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



wordCount("I am good UI Developer")