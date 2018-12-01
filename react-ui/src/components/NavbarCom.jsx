import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/NavbarCom.css';

export default class NavbarCom extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"></Link><strong>Garage Park</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="#" to="/">
              Sign Up
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="#" to="/">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}