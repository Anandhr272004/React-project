import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import data from "./Home.json";
import SectionThree from "./Section-three";
import Section_two from "./Section-two";
import { FaRegCircle } from "react-icons/fa6";
import Navebar from "./Navebar";

const Home = () => {

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
                        <Row className="align-items-center">
                            <Col lg={7} className="image-col">
                                <div className="image-grid">
                                    <Image src={data.sectionFour.images.dots} alt="Green Dots" className="greendots" />
                                    <Image src={data.sectionFour.images.product} alt="Interior Design 1" className="gridimage" />
                                </div>
                            </Col>
                            <Col lg={5} className="text-section">
                                <h1 className="wehelp">{data.sectionFour.heading}</h1>
                                <p className="donec">{data.sectionFour.description}</p>
                                <Row>
                                    {data.sectionFour.features.map((featu,index)=>(
                                         <Col key={index} sm={6} xs={12} className="feature-item">
                                         <div className="icon-text">
                                             <FaRegCircle className="feature-icon" />
                                             <p className="text1" id="text1">{featu.text}</p>
                                         </div>
                                     </Col>
                                    ))}
                                </Row>
                                <div className="explore-btn-container">
                                    {data.sectionFour.buttonsfour.map((buttonfour)=>(
                                         <Button id="exploreone4" key={buttonfour.id}>{buttonfour.label}</Button>
                                   ) )}
                                   
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



