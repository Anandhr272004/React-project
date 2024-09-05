import React, { useState } from 'react';
import { Row, Col, Navbar, Nav, Container, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import sofa from './Images/couch.png';
import data from './Home.json';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const { register: registerSignIn, handleSubmit: handleSignInSubmit, formState: { errors: errorsSignIn } } = useForm();
  const { register: registerSignUp, handleSubmit: handleSignUpSubmit, formState: { errors: errorsSignUp } } = useForm();

  const onSignInSubmit = (data) => {
    console.log('Sign In Data:', data);
    // Handle sign in logic here
  };

  const onSignUpSubmit = (data) => {
    console.log('Sign Up Data:', data);
    // Handle sign up logic here
  };

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
                    <Nav.Link href="/" className="nav-link-custom" key={item.id}>{item.name}</Nav.Link>
                  ))}

                  {/* Sign In Dropdown */}
                
                  <Dropdown
                    onMouseEnter={() => setShowSignIn(true)}
                    onMouseLeave={() => setShowSignIn(false)}
                    show={showSignIn}
                    className="nav-link-custom"
                  >
                    <Dropdown.Toggle variant="link" className="dropdown-toggle-custom ">
                      Sign in
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-custom">
                      <form className="px-4 py-3" onSubmit={handleSignInSubmit(onSignInSubmit)}>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input type="email"  className="form-control" id="email" placeholder="youremail@example.com"
                            {...registerSignIn('email', { required: 'Email is required' })}   />
                          {errorsSignIn.email && <p className="text-danger">{errorsSignIn.email.message}</p>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            {...registerSignIn('password', { required: 'Password is required' })}
                          />
                          {errorsSignIn.password && <p className="text-danger">{errorsSignIn.password.message}</p>}
                        </div>
                        <Button type="submit" className="btn btn-primary btn-block mt-3">Sign in</Button>
                      </form>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Sign Up Dropdown */}
                  <Dropdown
                    onMouseEnter={() => setShowSignUp(true)}
                    onMouseLeave={() => setShowSignUp(false)}
                    show={showSignUp}
                    className="
                    sigupone"
                  >
                    <Dropdown.Toggle variant="link" className="dropdown-toggle-custom">
                      Sign up
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="
                    siguponetwo">
                      <form className="px-4 py-3" onSubmit={handleSignUpSubmit(onSignUpSubmit)}>
                        <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            {...registerSignUp('username', { required: 'Username is required' })}
                          />
                          {errorsSignUp.username && <p className="text-danger">{errorsSignUp.username.message}</p>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="email@example.com"
                            {...registerSignUp('email', { required: 'Email is required' })}
                          />
                          {errorsSignUp.email && <p className="text-danger">{errorsSignUp.email.message}</p>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            {...registerSignUp('password', { required: 'Password is required' })}
                          />
                          {errorsSignUp.password && <p className="text-danger">{errorsSignUp.password.message}</p>}
                        </div>
                        <Button type="submit" className="btn btn-primary btn-block mt-3">Sign up</Button>
                      </form>
                    </Dropdown.Menu>
                  </Dropdown>
        

                  <Nav.Link id="cart"><MdOutlineShoppingCart /></Nav.Link>
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
                    <Nav.Link href="/signin" className="nav-link-custom">Sign in</Nav.Link>
                    <Nav.Link href="/cart" className="cart"><MdOutlineShoppingCart /></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
                   
            </Container>
          </Navbar>
        </div>

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

export default Login;
