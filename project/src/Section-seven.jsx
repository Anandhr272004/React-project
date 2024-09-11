import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Section_seven.css";
import data from"./Home.json";
import { useNavigate } from "react-router-dom";

const Sectionseven = () => {
  const navigate = useNavigate();
  return (
    <section className="blog-section py-5">
      <Container>
        <Row className="justify-content-between align-items-center mb-4">
          <Col md={6}>
            <h2 className="recent-blog-title">Recent Blog</h2>
          </Col>
          <Col className="text-end" md={6}>
            <a href="#view-all" className="view-all" onClick={()=>navigate("/blog")}>
              View All Posts
            </a>
          </Col>
        </Row>

        <Row className="g-4">
          {data.blogPosts.map((post, index) => (
            <Col key={index} md={4}>
              <Card className="h-100" id="postcard">
                <Card.Img className="postimage" src={post.imageUrl} alt={post.title}  style={{ borderRadius: '20px' }}/>
                <Card.Body>
                  <Card.Title className="blog-title">{post.title}</Card.Title>
                  <Card.Text className="blog-meta">
                    by <span className="postauthor">{post.author}</span> on <span className="postauthor">{post.date}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Sectionseven;
