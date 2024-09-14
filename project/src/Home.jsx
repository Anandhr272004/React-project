import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import data from "./Home.json";
import SectionThree from "./Section-three";
import Section_two from "./Section-two";
import { FaRegCircle } from "react-icons/fa6";
import Navebar from "./Navebar";
import SectionSix from "./Section-six";
import Sectionseven from "./Section-seven";
import FooterSection from "./Footer-section";
import Headersection from "./Header-section";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <div className="section">

                <Navebar />
                
                <Headersection  />
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

                {/* section4 -muliple images*/}

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
                                        <Button id="exploreone4" key={buttonfour.id} onClick={()=>navigate("/explore")}>{buttonfour.label}</Button>
                                    ))}

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                {/* section-five -three chair */}
                <div className="section-five mt-5">
                    <Container>
                        <Row className="justify-content-center mt-4">
                            {data.sectionfive.map((five) => (
                                <Col key={five.id} lg={4} md={12} sm={12} className="mb-4">
                                    <Row>
                                        <Col lg={5} md={5} sm={5}>
                                            <Card id="five">
                                                <Card.Img
                                                    variant="top"
                                                    src={five.image}
                                                    id="five1" />
                                            </Card>
                                        </Col>
                                        <Col lg={7} md={7}sm={7}>
                                            <Card.Body>
                                                <Card.Title id="five2">{five.name}</Card.Title>
                                                <p>{five.description}</p>
                                                <p id='five4'>Read More</p>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>

                {/* /section-six - testimonial/ */}
                <div className="section-six">
                    <SectionSix />
                </div>

                {/* /section-seven - Recent Blogs/ */}
                <div className="section-seven">
                    <Sectionseven />
                </div>
                <div className="bg"></div>
                {/* //app.css */}
            </div>

            {/* /Footer-section / */}
          
            <FooterSection />

        </div>
    );
};

export default Home;



