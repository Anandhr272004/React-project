import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './Navbar.json';
import { IoIosContact } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import sectionone from "./Sectionone.json";
const NavBar = () => {
  return (
    <div className='Home'>
      <div className='nave'>
        <Navbar expand="lg"  >
          <Container>
            <Row>
            <Col xl={7}lg={7}md={6}sm={6} >
            <Navbar.Brand href="/" id='furni'>Furni.</Navbar.Brand>
            </Col>
            <Col xl={5}lg={5} md={6} sm={6}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {data.map((data)=>(
                <span className='sec' key={data.id}>
                <Nav.Link id='name'>{data.name}</Nav.Link>   
              </span>
               ))}
                   <Nav.Link id='contactone'><IoIosContact /></Nav.Link>
                <Nav.Link id='contactone'><CiShoppingCart /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Col>
          </Row>
          </Container>
        </Navbar>
      </div>


      {/* <div className='sectionone'>
        <Container>
          <Row> */}
            {/* <Col lg={4} md={4} sm={4} className='sectiona'>
              {sectionone.map((sectionone => (
                <div key={sectionone.id}>
                  <p className='sectionab'>{sectionone.name}</p>
                  <p>{sectionone.title}</p>
                </div>
              )))}
            </Col>
            <Col lg={8} md={8} sm={8} className='sectionb'>
              <img src="couch.png" /> */}
            {/* </Col>/ */}
          {/* </Row>

        </Container>

      </div> */}
    </div>

  );
}

export default NavBar;
