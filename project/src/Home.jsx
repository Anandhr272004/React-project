import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './Navbar.json';
import { IoIosContact } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import sectionone from"./Sectionone.json";
const NavBar=()=> {
  return (
    <div className='Home'>
      <div className='nave'>
        <Navbar expand="lg"  >
          <Container>
            {/* <Row>
            <Col> */}
            <Navbar.Brand href="/" id='furni'>Furni.</Navbar.Brand>
            {/* </Col>
            <Col> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {data.map((item) => (
                  <span className='sec'>
                    <Nav.Link key={item.id} id='name'>{item.name}</Nav.Link>
                  </span>
                ))}
                <Nav.Link id='contactone'><IoIosContact /></Nav.Link>
                <Nav.Link id='contactone'><CiShoppingCart /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* </Col>
          </Row> */}
          </Container>
        </Navbar>
      </div>

      <div className='sectionone'>
        <Container>
          <Row>
            <Col lg={4} md={5} className='sectiona'>
            {sectionone.map((sectionone=>(
              <div key={sectionone.id}>
              <p className='sectionab'>{sectionone.name}</p>
              <p>{sectionone.title}</p>
              </div>
            )))}
            </Col>
            <Col lg={8} className='sectionb'>
            <img src="D:\React-project\project\src\Images\couch.png"  />
            </Col>
          </Row>

        </Container>

      </div>








    </div>





  );
}

export default NavBar;
