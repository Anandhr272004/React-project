import React, { useState } from 'react';
import { Row, Col, Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
// import{ useNavigate} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import sofa from './Images/couch.png';
import data from './Navbar.json';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const Navgiate=useNavigate();

  return (
    <div className="Home">
      <div className='section'>
        <div className='navebar'>
          <Navbar expand="md" className="navbar-custom">
            <Container>

              <Navbar.Brand id='Brand'>Furni.</Navbar.Brand>

              {/* Only show toggle button on mobile */}
              <Navbar.Toggle className="d-md-none" onClick={() => setIsOpen(true)}>
                <FaBars />
              </Navbar.Toggle>

              {/* Hide this Nav on mobile */}
              <Navbar.Collapse id="navbar-nav" className="d-none d-md-flex ">

                <Nav className="ml-auto">
                  {data.map((item) => (
                    <Nav.Link key={item.id} href="/" className="nav-link-custom">{item.name}</Nav.Link>
                  ))}
                  <Nav.Link href="/Sigin" className="nav-link-custom">Sign in</Nav.Link>
                  <Nav.Link href="/Sigup" className="nav-link-custom">Sign up</Nav.Link>
                  <Nav.Link href="/cart" id="cart"><MdOutlineShoppingCart /></Nav.Link>
                </Nav>

              </Navbar.Collapse>

              {/* Offcanvas only for mobile */}
              <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="end" className="custom-offcanvas">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav>
                    {data.map((item) => (
                      <Nav.Link key={item.id} href="/" className="nav-link-custom">{item.name}</Nav.Link>
                    ))}
                    <Nav.Link href="/login" className="nav-link-custom">Login</Nav.Link>
                    <Nav.Link href="/sigin" className="nav-link-custom">Sign in</Nav.Link>
                    <Nav.Link href="/cart" className="cart"><MdOutlineShoppingCart /></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>

            </Container>
          </Navbar>
        </div>

        {/* // */}
      

        {/* //section1 */}

        <header className="header-section">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <h1 className="header-title">Modern Interior <br />Design Studio</h1>
                <p className="header-subtitle">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet<br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <Button id="shop">Shop Now</Button>
                <Button id="explore">Explore</Button>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={sofa} alt="Sofa" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Home;



