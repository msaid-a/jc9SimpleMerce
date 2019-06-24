import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render () {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">simpleMerce</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to='/' >All Products</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/register'>
                            <Button color="primary" className="mx-3">Register</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/login' >
                            <Button color="success">Login</Button>
                        </Link>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header