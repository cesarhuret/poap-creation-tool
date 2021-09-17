import React, {Component} from "react";
import {Navbar, Nav, Container } from 'react-bootstrap'

class NavComp extends Component {

    render() {
            return ( 
                <div className="App">
                        <Navbar variant="dark" expand="lg" style={{color: 'white', borderBottom: '1px solid', borderColor: 'gray' }}>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link className='navlink' href="/">Create</Nav.Link>
                                    <Nav.Link className='navlink' href="/edit">Edit</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                    </div>
                )
    }
}

export default NavComp;