const URL = 'http://localhost:8080/api/v1'

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const getAll = () => (
  fetch(URL+'/employees', {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success fetch GET all Data Method for RESTFull:', data)
    return data
  })
  .catch(error => console.error('Error:', error))
);

const addOne = (newEmp) => {
  fetch(URL+'/employees', {
    method: 'POST',
    headers,
    body : JSON.stringify(newEmp)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success fetch POST Method for RESTFull:', data) 
    return data 
   })
  .catch(error => console.error('Error:', error))
};

const getByID = (idEmp) => (
  fetch(URL+'/employees/'+idEmp, {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success fetch GET by ID Method for RESTFull:', data)
    return data
  })
  .catch(error => console.error('Error:', error))
);

const updateOne = (idEmp, emp) => {
  fetch(URL+'/employees/'+idEmp, {
    method: 'PUT',
    headers,
    body : JSON.stringify(emp)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success fetch PUT Method for RESTFull::', data)
    return data
  })
  .catch(error => console.error('Error:', error));
}

const deleteOne = (idEmp) => {
  fetch(URL+'/employees/'+idEmp,  {
    method: 'DELETE',
    headers
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success fetch DELETE Method for RESTFull:', data)
    return data
  })
  .catch(error => console.error('Error:', error));
};

export const employeeService = {
  getAll,
  getByID,
  addOne,
  updateOne,
  deleteOne
}

// sericios puede compartir datos entre capas y componentes