// import React, { useState } from 'react';
// import { Row, Col, Navbar, Nav, Container, Offcanvas, Button, Dropdown } from 'react-bootstrap';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaBars } from 'react-icons/fa';
// import sofa from './Images/couch.png';
// import data from './Navbar.json';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const navigate = useNavigate();

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="Home">
//       <div className='section'>
//         <div className='navebar'>
//           <Navbar expand="md" className="navbar-custom">
//             <Container>
//               <Navbar.Brand id='Brand'>Furni.</Navbar.Brand>

//               {/* Toggle button for screens below 768px */}
//               <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsOpen(!isOpen)}>
//                 <FaBars />
//               </Navbar.Toggle>

//               <Navbar.Collapse id="navbar-nav" className="d-md-flex">
//                 <Nav className="ml-auto">
//                   {data.map((item) => (
//                     <Nav.Link href="/" className="nav-link-custom" key={item.id}>{item.name}</Nav.Link>
//                   ))}
//                   <Dropdown
//                     onMouseEnter={() => setShowSignIn(true)}
//                     onMouseLeave={() => setShowSignIn(false)}
//                     show={showSignIn}
//                     className="nav-link-custom"
//                   >
//                     <Dropdown.Toggle variant="link" className="dropdown-toggle-custom">
//                       Sign in
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="dropdown-menu-custom">
//                       <form className="px-4" onSubmit={onSignInSubmit}>
//                         <div className="form-group">
//                           <label htmlFor="email">Email address</label>
//                           <input type="email" className="form-control" id="email" placeholder="youremail@example.com" />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password">Password</label>
//                           <input type="password" className="form-control" id="password" placeholder="Password" />
//                         </div>
//                         <Button type="submit" className="btn btn-primary btn-block mt-3">
//                           Sign in
//                         </Button>
//                       </form>
//                     </Dropdown.Menu>
//                   </Dropdown>

//                   <Nav.Link className="nav-link-custom" onClick={() => navigate('/Signup')}>Sign up</Nav.Link>
//                   <Nav.Link id="cart"><MdOutlineShoppingCart /></Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>

//               {/* Offcanvas for screens below 768px */}
//               <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="end" className="custom-offcanvas">
//                 <Offcanvas.Header closeButton>
//                   <Offcanvas.Title>Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                   <Nav>
//                     {data.map((item) => (
//                       <Nav.Link key={item.id} href="/" className="nav-link-custom">{item.name}</Nav.Link>
//                     ))}

//                     <Dropdown
//                       onMouseEnter={() => setShowSignIn(true)}
//                       onMouseLeave={() => setShowSignIn(false)}
//                       show={showSignIn}
//                       className="nav-link-custom"
//                     >
//                       <Dropdown.Toggle variant="link" className="dropdown-toggle-custom">
//                         Sign in
//                       </Dropdown.Toggle>
//                       <Dropdown.Menu className="dropdown-menu-custom">
//                         <form className="px-4" onSubmit={onSignInSubmit}>
//                           <div className="form-group">
//                             <label htmlFor="email">Email address</label>
//                             <input
//                               type="email"
//                               className="form-control"
//                               id="email"
//                               placeholder="youremail@example.com"
//                             />
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <input
//                               type="password"
//                               className="form-control"
//                               id="password"
//                               placeholder="Password"
//                             />
//                           </div>
//                           <Button type="submit" className="btn btn-primary btn-block mt-3">
//                             Sign in
//                           </Button>
//                         </form>
//                       </Dropdown.Menu>
//                     </Dropdown>

//                     <Nav.Link href="/signup" className="nav-link-custom" onClick={() => navigate('/Signup')}>Sign up</Nav.Link>
//                     <Nav.Link href="/cart" className="cart"><MdOutlineShoppingCart /></Nav.Link>
//                   </Nav>
//                 </Offcanvas.Body>
//               </Offcanvas>
//             </Container>
//           </Navbar>
//         </div>

//         <header className="header-section">
//           <Container>
//             <Row className="align-items-center">
//               <Col xs={12} md={6}>
//                 <h1 className="header-title">Modern Interior <br />Design Studio</h1>
//                 <p className="header-subtitle">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet<br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
//                 <Button id="shop">Shop Now</Button>
//                 <Button id="explore">Explore</Button>
//               </Col>
//               <Col xs={12} md={6} className="text-center">
//                 <img src={sofa} alt="Sofa" className="img-fluid" />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React, { useState } from 'react';
import { Row, Col, Navbar, Nav, Container, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import sofa from './Images/couch.png';
import data from './Navbar.json';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  const onSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="Home">
      <div className='section'>
        <div className='navebar'>
          <Navbar 
            expand="md" 
            className="navbar-custom" 
            style={{
              backgroundColor: '#3c5845',
              padding: '1rem 2rem',
              zIndex: 10
            }}
          >
            <Container>
              <Navbar.Brand id='Brand' style={{ color: '#fff', fontSize: '35px', fontWeight: '600' }}>Furni.</Navbar.Brand>

              {/* Toggle button for screens below 768px */}
              <Navbar.Toggle 
                aria-controls="navbar-nav" 
                onClick={() => setIsOpen(!isOpen)}
                style={{ display: 'none' }}
              >
                <FaBars />
              </Navbar.Toggle>

              <Navbar.Collapse id="navbar-nav" className="d-md-flex">
                <Nav className="ml-auto">
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
                    <Dropdown.Toggle variant="link" className="dropdown-toggle-custom">
                      Sign in
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-custom">
                      <form className="px-4" onSubmit={onSignInSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input type="email" className="form-control" id="email" placeholder="youremail@example.com" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <Button type="submit" className="btn btn-primary btn-block mt-3">
                          Sign in
                        </Button>
                      </form>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Nav.Link className="nav-link-custom" onClick={() => navigate('/Signup')}>Sign up</Nav.Link>
                  <Nav.Link id="cart"><MdOutlineShoppingCart /></Nav.Link>
                </Nav>
              </Navbar.Collapse>

              {/* Offcanvas for screens below 768px */}
              <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="end" className="custom-offcanvas">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav>
                    {data.map((item) => (
                      <Nav.Link key={item.id} href="/" className="nav-link-custom">
                        {item.name}
                      </Nav.Link>
                    ))}

                    <Dropdown
                      onMouseEnter={() => setShowSignIn(true)}
                      onMouseLeave={() => setShowSignIn(false)}
                      show={showSignIn}
                      className="nav-link-custom"
                    >
                      <Dropdown.Toggle variant="link" className="dropdown-toggle-custom">
                        Sign in
                      </Dropdown.Toggle>
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
                          <Button type="submit" className="btn btn-primary btn-block mt-3">
                            Sign in
                          </Button>
                        </form>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link href="/signup" className="nav-link-custom" onClick={() => navigate('/Signup')}>Sign up</Nav.Link>
                    <Nav.Link href="/cart" className="cart"><MdOutlineShoppingCart /></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
          </Navbar>
        </div>

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
   