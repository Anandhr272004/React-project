import React from "react";
import Navebar from "./Navebar";
import './Shop.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import FooterSection from "./Footer-section";
import data from './Home.json';
import { useNavigate } from "react-router-dom";
const Shop = () => {
const navigate =useNavigate();
    return (
        <div className="Shop-component">
            <div className="aboutus-bg">
                <Navebar />
                {/* <Container className="shop-container">
                    <Row>
                        <Col md={5}>
                            <div className="shop" >
                                Shop
                            </div></Col>
                    </Row>
                </Container> */}
                   <header className="header-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="headertitle">
                                    Shop<br />
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
            <div className="bg-color">

                <div className="shop-component">
                    <Container className="shop-container mt-5">
                        <Row>
                            {data.shop.map((product) => (
                                <Col lg={3} md={4} sm={12} className="mb-4 productcolumn" key={product.id}>
                                    <Card className="productcard">
                                        <div className="image-container">
                                            <Card.Img
                                                variant="top"
                                                src={product.image}
                                                className="img-fluid"
                                                alt={product.title}
                                            />
                                            <Card.Body>
                                                <Card.Title className="product-title">{product.title}</Card.Title>
                                                <Card.Text className="product-price">{product.price}</Card.Text>
                                            </Card.Body>
                                            <div className="icon-overlay">
                                                <span className="hover-icon-overlay">
                                                    <FaPlusCircle />
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    {/* /// */}
                    <div className="bgextra"></div>
                </div>
            </div>

            <FooterSection />
        </div>


    )
}
export default Shop;