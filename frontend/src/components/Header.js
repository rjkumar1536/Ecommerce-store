import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >Bigflyzone</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/cart">
                            <Nav.Link >
                                <i className='fas fa-shopping-cart mr-1'></i>Cart
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/sign-in">
                            <Nav.Link >
                                <i className='fas fa-user'></i>Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header
