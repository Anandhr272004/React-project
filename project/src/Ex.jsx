import React from 'react';
import {Container, Card, Row, Col, Button } from 'react-bootstrap';
import './Ex.css'

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Nordic Chair",
      description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      image: "./Images/product-1.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Kruzo Aero Chair",
      description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      image: "./Images/product-2.png", // Replace with your image path
    },
    {
      id: 3,
      name: "Ergonomic Chair",
      description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      image: "./Images/product-3.png", // Replace with your image path
    },
  ];

  return (
    <Container className='con'>
    <Row className="justify-content-center mt-4">
      {products.map((product) => (
        <Col key={product.id} lg={4} md={4} sm={12} className="mb-4">
            <Row>
                <Col lg={5}> <Card id="five">
            <Card.Img 
              variant="top" 
              src={product.image} 
              id="five1" />
           
          </Card>
          </Col>
                <Col lg={7}>
                <Card.Body>
              <Card.Title id="five2">{product.name}</Card.Title>
              <p>{product.description}</p>
              <p id='five4'>Read More</p>
            </Card.Body></Col>
            </Row>
         
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default ProductSection;
