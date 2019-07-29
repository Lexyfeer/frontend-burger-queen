import React, { Component, Fragment } from "react";
import Logo from '../assets/images/logo.png';
import { NavLink, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Login from '../components/Login'
import ShowOrders from '../components/ShowOrders';
import MakeOrders from '../components/MakeOrders';
import EmployeeContainer from '../components/employees/employees-container';
import RegisterContainer from '../components/employees/register-container';
import UpdateContainer from '../components/employees/updater-container';


export default class NavbarProfile extends Component {
  render() {
    return (
      <Fragment>
        <Navbar variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <img className="App-logo-image" src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                  <NavLink className="navMenuLink" exact to="/">
                    <h6>Iniciar sesión</h6>
                  </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="navMenuLink" exact to="/MakeOrders">
                  <h6>Tomar orden</h6>
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="navMenuLink" to="/ShowOrders">
                  <h6>Ver pedidos</h6>
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="navMenuLink" to="/EmployeeContainer">
                  <h6>Administracion</h6>
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="navMenuLink" to="/LogOut">
                  <h6>Cerrar sesión</h6>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Login} />
        <Route path="/ShowOrders" component={ShowOrders} />
        <Route path="/MakeOrders" component={MakeOrders} />
        <Route path="/EmployeeContainer" component={EmployeeContainer} />
        <Route path="/RegisterContainer" component={RegisterContainer} />
        <Route path="/UpdateContainer" component={UpdateContainer} />

      </Fragment>
    );
  }
}
