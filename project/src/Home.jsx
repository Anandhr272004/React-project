// 

//   );
// };

// export default Home;

// section1

import React, { useState } from 'react';
import { Row, Col, Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import sofa from './Images/couch.png';
import data from './Navbar.json';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Home">
      <div className='section'>
        <Navbar expand="md" className="navbar-custom">
          <Container>
            <Navbar.Brand id='Brand'>Furni.</Navbar.Brand>
            {/* Only show toggle button on mobile */}
            <Navbar.Toggle className="d-md-none" onClick={() => setIsOpen(true)}>
              <FaBars />
            </Navbar.Toggle>

            {/* Hide this Nav on mobile */}
            <Navbar.Collapse id="navbar-nav" className="d-none d-md-flex">
              <Nav className="ml-auto">
                {data.map((item) => (
                  <Nav.Link key={item.id} href="/" className="nav-link-custom">{item.name}</Nav.Link>
                ))}
                <Nav.Link href="#" className="nav-link-custom">Login</Nav.Link>
                <Nav.Link href="#" className="nav-link-custom">Sign in</Nav.Link>
                <Nav.Link href="#" id="cart"><MdOutlineShoppingCart /></Nav.Link>
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
                  <Nav.Link href="#" className="nav-link-custom">Login</Nav.Link>
                  <Nav.Link href="#" className="nav-link-custom">Sign in</Nav.Link>
                  <Nav.Link href="#" className="cart"><MdOutlineShoppingCart /></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>

{/* //section1 */}

        <header className="header-section">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <h1 className="header-title">Modern Interior <br />Design Studio</h1>
                <p className="header-subtitle">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet<br  /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
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

//section 2


// import React, { useState } from 'react';
// import { Row, Col, Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaBars } from 'react-icons/fa';
// import sofa from './Images/couch.png';
// import data from './Navbar.json';

// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="Home" style={{ backgroundColor: '#3c5845' }}>
//       {/* Navbar */}
//       <Navbar expand="md" style={{ backgroundColor: '#3c5845' }} variant="dark">
//         <Container>
//           <Navbar.Brand href="#" style={{ color: '#fff', fontSize: '28px', fontWeight: '600' }}>Furni.</Navbar.Brand>
//           <Navbar.Toggle onClick={() => setIsOpen(true)}>
//             <FaBars style={{ color: '#fff' }} />
//           </Navbar.Toggle>
//           <Navbar.Collapse id="navbar-nav" className="d-none d-md-flex justify-content-end">
//             <Nav>
//               {data.map((item) => (
//                 <Nav.Link key={item.id} href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginRight: '20px' }}>
//                   {item.name}
//                 </Nav.Link>
//               ))}
//               <Nav.Link href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginRight: '20px' }}>Login</Nav.Link>
//               <Nav.Link href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginRight: '20px' }}>Sign in</Nav.Link>
//               <Nav.Link href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginRight: '20px' }}>
//                 <MdOutlineShoppingCart />
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>

//           <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="end" style={{ backgroundColor: '#3c5845', color: '#fff' }}>
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>Menu</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav>
//                 {data.map((item) => (
//                   <Nav.Link key={item.id} href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginBottom: '20px' }}>
//                     {item.name}
//                   </Nav.Link>
//                 ))}
//                 <Nav.Link href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginBottom: '20px' }}>Login</Nav.Link>
//                 <Nav.Link href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginBottom: '20px' }}>Sign in</Nav.Link>
//                 <Nav.Link href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', marginBottom: '20px' }}>
//                   <MdOutlineShoppingCart />
//                 </Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </Container>
//       </Navbar>

//       {/* Header Section */}
//       <header style={{ padding: '60px 0', color: '#fff' }}>
//         <Container fluid>
//           <Row className="align-items-center">
//             <Col xs={12} md={6}>
//               <h1 style={{ fontSize: '52px', fontWeight: '700', marginBottom: '20px' }}>
//                 Modern Interior <br />Design Studio
//               </h1>
//               <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '30px' }}>
//                 Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
//               </p>
//               <Button style={{ backgroundColor: '#ffdd57', color: 'black', borderRadius: '30px', padding: '10px 20px', border: 'none', marginRight: '10px' }}>
//                 Shop Now
//               </Button>
//               <Button style={{ backgroundColor: 'transparent', color: 'white', borderRadius: '30px', padding: '10px 20px', border: '2px solid gray' }}>
//                 Explore
//               </Button>
//             </Col>
//             <Col xs={12} md={6} className="text-center">
//               <img src={sofa} alt="Sofa" style={{ maxWidth: '100%', height: 'auto' }} />
//             </Col>
//           </Row>
//         </Container>
//       </header>
//     </div>
//   );
// };

// export default Home;
