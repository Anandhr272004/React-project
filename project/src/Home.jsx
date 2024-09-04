// import React, { useState } from "react";
// import { Row, Col, Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import sofa from "./Images/couch.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const navigate = useNavigate();

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="Home">
//       <div className="section">
//         <div className="navebar">
//           <Navbar expand="lg" className="px-3 navbar-custom">
//             <Container>
//               <Navbar.Brand href="/home" id="Brand">Furni.</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                   <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
//                   <Nav.Link href="/" className="nav-link-custom">Shop</Nav.Link>
//                   <Nav.Link href="/" className="nav-link-custom">About us</Nav.Link>
//                   <Nav.Link href="/" className="nav-link-custom">Blog</Nav.Link>
//                   <Nav.Link href="/" className="nav-link-custom">Contact us</Nav.Link>

//                   <Dropdown
//                     onMouseEnter={() => setShowSignIn(true)}
//                     onMouseLeave={() => setShowSignIn(false)}
//                     show={showSignIn}
//                     className="nav-link-custom"
//                   >
//                     <h5 variant="link" className="dropdown-toggle-custom">Sign in</h5>
//                     <Dropdown.Menu className="dropdown-menu-custom">
//                       <form className="px-4" onSubmit={onSignInSubmit}>
//                         <div className="form-group">
//                           <label htmlFor="email">Email address</label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             placeholder="youremail@example.com"
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password">Password</label>
//                           <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             placeholder="Password"
//                           />
//                         </div>
//                         <Button
//                           type="submit"
//                           className="btn btn-primary btn-block mt-3"
//                         >
//                           Sign in
//                         </Button>
//                       </form>
//                     </Dropdown.Menu>
//                   </Dropdown>

//                   <Nav.Link className="nav-link-custom" onClick={() => navigate("/Signup")}>
//                     Sign up
//                   </Nav.Link>
//                   <Nav.Link id="cart">
//                     <MdOutlineShoppingCart />
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>

//         <header className="header-section">
//           <Container>
//             <Row className="align-items-center">
//               <Col xs={12} md={6}>
//                 <h1 className="header-title">
//                   Modern Interior <br />
//                   Design Studio
//                 </h1>
//                 <p className="header-subtitle">
//                   Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
//                   <br /> velit. Aliquam vulputate velit imperdiet dolor tempor
//                   tristique.
//                 </p>
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

//dynamic code

// import React, { useState } from "react";
// import { Row, Col, Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import data from "./Navbar.json";
// import sofa from "./Images/couch.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const navigate = useNavigate();

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="Home">
//       <div className="section">
//         <div className="navebar">
//           <Navbar expand="lg" className="px-3 navbar-custom">
//             <Container>
//               <Navbar.Brand href="/home" id="Brand">Furni.</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                   {/* Map over the navbar data */}
//                   {data.navbar.map((item, index) => (
//                     <Nav.Link key={index} href={item.link} className="nav-link-custom">
//                     {item.label} </Nav.Link>
//                   ))}

//                   <Dropdown
//                     onMouseEnter={() => setShowSignIn(true)}
//                     onMouseLeave={() => setShowSignIn(false)}
//                     show={showSignIn}
//                     className="nav-link-custom"
//                   >
//                     <h5 variant="link" className="dropdown-toggle-custom">Sign in</h5>
//                     <Dropdown.Menu className="dropdown-menu-custom">
//                       <form className="px-4" onSubmit={onSignInSubmit}>
//                         <div className="form-group">
//                           <label htmlFor="email">Email address</label>
//                           <input type="email" className="form-control"   id="email"
//                             placeholder="youremail@example.com"  />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password">Password</label>
//                           <input  type="password" className="form-control" id="password" placeholder="Password" />
//                         </div>
//                         <Button type="submit"  className="btn btn-primary btn-block mt-3"  >
//                           Sign in </Button>
//                       </form>
//                     </Dropdown.Menu>
//                   </Dropdown>

//                   <Nav.Link className="nav-link-custom" onClick={() => navigate("/Signup")}>
//                     Sign up
//                   </Nav.Link>
//                   <Nav.Link id="cart">
//                     <MdOutlineShoppingCart />
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>

