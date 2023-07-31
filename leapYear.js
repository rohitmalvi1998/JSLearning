var leapYear=function (year){
    var convertYear= +year;

    if (year==undefined ||year== null||isNaN(convertYear)) {
        console.log(`${year} -->Is an invalid input`);
        
    } else {
        if (year%4==0||year%100==0||year%400==0) {

            console.log(`${year}-->Is an leap year`);
            
        } else {
            console.log(`${year}-->Is not an leap year`);
            
        }
        
    }

}

const yearLeap=[2020,1999,1600,2022,1945,null,undefined,"Twenty Twenty",NaN,1750]

for (let i = 0; i < yearLeap.length; i++) {
    leapYear(yearLeap[i]);
    
}