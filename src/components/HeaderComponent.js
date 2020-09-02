import React,{ Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, 
Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input }  from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });        
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }); 
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + "Remember: " + this.remember.checked)
        event.preventDefault();
    }

    render(){
        return(
            // react.fracment
            <>
            <Navbar dark expand="md">
                <div className = 'container'>
                    <NavbarToggler onClick={ this.toggleNav }/>
                    <NavbarBrand className="mr-auto">
                        <img src="assets/images/logo.png" height="30" width="41"
                        alt="Restorante El Gato"/>
                    </NavbarBrand> 
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sing-in fa-lg">Login</span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className = 'container'>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>
                                Sarasa
                            </h1>
                            <p>
                                Curso de react con santi el boton! Que trabaja en La Nacion para baufes APP!
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>                                
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}/>
                                Remember me?
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" className="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header;