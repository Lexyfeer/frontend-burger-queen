import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import RegisterUpdater from './register-component';
import { employeeFactory } from '../../domain/employeeFactory'

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            emailcopy: '',
            pass: '',
            passcopy: '',
            typeEmployee: '',
            
            optionsCombo: ['Mesero', 'Cocinero'],
            titleCombo: 'Selecciona puesto',
            title: 'Registrar Usuario'
        };
    }

    handleFullNameChange = (e) =>{
        this.setState({ name: e.target.value });
    }

    handleFullEmailChange = (e) =>{
        this.setState({ email: e.target.value });
    }

    handleFullEmailCopyChange = (e) =>{
        this.setState({ emailcopy: e.target.value });
    }

    handleFullPassChange = (e) =>{
        this.setState({ pass: e.target.value });
    }

    handleFullPassCopyChange = (e) =>{
        this.setState({ passcopy: e.target.value });
    }

    handleTypeEmployeeSelect = (e) =>{
        this.setState({ typeEmployee: e.target.value });
	}

    handleClearForm = (e) =>{
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            emailcopy: '',
            pass: '',
            passcopy: '',
            typeEmployee: '',
        });
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();

        const allDataInputs = {
          name: this.state.name,
          email: this.state.email,
          emailcopy: this.state.emailcopy,
          pass: this.state.pass,
          passcopy: this.state.passcopy,
          typeEmployee: this.state.typeEmployee,
        };
        employeeFactory.createEmployee(allDataInputs);
        this.handleClearForm(e);
    }

    render() {
        return(
            <Fragment>
                <form className="form" onSubmit={this.handleFormSubmit} autoComplete='off' style={{border: "5px solid red"}}>
                    <RegisterUpdater 
                        defaultData= {this.state}
                        controlFuncName={this.handleFullNameChange}
                        controlFuncEmail={this.handleFullEmailChange}
                        controlFuncCopyEmail={this.handleFullEmailCopyChange}
                        controlFuncPass={this.handleFullPassChange}
                        controlFuncCopyPass={this.handleFullPassCopyChange}
                        clearForm= {this.handleClearForm}

                        controlFuncTypeEmployee={this.handleTypeEmployeeSelect}
                    />
                </form>
                <Link to="/EmployeeContainer"> Cancelar </Link>
            </Fragment>
        )
    }
}

// Register.propTypes = {
//     controlFuncName: React.PropTypes.func.isRequired
// };
          
export default RegisterContainer;