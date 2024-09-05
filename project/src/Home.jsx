import React, { useState } from "react";
import { Row, Col, Navbar, Nav, Container, Button, Card } from "react-bootstrap";
import data from "./Home.json";
import { FaCirclePlus } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";


import { FaShippingFast, FaShoppingBag, FaHeadset, FaExchangeAlt } from 'react-icons/fa';
import Nbarone from "./Nbarone";
import Section from "./Section";

const Home = () => {

    return (
        <div className="Home">
            <div className="section">

                <Nbarone />

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
                                    src={data.header.image}
                                    alt={data.header.imageAlt}
                                    className="img-fluid"
                                />
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>

            {/* //section2 */}
            <div className="bg-bluecolor">
                {/* <div className="section-two">
                    <Container className="section2">
                        <Row>
                            <Col lg={3} md={3} sm={12} className="section2one">
                                <h2 className="craft">Crafted with</h2>
                                <h2 className="excellent">excellent material.</h2>
                                <p className="donec">
                                    Donec vitae odio quis nisl dapibus malesuada.
                                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                                <Button id="exploreone">Explore</Button>
                            </Col>

                            

                            {data.products.map((product) => (
                                <Col lg={3} md={3} sm={6} xs={12} className="productcol" key={product.id}>
                                    <Card className="productcard some" id="procard">
                                        <Card.Img variant="top" className="img-fluid" src={product.image} alt={product.title} />
                                        <Card.Body>
                                            <Card.Title className="nordic">{product.title}</Card.Title>
                                            <Card.Text className="nordic1">{product.price}</Card.Text>
                                        </Card.Body>
                                        <div className="card-img-overlay">
                                            <span className="hover-icon"><FaCirclePlus /></span>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div> */}
                <Section />

                <div className="section-three ">
                    <Container className="why-choose-us-section">
                        <Row>
                            <Col lg={6}>
                                <h2>Why Choose Us</h2>
                                <p>
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                                    velit imperdiet dolor tempor tristique.
                                </p>
                                <Row className="features">
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-container">
                                            <FaShippingFast size={35} className="mb-3" />

                                        </div>
                                        <h5>Fast & Free Shipping</h5>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate.
                                        </p>
                                    </Col>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-container">
                                            <FaShoppingBag size={35} className="mb-3" />
                                        </div>
                                        <h5>Easy to Shop</h5>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate.
                                        </p>
                                    </Col>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-container">
                                            <FaHeadset size={35} className="mb-3" />
                                        </div>
                                        <h5>24/7 Support</h5>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate.
                                        </p>
                                    </Col>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-container">
                                            <FaExchangeAlt size={35} className="mb-3" />
                                        </div>
                                        <h5>Hassle Free Returns</h5>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} className="image-container">
                                <img src="./Images/why-choose-us-img.jpg" alt="Sofa" className="sofa-image" />
                                <img src="./Images/dots-yellow.svg" alt="Yellow Dots" className="dots-image" />
                            </Col>
                        </Row>
                    </Container>
               </div>
            </div>

        </div>
    );
};

export default Home;



