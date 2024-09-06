import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import data from "./Home.json";
import Nbarone from "./Nbarone";
import SectionThree from "./Section-three";
import Section_two from "./Section-two";
import { FaRegCircle } from "react-icons/fa6";
import './App.css';

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
                <div className="section-two">
                    <Section_two />
                </div>

                {/* section3 */}
                <div className="section-three ">
                    <SectionThree />
                </div>

                {/* section4 */}
                <div className="section-four mt-5">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="image-grid">
                                    <Image src="./Images/dots-green.svg" alt="Green Dots" className="green-dots" />
                                    <Image src="./Images/img-grid-1.jpg" alt="Interior Design 1" className="grid-image large-image" />
                                    <Image src="./Images/img-grid-2.jpg" className="grid-image small-image" />
                                    <Image src="./Images/img-grid-3.jpg" alt="Interior Design 3" className="grid-image large-image" />
                                </div>
                            </Col>
                            <Col lg={5} className="text-section">
                                <h1>We Help You Make Modern Interior Design</h1>
                                <p>
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                                    Nulla ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                                    Nulla ac aliqueet dolor tempor tristique.
                                </p>
                                <ul>
                                    <li><span><FaRegCircle />Donec vitae odio quis nisl dapibus malesuada</span></li>
                                    <li><span><FaRegCircle />Donec vitae odio quis nisl dapibus malesuada</span></li>
                                    <li><span><FaRegCircle />Donec vitae odio quis nisl dapibus malesuada</span></li>
                                   
                                </ul>
                                <Button variant="primary">Explore</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>

        </div>
    );
};

export default Home;



