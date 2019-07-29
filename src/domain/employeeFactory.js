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

export const updateEmployee = (id, value) => { 
  checkMailDuplicate()

  let emp = {}; 
  if(value.pass === value.passcopy && 
    value.email === value.emailcopy){
      emp.TypeEmployee = value.typeEmployee;
      emp.Name = (value.name).toUpperCase();
      emp.Pass = value.pass;
      emp.Email = value.email;

      console.log('Send this in a PUT request:', emp);
      employeeService.updateOne(id, emp)
  }
  else{
    alert('los passwords no son iguales o el email es diferente')
  }
}

const checkMailDuplicate = () =>{
  // employeeService.getAll()
  // .then( 
  //   json => { arrayData = json
  //   })
      
}

export const employeeFactory = {
  createEmployee,
  updateEmployee
};