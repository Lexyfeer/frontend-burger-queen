import {Employee} from '../services/employee'
import {employeeService} from '../services/employeeService';

export const createEmployee = (value) => {
  let newEmp = new Employee();
  
  if(value.pass === value.passcopy && 
    value.email === value.emailcopy){
      newEmp.TypeEmployee = value.typeEmployee;
      newEmp.Name = (value.name).toUpperCase();
      newEmp.Pass = value.pass;
      newEmp.Email = value.email;

      console.log('Send this in a POST request:', newEmp);
      employeeService.addOne(newEmp)
  }
  else{
    alert('los passwords no son iguales o el email es diferente')
  }
}

export const getAllEmployees = () =>{
  return  employeeService.getAll() 
  //console.log(employeeService.getAll().data)
}

export const EmployeeLogic = () => ({
  createEmployee,
  getAllEmployees,
});


export const employeeFactory = EmployeeLogic();
