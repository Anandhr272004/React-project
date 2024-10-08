import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import data from './Home.json';
import { SlPlus } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import './Section_two.css'

const Section_two = () => {
  const navigate = useNavigate();
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
            <Button id="exploreone" onClick={()=>navigate("/explore")}>Explore</Button>
          </Col>



{/* <div className='product-section'> */}
{data.products.map((product) => (
 <Col lg={3} md={4} sm={12} xs={12} className="productcol  d-flex justify-content-center"
  key={product.id}>

          <Card className="procard" style={{ maxWidth: '18rem' }} >
            <Card.Img src={product.image} alt={product.title} className='img-fluid' />
            <Card.Body>
              <Card.Title className='nordic'>{product.title}</Card.Title>
              <Card.Text
                className='nordic1'>{product.price}
              </Card.Text>
              <div className="card-img-overlay">
                <span className="hover-icon">
                  {/* <SlPlus /> */}
                  <FaPlusCircle />
                </span>
              </div>
            </Card.Body>
          </Card>
          
          </Col>
))}

        </Row>
      </Container>
    </div>
  );
};

export default Section_two;
