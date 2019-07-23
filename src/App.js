import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import NavbarProfile from './components/NavbarProfile';
import RegisterContainer from './components/employees/register-container';
import ShowOrders from './components/ShowOrders';
import MakeOrders from './components/MakeOrders';
import EmployeeContainer from './components/employees/employees-container'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarProfile />
        <Route exact path="/" component={RegisterContainer} />
        <Route path="/ShowOrders" component={ShowOrders} />
        <Route path="/MakeOrders" component={MakeOrders} />
        <Route path="/EmployeeContainer" component={EmployeeContainer} />
      </div>
    </HashRouter>
  );
}

export default App;