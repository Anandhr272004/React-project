import React from "react";
import Navebar from "./Navebar";
import './Shop.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
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
                <Row>
                    <Col className="p-0">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./Images/product-1.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </div>

        </div>
    )
}
export default Shop;