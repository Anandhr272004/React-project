import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import data from "./Home.json";
import SectionThree from "./Section-three";
import Section_two from "./Section-two";
import { FaRegCircle } from "react-icons/fa6";

import { FaCircle } from "react-icons/fa";
import Navebar from "./Navebar";

const Home = () => {
    const featureList = [
        "Donec vitae odio quis nisl dapibus malesuada",
        "Donec vitae odio quis nisl dapibus malesuada",
        "Donec vitae odio quis nisl dapibus malesuada",
        "Donec vitae odio quis nisl dapibus malesuada"
    ];
    return (
        <div className="Home">
            <div className="section">

                <Navebar />

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
                <div className="section-two">
                    <Section_two />
                </div>

                {/* section3 */}
                <div className="section-three ">
                    <SectionThree />
                </div>

                {/* section4 */}
                <div className="section-four">
                    <Container className="section_four">
                        <Row>
                            <Col lg={7}>
                                <div className="image-grid">
                                    <Image src="./Images/dots-green.svg" alt="Green Dots" className="greendots" />
                                    <Image src="./Images/product.png" alt="Interior Design 1" className="gridimage" />
                                </div>
                            </Col>
                            <Col lg={5} className="text-section">
                                <h1 className="wehelp">We Help You Make Modern Interior Design</h1>
                                <p className="donec">
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                                    Nulla ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.

                                </p>
                                <Row>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-text">
                                            <FaRegCircle className="feature-icon" />
                                            <p className="text1">Donec vitae odio quis nisl dapibus malesuada Lorem, ipsum.</p>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-text">
                                            <FaRegCircle className="feature-icon" />
                                            <p className="text2">Donec vitae odio quis nisl Lorem, ipsum dolor. dapibus malesuada.</p>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-text">
                                            <FaRegCircle className="feature-icon" />
                                            <p className="text3">Donec Lorem ipsum dolor sit amet. vitae odio quis nisl dapibus malesuada.</p>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="feature-item">
                                        <div className="icon-text">
                                            <FaRegCircle className="feature-icon" />
                                            <p className="text4">Donec vitae Lorem ipsum dolor sit amet. odio quis nisl dapibus Lorem, ipsummal esuada.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="explore-btn-container">
                                <Button id="exploreone4">Explore</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>



                </div>

            </div>

        </div>
    );
};

export default Home;



