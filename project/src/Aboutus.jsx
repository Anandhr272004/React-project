import React from 'react';
import Navebar from './Navebar';
import './Aboutus.css';
import { Row, Col, Container, Button,  Form,Image } from "react-bootstrap";
import { FaShippingFast, FaShoppingBag, FaHeadset, FaExchangeAlt } from "react-icons/fa";
import data from "./Home.json";
import SectionThree from './Section-three';
import FooterSection from './Footer-section';
import minSofa from './Images/mini-sofa.png';
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const iconMapping = {
    FaShippingFast: <FaShippingFast size={35} className="mb-3" />,
    FaShoppingBag: <FaShoppingBag size={35} className="mb-3" />,
    FaHeadset: <FaHeadset size={35} className="mb-3" />,
    FaExchangeAlt: <FaExchangeAlt size={35} className="mb-3" />
};

const Aboutus = () => {
    const socialIcons = {
        FaFacebookF: <FaFacebookF />,
        FaTwitter: <FaTwitter />,
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
      };
    return (
        <div className='Aboutus'>
            <div className='aboutus-bg'>
                <Navebar />
                <header className="headersection">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="headertitle">
                                    About us <br />
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
                                    src={data.header.image}
                                    alt={data.header.imageAlt}
                                    className="img-fluid"
                                />
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>

            <div className='aboutus-one'>
             
                <SectionThree />
            </div>

            <div className='about-two'>

                <footer className="footersection">
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



            </div>
        </div>
    );
};

export default Aboutus;

