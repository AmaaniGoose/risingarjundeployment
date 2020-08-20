import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

      }

    render() {
        return(
            <div>
                Welcome to Login/Register
            </div>
        );
    }
}
export default Login;
