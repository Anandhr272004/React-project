// import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import data from './Navbar.json';
// import { IoIosContact } from "react-icons/io";
// import { CiShoppingCart } from "react-icons/ci";
// import sectionone from "./Sectionone.json";
// const NavBar = () => {
//   return (
//     <div className='Home'>
//       <div className='nave'>
//         <Navbar expand="lg"  >
//           <Container>
//             <Row>
//             <Col xl={7}lg={7}md={6}sm={6} >
//             <Navbar.Brand href="/" id='furni'>Furni.</Navbar.Brand>
//             </Col>
//             <Col xl={5}lg={5} md={6} sm={6}>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 {data.map((data)=>(
//                 <span className='sec' key={data.id}>
//                 <Nav.Link id='name'>{data.name}</Nav.Link>   
//               </span>
//                ))}
//                    <Nav.Link id='contactone'><IoIosContact /></Nav.Link>
//                 <Nav.Link id='contactone'><CiShoppingCart /></Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//             </Col>
//           </Row>
//           </Container>
//         </Navbar>
//       </div>


//       {/* <div className='sectionone'>
//         <Container>
//           <Row> */}
//             {/* <Col lg={4} md={4} sm={4} className='sectiona'>
//               {sectionone.map((sectionone => (
//                 <div key={sectionone.id}>
//                   <p className='sectionab'>{sectionone.name}</p>
//                   <p>{sectionone.title}</p>
//                 </div>
//               )))}
//             </Col>
//             <Col lg={8} md={8} sm={8} className='sectionb'>
//               <img src="couch.png" /> */}
//             {/* </Col>/ */}
//           {/* </Row>

//         </Container>

//       </div> */}
//     </div>

//   );
// }

// export default NavBar;


import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMdContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import couch from './Images/couch.png'
import dots from './Images/dots-light.svg'
import data from './Navbar.json'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Home'>
      <div className='nave'>
        <Navbar expand="md" bg="teal" variant="dark" className="shadow-md">
          <Container>
            {/* Brand-name */}
            <Navbar.Brand href="#" id='furni' >Furni.</Navbar.Brand>
            {/* Menu */}
            <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="text-2xl text-neutral-50" /> : <FaBars className="text-2xl text-neutral-50" />}
            </Navbar.Toggle>

            <Navbar.Collapse id="navbar-nav" className={isOpen ? 'show' : ''}>
              <Nav className="ml-auto">
                {data.map((data => (
                  <span key={data.id}>
                    <Nav.Link href="/"id='name'>{data.name}</Nav.Link>
                  </span>
                )))}
                <Nav.Link href="#" id='contactone'><IoMdContact /></Nav.Link>
                <Nav.Link href="#" id='contactone'><MdOutlineShoppingCart /></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      <div className='sectionone'>
        <Container>
          <Row>
            <Col lg={5}md={4}sm={4} className='sectiona'>
            <h1 className='sectiona-1'>Modern Interior</h1>
            <h1 className='sectiona-1a '>Design Studio</h1>
            <p className='sectiona-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet</p>
            <p  className='sectiona-2a'>velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            {/* <span> */}
            <Button id='sectiona-3'>Shop Now</Button>
            <Button id='sectiona-4'>Explore</Button>
            {/* </spa n> */}
            </Col>
            <Col lg={7}md={8}sm={8} >
            <p>
            <img src={dots} id='sectionb-1'/>
            <img src={couch} alt="Couch" id='sectionb' />
           
            </p>
          
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
};

export default Home;
