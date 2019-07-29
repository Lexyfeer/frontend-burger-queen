import React, { Component, Fragment } from 'react';
import TableEmployees from './employees-component';
import { Link } from "react-router-dom";
//import { employeeFactory } from '../../domain/employeeFactory'
//TODO: Aca no supe como mandar del service al factory para utilizar el factory; por eso importe directo el service. Te sobrara tiempo, mejora esto: 

import { employeeService } from '../../services/employeeService'


class EmployeeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEmployees: [],
            title: 'Administración de todos los empleados:',
        };
    }

    componentDidMount() {
        console.log('2. componentDidMount()  ')
        employeeService.getAll().then( 
            json => { 
                this.setState({ allEmployees : json }) 
            }
        ) 
    }

    _deleteEmployee = (index, value) => {
        console.log('Click en: ', index, value);
        this.state.allEmployees.splice(index, 1);
        this.setState({allEmployees : this.state.allEmployees })
        employeeService.deleteOne(value._id);   
    };

    render(){
        console.log('1. render() ')

        if (this.state.allEmployees.length > 0) {
            return(
                <Fragment>
                <Link to="/RegisterContainer"> Registrar </Link>
                    <TableEmployees
                        title={this.state.title}
                        arrayEmployees={this.state.allEmployees}
                        controlFuncDelete={this._deleteEmployee}
                    />
                </Fragment>
            )
        } else {
            return(
                <p>No existen datos para mostrar</p>
            )
        }
        
    }
}
export default EmployeeContainer;