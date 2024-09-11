import React, { useState } from "react";
import { Container, Button, Navbar, Nav, Dropdown, Offcanvas } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLocation, NavLink } from "react-router-dom";  // Import NavLink from react-router-dom
import data from "./Home.json";
import { useNavigate } from "react-router-dom";
import './Navebar.css';

const Navebar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  const onSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
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
                <Link
                  to={item.link}
                  className={`activehome ${location.pathname === item.link ? "active-link" : ""}`}>
                  {item.label}
                </Link>

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
                      className="btn btn-primary btn-block mt-3  "
                    >
                      Sign in
                    </Button>
                  </form>
                </Dropdown.Menu>
              </Dropdown>

              <span className="customline">|</span>

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
            <Link
            to={item.link}
            className={`activehome ${location.pathname === item.link ? "active-link" : ""}`}>
            {item.label}
          </Link>
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

          <NavLink
            className="nav-link-custom"
            onClick={() => navigate("/Signup")}
            id="all"
          >
            Sign up
          </NavLink>
          <Nav.Link id="cart">
            <MdOutlineShoppingCart />
          </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navebar;

















