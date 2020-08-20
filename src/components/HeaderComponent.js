import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      btnClick() {
          window.open("/login");
      }

      toggleModal() {
          this.setState({
            isModalOpen: !this.state.isModalOpen
          });
        }
      handleLogin(event) {
          this.toggleModal();
          alert("Username: " + this.username.value + " Password: " + this.password.value
              + " Remember: " + this.remember.checked);
          event.preventDefault();

      }
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={require("../images/headerlogo2.png")} height="40" width="60" alt='LogoImage' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                 <Link to="/login"><Button outline><span className="fa fa-sign-in fa-lg"></span> Login/Register</Button> </Link>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-5">
                                <h1>Rising Arjun</h1>
                                <p>Coaching Center in Sec37C, Gurgaon for Classes VI to XII & JEE Main/Advanced</p>
                            </div>
                            <div class="col-12 col-sm-3 align-self-center">
                                  <img src={require("../images/headerlogo.png")} class="img-thumbnail"></img>
                                </div>
                            <div class="col-12 offset-sm-1 col-sm align-self-center">
                              <a role="button" class="btn btn-block nav-link btn-info" onClick={this.toggleModal}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Contact Us</ModalHeader>
                  <ModalBody>
                    <h5>Phone numbers</h5>
                    <i className="fa fa-phone fa-lg"></i>: 093194 12223<br />
                    <i className="fa fa-phone fa-lg"></i>: 078383 62175<br />
                    <h5><br></br>Address</h5>
                      Kataria Market, Adjacent ILD/Corona/Taksila, Sector 37C
                      GURGAON, Haryana 122001
                      India
                    <h5><br></br>Email Id</h5>
                    <i class="fa fa-envelope fa-lg"></i>: <a href="mailto:therisingarjun@gmail.com "> therisingarjun@gmail.com </a>
                    <h5><br></br>Business Hours</h5>
                    Monday to Friday: 9AM to 6PM
                  </ModalBody>
              </Modal>
            </div>
        );
    }
}
export default Header;
