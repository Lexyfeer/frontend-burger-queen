import React, { Component, Fragment } from "react";
import Logo from '../assets/images/logo.png';
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";



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
      </Fragment>
    );
  }
}
