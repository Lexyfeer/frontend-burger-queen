import React, { Component, Fragment } from 'react';
import TableEmployees from './employees-component';
//import { employeeFactory } from '../../domain/employeeFactory'
import { employeeService } from '../../services/employeeService'


class EmployeeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEmployees: [],
            title: 'Administración de todos los empleados:'
        };
    }
   
    componentDidMount() {
        employeeService.getAll().then( 
            json => {
                this.setState({ allEmployees : json })
                console.log('componentDidMount():', this.state.allEmployees )
            }
        ) 
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
        console.log('render():', this.state.allEmployees)
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
