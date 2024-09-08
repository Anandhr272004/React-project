
////
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer_section.css';
import minSofa from './Images/mini-sofa.png';
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="relativeimg">
            <img src={minSofa} alt="mini-sofa" className="minisofa" />
        </div>
        <Row className="align-items-center subscribe-section">
          <Col md={12} lg={12}>
            <div className="newsletter-title">
                <span className="mail"><IoMailOutline /></span>
              <p className="sub"> Subscribe to Newsletter</p>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <Form className="d-flex subscribe-form">
              <Form.Control type="text" placeholder="Enter your name"  className="me-2" id="namebox" />
              <Form.Control type="email" placeholder="Enter your email" className="me-2"  id="emailbox" />
              <Button id="subscribebtn">
                < IoIosSend />
              </Button>
            </Form>
          </Col>
        </Row>


        <Row className="mt-5">
        <h3 className="footer-brand">Furni.</h3>
          <Col md={6} sm={12} lg={3}>
            
            <p className="footer-description">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliqu
            et velit. Pellentesque habitant
            </p>
            <ul className="social-icons">
              <li><FaFacebookF /></li>
              <li><FaTwitter /></li>
              <li><FaInstagram /></li>
              <li><FaLinkedinIn /></li>
            </ul>
          </Col>
        {/* </Row> */}

        {/* <Row className="footer-links"> */}
          <Col md={3} sm={6} lg={2} className="footer-links">
            
            <ul>
                <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </Col>
          <Col md={3} sm={6} lg={2} className="footer-links">
            <ul>
                <li>Support</li>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>
          </Col>
          <Col md={3} sm={6} lg={2} className="footer-links">
           
            <ul>
                <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={6} lg={2} className="footer-links">
            
            <ul>
                <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
