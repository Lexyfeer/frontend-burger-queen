import React from 'react';

const Register = (props) => (
    <div className="mainContent">
        <div className="container">
            <h3>{props.defaultData.title}</h3>
            <div className="LoginImage">
            <div style={{border: "5px solid orange"}}>
                <label htmlFor="nya">Nombre y Apellido: *</label>
                <br />
                <input 
                    className="form-control" id="name" name="name" 
                    type="text" 
                    placeholder = "Nancy Rodriguez" 
                    value= {props.defaultData.name} 
                    onChange={props.controlFuncName}
                    required
                    />
                <br />
                <label htmlFor="email">Email: *</label>
                <br />
                <input 
                    className="form-control" id="email" name="email"
                    type="text" 
                    placeholder = "nancy@sample.com" 
                    value={props.defaultData.email}
                    onChange={props.controlFuncEmail} 
                    required
                    />
                <br />
                <input 
                    className="form-control" id="emailcopy" name="emailcopy"
                    type="text" 
                    placeholder = "nancy@sample.com" 
                    value={props.defaultData.emailcopy}
                    onChange={props.controlFuncCopyEmail} 
                    required
                    />
                <br />
                <label htmlFor="password">Contraseña:</label>
                <br/>
                <input 
                    className="form-control" id="pass" name="pass"
                    type="password" 
                    value={props.defaultData.pass}
                    onChange={props.controlFuncPass}
                    required
                    />
                <br />
                <input 
                    className="form-control" id="passcopy" name="passcopy"
                    type="password" 
                    value={props.defaultData.passcopy}
                    onChange={props.controlFuncCopyPass}
                    required
                    />
                <br />
                <div className="form-group">
                    <label htmlFor="type">Tipo de Empleado:</label>
                    <br/>
                    <select
                    id="typeCombo"
                    name="typeCombo"
                    value={props.defaultData.typeEmployee}
                    // options={props.defaultData.optionsCombo}
                    onChange={props.controlFuncTypeEmployee}
                    className="form-select">
                    <option value="">{props.defaultData.titleCombo}</option>
                    {props.defaultData.optionsCombo.map((optionValue, index) => {
                        return (
                            <option 
                                key={index} 
                                value={optionValue}>{optionValue}
                            </option>);
                    })}
                    </select>
                </div>
                <input className="btn" type="submit" value="Enviar"/>
                <button className="btn btn-link float-left"
                        onClick={props.clearForm}>Limpiar Forma</button>
            </div>
            </div>
        </div>
    </div>
); 

export default Register;