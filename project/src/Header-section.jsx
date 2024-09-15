import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import data from "./Home.json";
import { useNavigate } from "react-router-dom";
import './App.css'

const Headersection = () => {
    const navigate = useNavigate();
    return (
        <div className="section">

            <header className="header-section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} lg={6}>
                            <p className="header-title">
                                {data.header.title.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line} 
                                        <br />
                                    </React.Fragment>
                                ))}
                                {data.header.titleone.split("\n").map((line, index) => (
                                    <React.Fragment key={index} >
                                        {line} <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            <p className="header-subtitle">
                                {data.header.subtitle.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line} <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            {data.header.buttons.map((button, index) => (
                                <Button key={index} id={button.id} onClick={()=>navigate('/shop')}>
                                    {button.label}
                                </Button>
                            ))}
                            {data.header.buttons1.map((button, index) => (
                                <Button key={index} id={button.id} onClick={()=>navigate('/explore')}>
                                    {button.label}
                                </Button>
                            ))}
                        </Col>
                        <Col xs={12} md={6}lg={6} className="text-center">
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

    );
}
export default Headersection;