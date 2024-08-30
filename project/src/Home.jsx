import React, { useState } from 'react';
import { Row, Col, Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import sofa from './Images/couch.png';
import data from './Navbar.json';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const navigate = useNavigate();

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
                  
                    <Nav.Link  href="/" className="nav-link-custom">Home</Nav.Link>
                    <Nav.Link href="/shop" className="nav-link-custom">Shop</Nav.Link>
                    <Nav.Link href="/aboutus" className="nav-link-custom">About US</Nav.Link>
                    <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
                    <Nav.Link href="/blog" className="nav-link-custom">Blog</Nav.Link>
                    <Nav.Link href="/contactus" className="nav-link-custom">Contact US</Nav.Link>
                 
                  <Nav.Link  className="nav-link-custom"
                    onClick={() => navigate('/Signin')}>Sign in</Nav.Link>
                  <Nav.Link  className="nav-link-custom"
                   onClick={()=> navigate('/Signup')}>Sign up</Nav.Link>
                  <Nav.Link  id="cart"><MdOutlineShoppingCart /></Nav.Link>
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


// import React from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// const data = {
//   brand: "Furni.",
//   navigation: [
//     { name: "Home", href: "/", active: true },
//     { name: "Shop", href: "/shop", active: false },
//     { name: "About us", href: "/aboutus", active: false },
//     { name: "Services", href: "/services", active: false },
//     { name: "Blog", href: "/blog", active: false },
//     { name: "Contact us", href: "/contactus", active: false }
//   ],
//   hero: {
//     title: "Modern Interior Design Studio",
//     description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
//     buttons: [
//       { label: "Shop Now", href: "/shop", style: "btn-warning" },
//       { label: "Explore", href: "/explore", style: "btn-outline-secondary" }
//     ],
//     image: "path_to_your_image.png"
//   }
// };

// const Home = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar expand="lg" bg="primary" variant="dark" className="px-3">
//         <Container>
//           <Navbar.Brand href="/">{data.brand}</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               {data.navigation.map((item, index) => (
//                 <Nav.Link key={index} href={item.href} active={item.active}>
//                   {item.name}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Hero Section */}
//       <div className="hero-section" style={{ backgroundColor: '#3c5845', color: '#fff', padding: '3rem 1rem' }}>
//         <Container>
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h1>{data.hero.title}</h1>
//               <p>{data.hero.description}</p>
//               <div className="mt-4">
//                 {data.hero.buttons.map((button, index) => (
//                   <Button
//                     key={index}
//                     href={button.href}
//                     className={`mr-2 ${button.style}`}
//                   >
//                     {button.label}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//             <div className="col-md-6 text-right">
//               <img src={data.hero.image} alt="Hero" className="img-fluid" />
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Home;

