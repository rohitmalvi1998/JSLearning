class Employee {

    constructor(emp_Id,emp_Name , emp_dept, emp_salary, emp_company ){

      this.emp_Id = emp_Id;
      this.emp_Name = emp_Name;


      this.emp_dept = emp_dept;

      this.emp_salary = emp_salary;

      this.emp_company = emp_company;

    }
  }

let emp_Anil = new Employee(22,"Anil", "IT", 50000, "TCS");

  let emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipro");

  let emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");

  let emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "infy");

  let emp_monika = new Employee(77,"MOnika", "IT", 40000, "WIpro");

  let emp_vinay= new Employee(88,"Vinayak", "IT", 75000, "TCS");

  let emp_mahi=new Employee(99,"Mahesh", "HR", 85000, "Infys");


  const employeeArray=[emp_Anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi]
  const employeeNameArray=employeeArray.map((employee)=>{

    return employee.emp_Name;

  })
console.log("Employee Name Array : ",employeeNameArray);

const employeeDeptArray=employeeArray.map((employee)=>{

    return employee.emp_dept;

  })
console.log("Employee Dept Array :",employeeDeptArray);

const employeeIdArray=employeeArray.map((employee)=>{

    return employee.emp_Id;

  })
console.log("Employee Id Array : ",employeeIdArray);




//   const arrayStudents = [studentJenny, studentStew, studentElon, studentSatya,studentSundar ];

//   const newStudentList = arrayStudents.filter( (student) => {

//     return student.emailId.length > 13;

//   });

//   console.table(newStudentList);