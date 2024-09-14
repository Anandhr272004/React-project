import React from "react";
import Navebar from "./Navebar";
import './Blog.css'
import data from "./Home.json";
import { Row, Col, Container, Button, Form, Image,Card } from "react-bootstrap";
import minSofa from './Images/mini-sofa.png';
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sectionseven from "./Section-seven";

const Blog = () => {

    const navigate = useNavigate();
    const socialIcons = {
        FaFacebookF: <FaFacebookF />,
        FaTwitter: <FaTwitter />,
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
    };
    return (
        <>
            <div className='aboutus-bg'>
                <Navebar />
                <header className="header-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="Headertitle">
                                    Blog<br />
                                </h1>
                                <p className="header-subtitle">
                                    {data.header.subtitle.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line} <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {data.header.buttons.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={()=>navigate("/shop")}>
                                        {button.label}
                                    </Button>
                                ))}
                                {data.header.buttons1.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={()=>navigate("/")}>
                                        {button.label}
                                    </Button>
                                ))}
                            </Col>
                            <Col xs={12} md={6} className="text-center">
                                <img
                                    src={data.header.image}
                                    alt={data.header.imageAlt}
                                    className="img-fluid"
                                />
                            </Col>
                        </Row>

                    </Container>
                </header>

            </div>


            <section className="blog-section pt-5">
      <Container>

        <Row className="g-4">
          {data.blogPosts.map((post, index) => (
            <Col key={index} md={4}>
              <Card className="h-100" id="post-card">
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

        <Row className="g-4 pt-5">
          {data.blogPosts.map((post, index) => (
            <Col key={index} md={4}>
              <Card className="h-100" id="post-card">
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

            {/* //footer */}
            <div className='about-two'>
                <footer className="footer-Section">
                    <Container>
                        <div className="relativeimg">
                            <img src={minSofa} alt="mini-sofa" className="minisofa" />
                        </div>
                        <Row className="align-items-center subscribe-section">
                            <Col md={12} lg={12}>
                                <div className="newsletter-title">
                                    <span className="mail"><IoMailOutline /></span>
                                    <p className="sub">{data.Footer.newsletterTitle}</p>
                                </div>
                            </Col>
                            <Col md={6} lg={6}>
                                <Form className="d-flex subscribe-form">
                                    <Form.Control type="text" placeholder="Enter your name" className="me-2" id="namebox" />
                                    <Form.Control type="email" placeholder="Enter your email" className="me-2" id="emailbox" />
                                    <Button id="subscribebtn">
                                        < IoIosSend />
                                    </Button>
                                </Form>
                            </Col>
                        </Row>


                        <Row className="mt-5">
                            <h3 className="footer-brand">{data.Footer.brandName}</h3>
                            <Col md={4} sm={12} lg={3}>

                                <p className="footer-description">
                                    {data.Footer.footerDescription}
                                </p>
                                <ul className="social-icons" >
                                    {data.Footer.socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                {socialIcons[link.icon]}
                                            </a>
                                        </li>
                                    ))}
                                </ul>


                            </Col>

                            {data.Footer.footerLinks.map((section, index) => (
                                <Col key={index} md={2} sm={12} lg={2} className="footer-links">
                                    <ul>
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>{link}</li>
                                        ))}
                                    </ul>
                                </Col>
                            ))}
                        </Row>
                        <Row className="mt-5">
                            <Col lg={6} className="copy">{data.Footer.copyright}</Col>
                            <Col lg={3} className="terms">{data.Footer.Terms}</Col>
                            <Col lg={3} className="privacy">{data.Footer.privacy}</Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    )
}
export default Blog;