import React from "react";
import Navebar from "./Navebar";
import './Contact.css'
import data from "./Home.json";
import { Row, Col, Container, Button, Form, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import minSofa from './Images/mini-sofa.png';
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

export const Contact = () => {
    const navigate = useNavigate()
    const socialIcons = {
        FaFacebookF: <FaFacebookF />,
        FaTwitter: <FaTwitter />,
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
    };
    return (
        <>
            <div className='aboutus-bg'>
                <Navebar />
                <header className="header-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="Headertitle">
                                    Contact<br />
                                </h1>
                                <p className="header-subtitle">
                                    {data.header.subtitle.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line} <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {data.header.buttons.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={() => navigate("/shop")}>
                                        {button.label}
                                    </Button>
                                ))}
                                {data.header.buttons1.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={() => navigate("/")}>
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


            {/* //contact-page/ */}
            <div className="contact-page">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>

                            <Row className="contact-info mb-4 justify-content-center">
                                <Col xs={12} md={4} className="contact-item d-flex align-items-center">
                                    <span className="icon"><FaLocationDot /></span>
                                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                </Col>
                                <Col xs={12} md={4} className="contact-item d-flex align-items-center">
                                    <span className="icon"><IoMdMail /></span>
                                    <p>info@yourdomain.com</p>
                                </Col>
                                <Col xs={12} md={4} className="contact-item d-flex align-items-center">
                                    <span className="icon"><BsTelephoneFill /></span>
                                    <p>+1 294 3925 3939</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="contact-form justify-content-center">
                        <Col xs={12} lg={7}>
                            <Form>
                                <Row className="form-group">
                                    <Col xs={12} md={6} className="form-field mb-3">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" placeholder="First name" required />
                                    </Col>
                                    <Col xs={12} md={6} className="form-field mb-3">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Last name" required />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col xs={12} className="form-field mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Email address" required />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col xs={12} className="form-field mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" placeholder="Message" rows={4} required />
                                    </Col>
                                </Row>
                                <Button type="submit" className="send-button w-100">Send Message</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* //footer */}
            <div className='about-two'>
                <footer className="footer-Section">
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
                                    <Form.Control type="text" placeholder="Enter your name" className="me-2" id="namebox" />
                                    <Form.Control type="email" placeholder="Enter your email" className="me-2" id="emailbox" />
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
        </>
    )
}