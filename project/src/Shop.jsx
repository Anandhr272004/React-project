import React from "react";
import Navebar from "./Navebar";
import './Shop.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import FooterSection from "./Footer-section";
const Shop = () => {
    const products = [
        { title: "Nordic Chair", price: "$50.00", imgSrc: "./Images/product-1.png" },
        { title: "Nordic Chair", price: "$50.00", imgSrc: "./Images/product-2.png" },
        { title: "Kruzo Aero Chair", price: "$78.00", imgSrc: "./Images/product-3.png" },
        { title: "Ergonomic Chair", price: "$43.00", imgSrc: "./Images/product-2.png" },
        { title: "Nordic Chair", price: "$50.00", imgSrc: "./Images/product-1.png" },
        { title: "Kruzo Aero Chair", price: "$78.00", imgSrc: "./Images/product-3.png" },
        { title: "Ergonomic Chair", price: "$43.00", imgSrc: "./Images/product-2.png" },
        { title: "Kruzo Aero Chair", price: "$78.00", imgSrc: "./Images/product-3.png" },
    ];

    return (
        <div className="Shop-component">
            <div className="bgcolor">
                <Navebar />
                <Container className="shop-container">
                    <Row>
                        <Col md={5}>
                            <div className="shop" >
                                Shop
                            </div></Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-color">

                <div className="shop-component">
                    <Container className="shop-container mt-5">
                        <Row>

                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-1.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-2.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>

                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-3.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-1.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>

                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-2.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-3.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-1.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4">
                                <Card className="product-card">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-3.png" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <span className="hover-icon"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <div className="bgextra"></div>
                </div>
            </div>
      
            <FooterSection />
        </div>


    )
}
export default Shop;