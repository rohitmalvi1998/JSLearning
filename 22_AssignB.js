class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
    }

}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");

const emp_radha=new Employee(33,"Radha","HR",74000,"WIPRO");

const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");

const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infosys");

const emp_monika=new Employee(77,"Monika","IT",40000,"WIPRO");

const emp_vinayak=new Employee(88,"Vinayak","IT",75000,"TCS");

const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infosys");
arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahi]


console.log("=====================Step1===============================");


arrayEmployees.forEach(employee => {
if (employee.emp_company=="TCS") {
    console.log(`The Employee : ${employee.emp_name} Company : ${employee.emp_company} `);
    
}

    
});

console.log("=====================Step2===============================");

arrayEmployees.forEach(employeeDept => {
    if (employeeDept.emp_dept=="Finance") {
        console.log(`The Department of : ${employeeDept.emp_name} is  ${employeeDept.emp_dept} `);
        
    }
    
        
    });
  
console.log("=====================Step3===============================");

    arrayEmployees.forEach(employeeDetails => {
        if (employeeDetails.emp_name.startsWith("R")) {
           console.log(`The Employee  Details are : Employee Name : ${employeeDetails.emp_name} , Employee ID : ${employeeDetails.emp_id} ,Employee Department : ${employeeDetails.emp_dept} ,Employee Salary : ${employeeDetails.emp_salary} ,Employee Company : ${employeeDetails.emp_company} `);
            
        }
        
            
        });

        console.log("=====================Step4===============================");

        arrayEmployees.forEach(employeeSalary => {
            if (employeeSalary.emp_salary>75000) {
                console.log(`Employee Name : ${employeeSalary.emp_name},Employee Salary : ${employeeSalary.emp_salary} ,Employee Company : ${employeeSalary.emp_company} `);
                
            }
            
                
            });
        
console.log("=====================Step5===============================");

            arrayEmployees.forEach(employeeSalaryAndDept => {
                if (employeeSalaryAndDept.emp_salary>=50000 && employeeSalaryAndDept.emp_dept=="IT") {
                    console.log(`The Employee  Details are : Employee Name : ${employeeSalaryAndDept.emp_name} , Employee ID : ${employeeSalaryAndDept.emp_id} ,Employee Department : ${employeeSalaryAndDept.emp_dept} ,Employee Salary : ${employeeSalaryAndDept.emp_salary} ,Employee Company : ${employeeSalaryAndDept.emp_company} `);
                    
                }
                
                    
                });
                
console.log("=====================Step6===============================");

                arrayEmployees.forEach(employeeCompany => {
                    if (employeeCompany.emp_company=="Infosys") {
                        console.log(`The Employee  Details are : Employee Name : ${employeeCompany.emp_name} , Employee ID : ${employeeCompany.emp_id} ,Employee Department : ${employeeCompany.emp_dept} ,Employee Salary : ${employeeCompany.emp_salary} ,Employee Company : ${employeeCompany.emp_company} `);

                    }
                    
                        
                    });
        {        
let ro2;
    console.log(ro2);

}
//console.log(ro2);
{
    var ro=1;

}
console.log(ro);
//const ro=2;