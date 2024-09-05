import React from 'react';
import { Container, Row, Col, Button,Card } from 'react-bootstrap';
import { FaCirclePlus } from "react-icons/fa6";


const NavBar=()=>{
  return (
    <div className="sectiontwo">
    <Container className="section21">
      <Row>
        <Col lg={3} md={3} sm={12} className="section2one1">
          <h2 className="craft1">Crafted with</h2>
          <h2 className="excellent1">excellent material.</h2>
          <p className="donec1">
            Donec vitae odio quis nisl dapibus malesuada.
            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <Button id="exploreone1">Explore</Button>
        </Col>

        {/* Product Cards */}

        <Col lg={3} md={3} sm={6} xs={12} className="productcol1">
          <Card className="product-card">
            <div className="cardimg">
              <span className="hovericon"><FaCirclePlus /></span>
            </div>
            <Card.Img variant="top" className="img-fluid" src="./Images/product-1.png" />
            <Card.Body>
              <Card.Title className="nordic1">Nordic Dime Chair</Card.Title>
              <Card.Text className="nordic11">$50.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={3} sm={6} xs={12} className="productcol1">
          <Card className="product-card">
            <div className="cardimg">
              <span className="hovericon"><FaCirclePlus /></span>
            </div>
            <Card.Img variant="top" className="img-fluid" src="./Images/product-2.png" />
            <Card.Body>
              <Card.Title className="nordic">Kruzo Aero Chair</Card.Title>
              <Card.Text className="nordic1">$78.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={3} sm={6} xs={12} className="productcol1">
          <Card className="product-card">
            <div className="cardimg">
              <span className="hovericon"><FaCirclePlus /></span>
            </div>
            <Card.Img variant="top" className="img-fluid" src="./Images/product-3.png" />
            <Card.Body>
              <Card.Title className="nordic">Ergonomic Chair</Card.Title>
              <Card.Text className="nordic1">$43.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  </div>
  )
}

export default NavBar;