import React from 'react'
import Navebar from './Navebar';
import './Aboutus.css'
import './App.css'
import Headersection from './Header-section';
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import data from "./Home.json";
import SectionThree from './Section-three';
import FooterSection from './Footer-section';

const Aboutus = () => {

    return (
        <div className='Aboutus'>
            <div className='aboutus-bg'>
                <Navebar />
                
                {/* <Headersection /> */}
                <header className="headersection">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <h1 className="header-title">
                                {/* {data.header.title.split("\n").map((line, index) => ( */}
                                    <React.Fragment>
                                    About us <br />
                                    </React.Fragment>
                                {/* // ))} */}
                                {/* {data.header.titleone.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line} <br />
                                    </React.Fragment>
                                ))} */}
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
            <FooterSection />


        </div>
    );
}
export default Aboutus;