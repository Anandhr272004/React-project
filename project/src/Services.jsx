import React from "react";
import Navebar from "./Navebar";
import data from "./Home.json";
import { Row, Col, Container, Button, Form, Image } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import './Services.css'
import SectionSix from "./Section-six";
import FooterSection from "./Footer-section";
import minSofa from './Images/mini-sofa.png';
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import pro from './Images/pro.png'


const Services = () => {
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
                                <h1 className="headertitle">
                                    Services<br />
                                </h1>
                                <p className="header-subtitle">
                                    {data.header.subtitle.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line} <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {data.header.buttons.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={()=>navigate("/shop")}>
                                        {button.label}
                                    </Button>
                                ))}
                                {data.header.buttons1.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={()=>navigate("/")}>
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

            <div className="sectionfour">
                <Container className="section_four">
                    <Row className="align-items-center">
                        <Col lg={7} className="image-col">
                            <div className="image-grid">
                                <Image src={data.sectionFour.images.dots} alt="Green Dots" className="greendots" />
                                {/* <Image src={data.sectionFour.images.product} alt="Interior Design 1" className="gridimage" /> */}
                                <Image src={pro} alt="Interior Design 1" className="gridimage" />
                            </div>
                        </Col>
                        <Col lg={5} className="text-section">
                            <h1 className="wehelp">{data.sectionFour.heading}</h1>
                            <p className="donec">{data.sectionFour.description}</p>
                            <Row>
                                {data.sectionFour.features.map((featu, index) => (
                                    <Col key={index} sm={6} xs={12} className="feature-item">
                                        <div className="icon-text">
                                            <FaRegCircle className="feature-icon" />
                                            <p className="text1" id="text1">{featu.text}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <div className="explore-btn-container">
                                {data.sectionFour.buttonsfour.map((buttonfour) => (
                                    <Button id="exploreone4" key={buttonfour.id} onClick={() => navigate("/explore")}>{buttonfour.label}</Button>
                                ))}

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <SectionSix />
            {/* <FooterSection /> */}



            <div className='about-two'>
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
export default Services;