// Use employee.js module with this
import {Cadre, tax, benefits, bonus, reimbursement} from "./employee.js";

import {payGrades, getCadre, calculateTax, calculateBonus, getBenefits, reimbursementEligibility} from "./employee.js";

import Employee from "./employee.js";

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
console.log('');
getEmployeeInformation(50000);
console.log('');
getEmployeeInformation(100000);

console.log(payGrades);