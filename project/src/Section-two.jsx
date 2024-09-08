import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import data from './Home.json';
import './Section_two.css'

const Section_two= () => {
  return (
    <div className="section-two">
      <Container className="section2">
        <Row>
          <Col lg={3} md={12} sm={12} className="section2one">
            <h2 className="craft">Crafted with</h2>
            <h2 className="excellent">excellent material.</h2>
            <p className="donec">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Button id="exploreone">Explore</Button>
          </Col>

          {data.products.map((product) => (
            <Col lg={3} md={4} sm={6} xs={12} className="productcol" key={product.id}>
              <Card id="procard">
                <Card.Img  variant="top" className="img-fluid" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title className="nordic">{product.title}</Card.Title>
                  <Card.Text className="nordic1">{product.price}</Card.Text>
                </Card.Body>
                <div className="card-img-overlay">
                  <span className="hover-icon">
                    <FaPlusCircle />
                  </span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Section_two;
