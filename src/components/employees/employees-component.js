import React from 'react';

const TableEmployees = (props) => (
    <div className="mainContent">
        <div className="container">
            <h3>{props.defaultData.title}</h3>
            
            {/* <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Puesto</th> 
                        <th>Email</th>
                        <th>Actualizar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table> */}

            
        </div>    
    </div>
);

// {props.defaultData.allEmployees.map((optionValue, index) => {
//     return (
//         <option 
//             key={index} 
//             value={optionValue}>{optionValue}
//         </option>);
// })}

export default TableEmployees;