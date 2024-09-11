
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer_section.css';
import minSofa from './Images/mini-sofa.png';
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import data from './Home.json';


const FooterSection = () => {
    const socialIcons = {
        FaFacebookF: <FaFacebookF />,
        FaTwitter: <FaTwitter />,
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
      };
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
              <p className="sub">{data.Footer.newsletterTitle}</p>
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
        <h3 className="footer-brand">{data.Footer.brandName}</h3>
          <Col md={4} sm={12} lg={3}>
            
            <p className="footer-description">
                {data.Footer.footerDescription}
            </p>
            <ul className="social-icons" >
               {data.Footer.socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {socialIcons[link.icon]}
                  </a>
                </li>
              ))}
            </ul>


          </Col>

           {data.Footer.footerLinks.map((section, index) => (
            <Col key={index} md={2} sm={12} lg={2} className="footer-links">
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
            <Col lg={6} className="copy">{data.Footer.copyright}</Col>
            <Col lg={3} className="terms">{data.Footer.Terms}</Col>
            <Col lg={3} className="privacy">{data.Footer.privacy}</Col>
            </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
