import { Container, Row, Col } from "react-bootstrap";
import { FaShippingFast, FaShoppingBag, FaHeadset, FaExchangeAlt } from "react-icons/fa";
import data from './Home.json';
import {Link, useLocation , useNavigate } from "react-router-dom";
import './Section_three.css'

const iconMapping = {
    FaShippingFast: <FaShippingFast size={35} className="mb-3" />,
    FaShoppingBag: <FaShoppingBag size={35} className="mb-3" />,
    FaHeadset: <FaHeadset size={35} className="mb-3" />,
    FaExchangeAlt: <FaExchangeAlt size={35} className="mb-3" />
};


const SectionThree = () => {
    const location = useLocation();
    return (
        <Container className="why-choose-us-section">
            <Row>
                <Col lg={6}>
                    <h2>{data.whyChooseUs.sectionTitle}</h2>
                    <p>{data.whyChooseUs.sectionDescription}</p>
                    <Row className="features">
                        {data.whyChooseUs.features.map((feature, index) => (
                            <Col sm={6} className="feature-item" key={index}>
                                <div className="icon-container">
                                    {iconMapping[feature.icon]}
                                </div>
                                <h5>{feature.title}</h5>
                                <p>{feature.description}</p>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg={6} className="image-container">
                    <img src={data.whyChooseUs.images.mainImage} alt="Sofa" className="half-sofa-image" />
                    <img src={data.whyChooseUs.images.dotsImage} alt="Yellow Dots" className="dots-image" />
                </Col>
            </Row>
        </Container>
    );
};

export default SectionThree;