//         <header className="header-section">
//           <Container>
//             <Row className="align-items-center">
//               <Col xs={12} md={6}>
//                 <h1 className="header-title">
//                   {data.header.title.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line}  <br />
//                     </React.Fragment>
//                   ))}
//                   {data.header.titleone.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line}  <br />
//                     </React.Fragment>
//                   ))}
//                 </h1>
//                 <p className="header-subtitle">
//                   {data.header.subtitle.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line} <br />
//                     </React.Fragment>
//                   ))}
//                 </p>
//                 {/* Map over the buttons */}
//                 {data.header.buttons.map((button, index) => (
//                   <Button key={index} id={button.id}>
//                     {button.label}
//                   </Button>
//                 ))}
//               </Col>
//               <Col xs={12} md={6} className="text-center">
//                 <img src={sofa} alt={data.header.imageAlt} className="img-fluid" />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Home;

//adding offcanvas style

// import React, { useState } from "react";
// import { Row, Col, Navbar, Nav, Container, Button, Dropdown, Offcanvas } from "react-bootstrap";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import data from "./Navbar.json";
// import sofa from "./Images/couch.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showOffcanvas, setShowOffcanvas] = useState(false); // State to manage Offcanvas visibility
//   const navigate = useNavigate();

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   const handleOffcanvasClose = () => setShowOffcanvas(false);
//   const handleOffcanvasShow = () => setShowOffcanvas(true);

