import React, { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Container,
  Button,
  Dropdown,
  Offcanvas,
  Card,
} from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import data from "./Navbar.json";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Ex = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const onSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <div className="Home">

      {/* //section2 */}
      <div className="section-two">
        <Container className="section2">
          <Row>
            <Col lg={3} md={3} sm={12} className="section2one">
              <h2 className="craft">Crafted with</h2>
              <h2 className="excellent">excellent material.</h2>
              <p className="donec">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor
                tristique.
              </p>
              <Button id="exploreone">Explore</Button>
            </Col>

            {/* Product Cards */}
            <Col lg={3} md={3} sm={6} xs={12} className="productcol">
              {data.products.map((product) => (
                <Card className="productcard" id="procard">
                  <Card.Img variant="top" className="img-fluid product-thumbnail" src={product.image} />
                  <Card.Body>
                    <Card.Title className="nordic">{product.title}</Card.Title>
                    <Card.Text className="nordic">{product.price}</Card.Text>
                    <div className="card-img-overlay">
                      <span className="hover-icon">
                        <FaPlusCircle className="ironcross" />{" "}
                      </span>
                    </div>
                  </Card.Body>
                </Card>))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ex;
