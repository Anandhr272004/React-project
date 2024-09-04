import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

const ProductCard = ({ image, title, price }) => (
  <Col md={4} className="product-card mb-4">
    <img src={image} alt={title} className="product-image img-fluid" />
    <h3>{title}</h3>
    <p>{price}</p>
    <Button variant="primary">Explore</Button>
  </Col>
);

const ProductGrid = () => (
  <Container>
    <Row>
      <ProductCard 
        image="path-to-nordic-chair-image.jpg" 
        title="Nordic Chair" 
        price="$50.00" 
      />
      <ProductCard 
        image="path-to-kuazo-aero-chair-image.jpg" 
        title="Kuazo Aero Chair" 
        price="$78.00" 
      />
      <ProductCard 
        image="path-to-ergonomic-chair-image.jpg" 
        title="Ergonomic Chair" 
        price="$43.00" 
      />
    </Row>
  </Container>
);

export default ProductGrid;
