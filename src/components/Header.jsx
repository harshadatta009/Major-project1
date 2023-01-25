import React from 'react'
import { Container,Navbar,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar collapseonselect="true" expand="sm" bg="dark" variant="dark" fixed='top'>
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'/>
        <Container>
          
            <Navbar.Collapse id="navbarScroll">
                <Navbar.Brand  >Nabar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link eventKey='1' as={Link} to="/"><span className="text-light fw-bolder">Home</span></Nav.Link>
                    <Nav.Link eventKey='2' as={Link} to="/courtservices"><span className="text-light">Court Services</span></Nav.Link>
                    
                    <Nav.Link eventKey='4' as={Link} to="/login"><span className="text-light">login</span></Nav.Link>
                    <Nav.Link eventKey='5' as={Link} to="/contact"><span className="text-light">signup</span></Nav.Link>
                   
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header