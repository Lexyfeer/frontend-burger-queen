import React, { Component, Fragment } from 'react';
import TableEmployees from './employees-component';
import { employeeFactory } from '../../domain/employeeFactory'

// const URL = 'http://localhost:8080/api/v1'

// const myHeaders = {
//   method: 'GET',
//   headers:{'Content-Type': 'application/json'}
// } 

class EmployeeContainer extends Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            allEmployees: [],
            title: 'Administración de todos los empleados:'
        };
    }
    
    componentDidMount() {
        // fetch(URL+'/employees', myHeaders)
        // .then(response => response.json())
        // .then(data => { 
        //     this.setState({ allEmployees: data})
        // })
        // .catch(error => console.error('Error:', error));
        
        //employeeFactory.getAllEmployees();
        console.log(employeeFactory.getAllEmployees())
    }

    _renderAllUsers(){
        let users = this.state.allEmployees;        
        return (users.map((value, index)=>{
            return (
                <ul key={index}>
                    <li> Name: {value.Name}</li> 
                    <li> email: {value.Email} </li> 
                </ul>)
        }))
    }

    render(){
        return(
            <Fragment>
                <TableEmployees
                    defaultData={this.state}
                />
                <div>
                    {this._renderAllUsers()}
                </div>
            </Fragment>
        )     
    }
}
export default EmployeeContainer;

// allEmployees: [
//     {
//         Email: "ing.kenai@gmail.com",
//         Name: "CLAUDIA G VILLANUEVA GALLEGOS",
//         Pass: "123",
//         TypeEmployee: "Cocinero",
//         __v: 0,
//         _id: "5d363058c5427916d54507ad"
//     },
//     {
//         Email: "lexyfeer@hotmail.com",
//         Name: "12",
//         Pass: "12",
//         TypeEmployee: "Mesero",
//         __v: 0,
//         _id: "5d36364ac5427916d54507ae"
//     }
// ],