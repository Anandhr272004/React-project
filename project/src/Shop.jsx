import React from "react";
import Navebar from "./Navebar";
import './Shop.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import FooterSection from "./Footer-section";
import data from './Home.json';
const Shop = () => {


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
                    {/* <Container className="shop-container mt-5">
                        <Row>

                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-1.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-2.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>

                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-3.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-1.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                   
                                </Card>
                            </Col>
                        </Row>
                        <Row>

                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-2.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-3.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-1.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="mb-4 productcolumn">
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img variant="top" src="./Images/product-3.png" className="img-fluid" />
                                        <Card.Body>
                                        <Card.Title className="product-title">Nordic Chair</Card.Title>
                                        <Card.Text className="product-price">$50.00</Card.Text>
                                    </Card.Body>
                                        <div className="icon-overlay">
                                            <span className="hover-icon-overlay"><FaPlusCircle /></span>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                        </Row>
                    </Container> */}


                    {/* /// */}

                    <Container className="shop-container mt-5">
                        <Row>
                            {data.shop.map((product) => (
                                <Col lg={3} md={6} sm={12} className="mb-4 productcolumn" key={product.id}>
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