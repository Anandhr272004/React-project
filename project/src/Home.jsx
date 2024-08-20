import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './Navbar.json';
import { IoIosContact } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

function NavBar() {
  return (
    <div className='one'>
      <Navbar expand="lg"  >
        <Container  >
      
          <Navbar.Brand href="/" id='furni'>Furni.</Navbar.Brand>
       
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            {/* <div id='sec'> */}
            <Navbar.Collapse id="basic-navbar-nav">
      
              <Nav className="me-auto">
              
                {data.map((item) => (
                  <Nav.Link key={item.id} id='name'>{item.name}</Nav.Link>
                ))}
              
                <Nav.Link id='contactone'><IoIosContact /></Nav.Link>
                <Nav.Link id='contactone'><CiShoppingCart /></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          {/* </div> */}
        </Container>
      </Navbar>
    </div>


  );
}

export default NavBar;

