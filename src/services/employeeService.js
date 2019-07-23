const URL = 'http://localhost:8080/api/v1'

const myHeaders = {
  method: 'GET',
  headers:{'Content-Type': 'application/json'}
} 

export const getAll = () => {
  fetch(URL+'/employees', myHeaders)
  .then(response => response.json())
  .then(data => { 
    //console.log(data)
    return data 
  })
  .catch(error => console.error('Error:', error));
};

// fetch('https://reqres.in/api/users?page=1')
// .then(response => response.json())
// .then(json => {
//     this.setState({
//         allResponse : json, 
//         users : json.data});
//     //console.log(this.state.allResponse);
// })
// .catch(error => console.log(error))

export const addOne = (newEmp) => {
  myHeaders.method = 'POST'; 
  myHeaders.body = JSON.stringify(newEmp); 

  fetch(URL+'/employees', myHeaders)
  .then(res => res.json())
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
}

export const getByID = (idEmp) => {
  fetch(URL+'/employees/'+idEmp, myHeaders)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
     //console.log(myJson);
     return myJson;
  })
  .catch(error => console.error('Error:', error));
};

export const updateOne = (idEmp, emp) => {
  myHeaders.method = 'PUT'; 
  myHeaders.body = JSON.stringify(emp); 

  fetch(URL+'/employees/'+idEmp, myHeaders)
  .then(res => res.json())
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
}

export const deleteOne = (idEmp) => {
  myHeaders.method = 'DELETE'; 

  fetch(URL+'/employees/'+idEmp, myHeaders)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    //console.log(myJson);
    return myJson;
  })
  .catch(error => console.error('Error:', error));
};

export const EmployeeServiceREST = () => ({
  getAll,
  getByID,
  addOne,
  updateOne,
  deleteOne
});

export const employeeService = EmployeeServiceREST();


// sericios puede compartir datos entre capas y componentes