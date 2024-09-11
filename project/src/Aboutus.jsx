// import React from 'react'
// import Navebar from './Navebar';
// import './Aboutus.css'
// import './App.css'
// import Headersection from './Header-section';
// import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
// import { FaShippingFast, FaShoppingBag, FaHeadset, FaExchangeAlt } from "react-icons/fa";
// import data from "./Home.json";
// import SectionThree from './Section-three';
// import FooterSection from './Footer-section';

// import {Link, useLocation , useNavigate } from "react-router-dom";

// const iconMapping = {
//     FaShippingFast: <FaShippingFast size={35} className="mb-3" />,
//     FaShoppingBag: <FaShoppingBag size={35} className="mb-3" />,
//     FaHeadset: <FaHeadset size={35} className="mb-3" />,
//     FaExchangeAlt: <FaExchangeAlt size={35} className="mb-3" />
// };
// const Aboutus = () => {
    
//     const location = useLocation();
//     return (
//         <div className='Aboutus'>
//             <div className='aboutus-bg'>
//                 <Navebar />
                
       
//                 <header className="headersection">
//                 <Container>
//                     <Row className="align-items-center">
//                         <Col xs={12} md={6}>
//                             <h1 className="header-title">
//                                  <React.Fragment>
//                                     About us <br />
//                                     </React.Fragment>
//                             </h1>
//                             <p className="header-subtitle">
//                                 {data.header.subtitle.split("\n").map((line, index) => (
//                                     <React.Fragment key={index}>
//                                         {line} <br />
//                                     </React.Fragment>
//                                 ))}
//                             </p>
//                             {data.header.buttons.map((button, index) => (
//                                 <Button key={index} id={button.id}>
//                                     {button.label}
//                                 </Button>
//                             ))}
//                         </Col>
//                         <Col xs={12} md={6} className="text-center">
//                             <img
//                                 src={data.header.image}
//                                 alt={data.header.imageAlt}
//                                 className="img-fluid"
//                             />
//                         </Col>
//                     </Row>
//                 </Container>
//             </header>
//             </div>

      

//             <div className='aboutus-one'>
//             <Container className="why-choose-us-section">
//             <Row>
//                 <Col lg={6}>
//                     <h2>{data.whyChooseUs.sectionTitle}</h2>
//                     <p>{data.whyChooseUs.sectionDescription}</p>
//                     <Row className="features">
//                         {data.whyChooseUs.features.map((feature, index) => (
//                             <Col sm={6} className="feature-item" key={index}>
//                                 <div className="icon-container">
//                                     {iconMapping[feature.icon]}
//                                 </div>
//                                 <h5>{feature.title}</h5>
//                                 <p>{feature.description}</p>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Col>
//                 <Col lg={6} className="image-container">
//                     <img src={data.whyChooseUs.images.mainImage} alt="Sofa" id="halfsofaimage" />
//                     <img src={data.whyChooseUs.images.dotsImage} alt="Yellow Dots" id="dotsimage" />
//                 </Col>
//             </Row>
//         </Container>


//             </div>
            
//             <div className='about-two mt-5 pt-5'>
//             <FooterSection />
//             </div>
          


//         </div>
//     );
// }
// export default Aboutus;


import React from 'react';
import Navebar from './Navebar';
import './Aboutus.css';
import './App.css';
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { FaShippingFast, FaShoppingBag, FaHeadset, FaExchangeAlt } from "react-icons/fa";
import data from "./Home.json";
import SectionThree from './Section-three';
import FooterSection from './Footer-section';

const iconMapping = {
    FaShippingFast: <FaShippingFast size={35} className="mb-3" />,
    FaShoppingBag: <FaShoppingBag size={35} className="mb-3" />,
    FaHeadset: <FaHeadset size={35} className="mb-3" />,
    FaExchangeAlt: <FaExchangeAlt size={35} className="mb-3" />
};

const Aboutus = () => {
    return (
        <div className='Aboutus'>
            <div className='aboutus-bg'>
                <Navebar />
                <header className="headersection">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="header-title">
                                    About us <br />
                                </h1>
                                <p className="header-subtitle">
                                    {data.header.subtitle.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line} <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {data.header.buttons.map((button, index) => (
                                    <Button key={index} id={button.id}>
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

            <div className='aboutus-one'>
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
                            <img src={data.whyChooseUs.images.mainImage} alt="Sofa" id="halfsofaimage" />
                            <img src={data.whyChooseUs.images.dotsImage} alt="Yellow Dots" id="dotsimage" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='about-two'>
                <FooterSection />
            </div>
        </div>
    );
};

export default Aboutus;
