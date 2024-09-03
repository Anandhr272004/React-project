import React, { useState } from "react";
import { Row, Col, Navbar, Nav, Container, Offcanvas, Button, Dropdown } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import sofa from "./Images/couch.png";
import data from "./Navbar.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="Home">
      <div className="section">
        <div className="navebar">
          <Navbar expand="md" className="navbar-custom">
            <Container>
              <Navbar.Brand href="#home" id="Brand">
                Furni.
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                onClick={handleShow}
                className="d-md-none"
              />
              <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex">
                <Nav className="ml-auto">
                  {/* {data.map((item) => ( */}
                    <Nav.Link href="/" className="nav-link-custom" >Home</Nav.Link>
                    <Nav.Link href="/" className="nav-link-custom" >Shop</Nav.Link>
                    <Nav.Link href="/" className="nav-link-custom" >About us</Nav.Link>
                    <Nav.Link href="/" className="nav-link-custom" >Blog</Nav.Link>
                    <Nav.Link href="/" className="nav-link-custom" > Contact us </Nav.Link>
                  {/* ))} */}
                   {/* <Nav.Link  className="nav-link-custom" onClick={() => navigate("/Signin")} >
                    Sign in
                  </Nav.Link> */}
                  <Dropdown
                    onMouseEnter={() => setShowSignIn(true)}
                    onMouseLeave={() => setShowSignIn(false)}
                    show={showSignIn}
                    className="nav-link-custom"
                  >
                    <h5
                      variant="link"
                      className="dropdown-toggle-custom" >
                      Sign in
                    </h5>
                    <Dropdown.Menu className="dropdown-menu-custom">
                      <form className="px-4" onSubmit={onSignInSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="youremail@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="btn btn-primary btn-block mt-3"
                        >
                          Sign in
                        </Button>
                      </form>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link  className="nav-link-custom" onClick={() => navigate("/Signup")} >
                    Sign up
                  </Nav.Link>
                  <Nav.Link id="cart"> <MdOutlineShoppingCart />  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Offcanvas Menu for screens smaller than 768px */}
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className="custom-offcanvas d-md-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                {data.map((item) => (
                  <Nav.Link href="/" className="nav-link-custom" key={item.id}>
                    {item.name}
                  </Nav.Link>
                ))}
                <Dropdown
                  onMouseEnter={() => setShowSignIn(true)}
                  onMouseLeave={() => setShowSignIn(false)}
                  show={showSignIn}
                  className="nav-link-custom"
                >
                  <h5
                    variant="link"
                    className="dropdowntoggle"
                  >
                    Sign in
                  </h5>
                  <Dropdown.Menu className="dropdown-menu-custom">
                    <form className="px-4" onSubmit={onSignInSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="youremail@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="btn btn-primary btn-block mt-3"
                      >
                        Sign in
                      </Button>
                    </form>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link
                  className="nav-link-custom"
                  onClick={() => navigate("/Signup")}
                >
                  Sign up
                </Nav.Link>
                <Nav.Link id="cart">
                  <MdOutlineShoppingCart />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <header className="header-section">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <h1 className="header-title">
                  Modern Interior <br />
                  Design Studio
                </h1>
                <p className="header-subtitle">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet
                  <br /> velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
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
