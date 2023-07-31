var monthOfYear=function (month) {
    switch (month) {
        case 1:
            console.log("This is Janurary Month")

            break;
    
            case 2:
                console.log("This is Feburary Month")
                
                break;
            case 3:
                    console.log("This is March Month")
                    
                break;
                case 4:
                    console.log("This is April Month")
                    
                    break;
                    case 5:
                        console.log("This is May Month")
                        
                        break;
                        case 6:
                            console.log("This is June Month")
                            
                            break;
                            case 7:
                                console.log("This is July Month")
                                
                                break;
                                case 8:
                                    console.log("This is August Month")
                                    
                                    break;
                                    case 9:
                                        console.log("This is September Month")
                                        
                                        break;
                                    case 10:
                                            console.log("This is October Month")
                                            
                                            break;

                                    case 11:
                                    console.log("This is November Month")
                                    
                                    break;
    
                                    case 12:
                                        console.log("This is December Month")
                                        
                                        break;
                                                                                                                                    

                                    default:
                                        console.log(`${month} - In valid input`);
                                        console.log(`Please provide valid data `);

                                                
                                    break;
    }
}
const month=[0,2,5,12,15,100,null,undefined];
for (let i = 0; i < month.length; i++) {
    monthOfYear(month[i])
    
}