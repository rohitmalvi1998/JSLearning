let sbiBank={
    bankName:"SBI",
    location:"Pune",
    accountNo:1234456,
    ifsc:"SBI123NO",
    interestRate:"20%",
    showDetails:function() {
        console.log(`The BankDetails of SBI Bank are : bankName : ${this.bankName} ,location : ${this.location},accountNo : ${this.accountNo},ifsc :${this.ifsc} ,interestRate :${this.interestRate}` );
        
    }

}
let axisBank={
    bankName:"AXIS",
    location:"Mumbai",
    accountNo:1221786,
    ifsc:"AXI123NO",
    interestRate:"20%",
    showDetails:function() {
        console.log(`The BankDetails of Axis Bank are : bankName : ${this.bankName} ,location : ${this.location},accountNo : ${this.accountNo},ifsc :${this.ifsc} ,interestRate :${this.interestRate} ` );
        
    }


}
let hdfcBank={
    bankName:"HDFC",
    location:"Mumbai",
    accountNo:1221786,
    ifsc:"HDF123NO",
    interestRate:"10%",
    showDetails:function() {
        console.log(`The BankDetails of HDFC Bank are : bankName : ${this.bankName} ,location : ${this.location},accountNo : ${this.accountNo},ifsc :${this.ifsc} ,interestRate :${this.interestRate}` );
        
    }
 
}
let yesBank={

    bankName:"YES",
    location:"Mumbai",
    accountNo:1221786,
    ifsc:"YES123NO",
    interestRate:"10%",
    showDetails:function() {
        console.log(`The BankDetails of YES Bank are : bankName : ${this.bankName} ,location : ${this.location},accountNo : ${this.accountNo},ifsc :${this.ifsc} ,interestRate :${this.interestRate}` );
        
    }

}


sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();