import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMdContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import sofa from './Images/couch.png'
import data from './Navbar.json'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Home'>
      <div className='nave'>
        <Navbar expand="md" bg="teal" variant="dark" className="shadow-md">
          <Container>
            <Navbar.Brand href="#" id='furni' >Furni.</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="text-2xl text-neutral-50" /> : <FaBars className="text-2xl text-neutral-50" />}
            </Navbar.Toggle>

            <Navbar.Collapse id="navbar-nav" className={isOpen ? 'show' : ''}>
              <Nav className="ml-auto">
                {data.map((data => (
                  <span key={data.id}>
                    <Nav.Link href="/"id='name'>{data.name}</Nav.Link>
                  </span>
                )))}
                <Nav.Link href="#" id='contactone'><IoMdContact /></Nav.Link>
                <Nav.Link href="#" id='contactone'><MdOutlineShoppingCart /></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


<header className="header-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="header-title">Modern Interior <br></br>Design Studio</h1>
            <p className="header-subtitle">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Button id="shop">Shop Now</Button>
            <Button id="explore">Explore</Button>
          </Col>
          <Col md={6}>
            <img src={sofa} alt="Sofa" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </header>

    </div>
  );
};

export default Home;