//   return (
//     <div className="Home">
//       <div className="section">
//         <div className="navebar">
//           <Navbar expand="lg" className="px-3 navbar-custom">
//             <Container>
//               <Navbar.Brand href="/home" id="Brand">Furni.</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleOffcanvasShow} /> {/* Show Offcanvas on toggle click */}
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                   {data.navbar.map((item, index) => (
//                     <Nav.Link key={index} href={item.link} className="nav-link-custom">
//                       {item.label}
//                     </Nav.Link>
//                   ))}

//                   <Dropdown
//                     onMouseEnter={() => setShowSignIn(true)}
//                     onMouseLeave={() => setShowSignIn(false)}
//                     show={showSignIn}
//                     className="nav-link-custom"
//                   >
//                     <h5 variant="link" className="dropdown-toggle-custom">Sign in</h5>
//                     <Dropdown.Menu className="dropdown-menu-custom">
//                       <form className="px-4" onSubmit={onSignInSubmit}>
//                         <div className="form-group">
//                           <label htmlFor="email">Email address</label>
//                           <input type="email" className="form-control"   id="email"
//                             placeholder="youremail@example.com"  />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password">Password</label>
//                           <input  type="password" className="form-control" id="password" placeholder="Password" />
//                         </div>
//                         <Button type="submit"  className="btn btn-primary btn-block mt-3"  >
//                           Sign in </Button>
//                       </form>
//                     </Dropdown.Menu>
//                   </Dropdown>

//                   <Nav.Link className="nav-link-custom" onClick={() => navigate("/Signup")}>
//                     Sign up
//                   </Nav.Link>
//                   <Nav.Link id="cart">
//                     <MdOutlineShoppingCart />
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>

//           {/* Offcanvas Component */}
//           <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="end"> {/* "end" for right-side offcanvas */}
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>Menu</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               {data.navbar.map((item, index) => (
//                 <Nav.Link key={index} href={item.link} className="nav-link-custom">
//                   {item.label}
//                 </Nav.Link>
//               ))}
//                <Dropdown
//                     onMouseEnter={() => setShowSignIn(true)}
//                     onMouseLeave={() => setShowSignIn(false)}
//                     show={showSignIn}
//                     className="nav-link-custom"
//                   >
//                     <h5 variant="link" className="dropdown-toggle-custom">Sign in</h5>
//                     <Dropdown.Menu className="dropdown-menu-custom">
//                       <form className="px-4" onSubmit={onSignInSubmit}>
//                         <div className="form-group">
//                           <label htmlFor="email">Email address</label>
//                           <input type="email" className="form-control"   id="email"
//                             placeholder="youremail@example.com"  />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password">Password</label>
//                           <input  type="password" className="form-control" id="password" placeholder="Password" />
//                         </div>
//                         <Button type="submit"  className="btn btn-primary btn-block mt-3"  >
//                           Sign in </Button>
//                       </form>
//                     </Dropdown.Menu>
//                   </Dropdown>

//                   <Nav.Link className="nav-link-custom" onClick={() => navigate("/Signup")}>
//                     Sign up
//                   </Nav.Link>
//                   <Nav.Link id="cart">
//                     <MdOutlineShoppingCart />
//                   </Nav.Link>

//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>

//         <header className="header-section">
//           <Container>
//             <Row className="align-items-center">
//               <Col xs={12} md={6}>
//                 <h1 className="header-title">
//                   {data.header.title.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line}  <br />
//                     </React.Fragment>
//                   ))}
//                   {data.header.titleone.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line}  <br />
//                     </React.Fragment>
//                   ))}
//                 </h1>
//                 <p className="header-subtitle">
//                   {data.header.subtitle.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line} <br />
//                     </React.Fragment>
//                   ))}
//                 </p>
//                 {data.header.buttons.map((button, index) => (
//                   <Button key={index} id={button.id}>
//                     {button.label}
//                   </Button>
//                 ))}
//               </Col>
//               <Col xs={12} md={6} className="text-center">
//                 <img src={sofa} alt={data.header.imageAlt} className="img-fluid" />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Home;

//only offcanvas style

// import React, { useState } from "react";
// import { Row, Col, Navbar, Nav, Container, Button, Dropdown, Offcanvas } from "react-bootstrap";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import data from "./Navbar.json";
// import sofa from "./Images/couch.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const navigate = useNavigate();

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   const handleOffcanvasClose = () => setShowOffcanvas(false);
//   const handleOffcanvasShow = () => setShowOffcanvas(true);

//   return (
//     <div className="Home">
//       <div className="section">
//         <div className="navebar">
//           <Navbar expand="lg" className="px-3 navbar-custom">
//             <Container>
//               <Navbar.Brand href="/home" id="Brand">Furni.</Navbar.Brand>
//               <Button variant="outline-secondary" onClick={handleOffcanvasShow}>
//                 Menu
//               </Button> {/* Replace Navbar.Toggle with a custom button */}

//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                   {data.navbar.map((item, index) => (
//                     <Nav.Link key={index} href={item.link} className="nav-link-custom">
//                       {item.label}
//                     </Nav.Link>
//                   ))}

//                   <Dropdown
//                     onMouseEnter={() => setShowSignIn(true)}
//                     onMouseLeave={() => setShowSignIn(false)}
//                     show={showSignIn}
//                     className="nav-link-custom"
//                   >
//                     <h5 variant="link" className="dropdown-toggle-custom">Sign in</h5>
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

//                   <Nav.Link className="nav-link-custom" onClick={() => navigate("/Signup")}>
//                     Sign up
//                   </Nav.Link>
//                   <Nav.Link id="cart">
//                     <MdOutlineShoppingCart />
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>

//           {/* Offcanvas Component */}
//           <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="end">
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>Menu</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               {data.navbar.map((item, index) => (
//                 <Nav.Link key={index} href={item.link} className="nav-link-custom">
//                   {item.label}
//                 </Nav.Link>
//               ))}
//               <Dropdown
//                 onMouseEnter={() => setShowSignIn(true)}
//                 onMouseLeave={() => setShowSignIn(false)}
//                 show={showSignIn}
//                 className="nav-link-custom"
//               >
//                 <h5 variant="link" className="dropdown-toggle-custom">Sign in</h5>
//                 <Dropdown.Menu className="dropdown-menu-custom">
//                   <form className="px-4" onSubmit={onSignInSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="email">Email address</label>
//                       <input type="email" className="form-control" id="email" placeholder="youremail@example.com" />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="password">Password</label>
//                       <input type="password" className="form-control" id="password" placeholder="Password" />
//                     </div>
//                     <Button type="submit" className="btn btn-primary btn-block mt-3">
//                       Sign in
//                     </Button>
//                   </form>
//                 </Dropdown.Menu>
//               </Dropdown>

//               <Nav.Link className="nav-link-custom" onClick={() => navigate("/Signup")}>
//                 Sign up
//               </Nav.Link>
//               <Nav.Link id="cart">
//                 <MdOutlineShoppingCart />
//               </Nav.Link>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>

//         <header className="header-section">
//           <Container>
//             <Row className="align-items-center">
//               <Col xs={12} md={6}>
//                 <h1 className="header-title">
//                   {data.header.title.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line} <br />
//                     </React.Fragment>
//                   ))}
//                   {data.header.titleone.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line} <br />
//                     </React.Fragment>
//                   ))}
//                 </h1>
//                 <p className="header-subtitle">
//                   {data.header.subtitle.split("\n").map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line} <br />
//                     </React.Fragment>
//                   ))}
//                 </p>
//                 {data.header.buttons.map((button, index) => (
//                   <Button key={index} id={button.id}>
//                     {button.label}
//                   </Button>
//                 ))}
//               </Col>
//               <Col xs={12} md={6} className="text-center">
//                 <img src={sofa} alt={data.header.imageAlt} className="img-fluid" />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Container,
  Button,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import data from "./Navbar.json";
import sofa from "./Images/couch.png";
import { useNavigate } from "react-router-dom";

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
                id="hamburger-button" className="three"
              > <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  src={sofa}
                  alt={data.header.imageAlt}
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Home;
