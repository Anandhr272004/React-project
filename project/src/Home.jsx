
///offcanvassss2  
// left to right


// import React, { useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { IoMdContact } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaBars } from 'react-icons/fa';
// import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import sofa from './Images/couch.png';
// import data from './Navbar.json';

// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='Home'>
//       <div className='section'>
//         <div className='nave'>
//           <Navbar expand="md" bg="teal" variant="dark" className="shadow-md">
//             <Container>
//               <Navbar.Brand href="#" id='furni'>Furni.</Navbar.Brand>

//               <Navbar.Toggle onClick={() => setIsOpen(true)}>
//                 <FaBars className="text-2xl text-neutral-50" />
//               </Navbar.Toggle>

//               <Navbar.Collapse id="navbar-nav" className="d-none d-md-flex">
//                 <Nav className="ml-auto">
//                   {data.map((data) => (
//                     <span key={data.id}>
//                       <Nav.Link href="/" id='name'>{data.name}</Nav.Link>
//                     </span>
//                   ))}
//                   <Nav.Link href="#" id='contactone'><IoMdContact /></Nav.Link>
//                   <Nav.Link href="#" id='contactone'><MdOutlineShoppingCart /></Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>

//               <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="start" className="custom-offcanvas">
//                 <Offcanvas.Header closeButton>
//                   <Offcanvas.Title>Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                   <Nav className="ml-auto">
//                     {data.map((data) => (
//                       <Nav.Link key={data.id} href="/" id='name'>{data.name}</Nav.Link>
//                     ))}
//                     <Nav.Link href="#" id='contactone'><IoMdContact /></Nav.Link>
//                     <Nav.Link href="#" id='contactone'><MdOutlineShoppingCart /></Nav.Link>
//                   </Nav>
//                 </Offcanvas.Body>
//               </Offcanvas>
//             </Container>
//           </Navbar>
//         </div>

//         <header className="header-section">
//           <Container fluid>
//             <Row className="align-items-center">
//               <Col xs={12} md={6}>
//                 <div className='header'>
//                   <h1 className="header-title">Modern Interior <br />Design Studio</h1>
//                   <p className="header-subtitle">
//                     Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
//                     Aliquam vulputate velit imperdiet dolor tempor tristique.
//                   </p>
//                   <Button id="shop" className='sp'>Shop Now</Button>
//                   <Button id="explore">Explore</Button>
//                 </div>
//               </Col>
//               <Col xs={12} md={6} className='text-center imgsofa'>
//                 <img src={sofa} alt="Sofa" className="img img-fluid" />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Home;



///offcanvass 
//  right to left

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { IoMdContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import sofa from './Images/couch.png';
import data from './Navbar.json';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Home'>
      <div className='section'>
        <div className='nave'>
          <Navbar expand="md" bg="teal" variant="dark" className="shadow-md">
            <Container>
              <Navbar.Brand href="#" id='furni'>Furni.</Navbar.Brand>

              <Navbar.Toggle onClick={() => setIsOpen(true)}>
                <FaBars className="text-2xl text-neutral-50" />
              </Navbar.Toggle>

              <Navbar.Collapse id="navbar-nav" className="d-none d-md-flex">
                <Nav className="ml-auto">
                  {data.map((data) => (
                    <span key={data.id}>
                      <Nav.Link href="/" id='name'>{data.name}</Nav.Link>
                    </span>
                  ))}
                  <Nav.Link href="#"  id='loginsigin'>Login</Nav.Link>
                  <Nav.Link href="#"  id='loginsigin'>Sign in</Nav.Link>
                  <Nav.Link href="#" id='contactone'><MdOutlineShoppingCart /></Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="end" className="custom-offcanvas">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="ml-auto">
                    {data.map((data) => (
                      <Nav.Link key={data.id} href="/" id='name'>{data.name}</Nav.Link>
                    ))}
                    <Nav.Link href="#" id='loginsigin'>Login</Nav.Link>
                    <Nav.Link href="#"  id='loginsigin'>Sign in</Nav.Link>
                    <Nav.Link href="#" id='contactone'><MdOutlineShoppingCart /></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
          </Navbar>
        </div>

        <header className="header-section">
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <div className='header'>
                  <h1 className="header-title">Modern Interior <br />Design Studio</h1>
                  <p className="header-subtitle">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                  </p>
                  <Button id="shop" className='sp'>Shop Now</Button>
                  <Button id="explore">Explore</Button>
                </div>
              </Col>
              <Col xs={12} md={6} className='text-center imgsofa'>
                <img src={sofa} alt="Sofa" className="img img-fluid" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Home;

