import React, { useState } from "react";
import { Row, Col, Navbar, Nav, Container, Button, Dropdown, Offcanvas, Card } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import data from "./Navbar.json";
import { useNavigate } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const onSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <div className="Home">
      <div className="section">
        <div className="navebar">
          <Navbar expand="lg" className="px-3 navbar-custom">
            <Container>
              <Navbar.Brand href="/home" id="Brand">
                Furni.
              </Navbar.Brand>
              {/* Hamburger Toggle Button */}
              <Button
                variant="outline-secondary"
                onClick={handleOffcanvasShow}
                id="hamburger-button"
                className="three"
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  {data.navbar.map((item, index) => (
                    <Nav.Link
                      key={index}
                      href={item.link}
                      className="nav-link-custom"
                    >
                      {item.label}
                    </Nav.Link>
                  ))}

                  <Dropdown
                    onMouseEnter={() => setShowSignIn(true)}
                    onMouseLeave={() => setShowSignIn(false)}
                    show={showSignIn}
                    className="nav-link-custom"
                  >
                    <h5 variant="link" className="siginone">
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
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            placement="end"
            id="offcanvasstyle"
            className="custom-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="navbar-custom">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {data.navbar.map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.link}
                  className="nav-link-custom"
                  id="all"
                >
                  {item.label}
                </Nav.Link>
              ))}
              <Dropdown
                onMouseEnter={() => setShowSignIn(true)}
                onMouseLeave={() => setShowSignIn(false)}
                show={showSignIn}
                className="nav-link-custom"
              >
                <h5 variant="link" className="siginone" id="all">
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
                id="all"
              >
                Sign up
              </Nav.Link>
              <Nav.Link id="cart">
                <MdOutlineShoppingCart />
              </Nav.Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <header className="header-section">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <h1 className="header-title">
                  {data.header.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line} <br />
                    </React.Fragment>
                  ))}
                  {data.header.titleone.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line} <br />
                    </React.Fragment>
                  ))}
                </h1>
                <p className="header-subtitle">
                  {data.header.subtitle.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line} <br />
                    </React.Fragment>
                  ))}
                </p>
                {data.header.buttons.map((button, index) => (
                  <Button key={index} id={button.id}>
                    {button.label}
                  </Button>
                ))}
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img
                  src={data.header.image}
                  alt={data.header.imageAlt}
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* //section2 */}
      <div className="section-two">
        <Container className="section2">
          <Row>
            <Col lg={3} md={3} sm={12} className="section2one">
              <h2 className="craft">Crafted with</h2>
              <h2 className="excellent">excellent material.</h2>
              <p className="donec">
                Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <Button id="exploreone">Explore</Button>
            </Col>

            {/* Product Cards */}


            {data.products.map((product) => (
              <Col lg={3} md={3} sm={6} xs={12} className="productcol" key={product.id}>
                <Card className="productcard" id="procard">
                  <div className="card-img-overlay">
                    <span className="hover-icon"><FaCirclePlus /></span> 
                  </div>
                  <Card.Img variant="top" className="img-fluid" src={product.image} alt={product.title} />
                  <Card.Body>
                    <Card.Title className="nordic">{product.title}</Card.Title>
                    <Card.Text className="nordic1">{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
          </Row>
        </Container>
      </div>




    </div>
  );
};

export default Home;
