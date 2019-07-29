import React from 'react';
import { Link } from "react-router-dom";

const TableEmployees = (props) => {
    var rows = props.arrayEmployees; 

    const _renderAllData = () =>{
       return rows.map((value, index) => (
            <tr key={index}>
            <td>{index}</td>
            <td>{value.Name}</td>
            <td>{value.TypeEmployee}</td>
            <td>{value.Email}</td>
            <td>
                <Link to ={{ pathname: '/UpdateContainer', userData: value}} > Actualizar </Link>
            </td>
            <td>
                <button onClick ={ () => { props.controlFuncDelete(index, value) }}>Borrar</button>
            </td>
            </tr>
        ))
    }

    return (
        <div className="mainContent">
            <div className="container">
                <h3>{props.title}</h3>    
                <table border="1" style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Puesto</th> 
                            <th>Email</th>
                            <th>Actualizar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_renderAllData()}
                    </tbody>
                </table>
            </div>    
        </div>
    )
};

export default TableEmployees;