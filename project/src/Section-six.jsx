import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const SectionSix = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center">Testimonials</h1>
            <Carousel indicators={false} interval={3000} className="testimonial-carousel">
                <Carousel.Item>
                    <div className="testimonial-content text-center">
                        <p>
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristiq
                            ue  Integer convallis volutpat dui quis scelerisque.”
                        </p>
                        <img
                            src="./Images/person-1.png" // Replace with the actual image URL
                            alt="Maria Jones"
                            className="testimonial-img rounded-circle mt-4"
                        />
                        <h5 className="mt-3">Maria Jones</h5>
                        <p className="text-muted">CEO, Co-Founder, XYZ Inc.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonial-content text-center">
                        <p>
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristiq
                            ue  Integer convallis volutpat dui quis scelerisque.”
                        </p>
                        <img
                            src="./Images/person_2.jpg" // Replace with the actual image URL
                            alt="John Doe"
                            className="testimonial-img rounded-circle mt-4"
                        />
                        <h5 className="mt-3">John Doe</h5>
                        <p className="text-muted">CTO, ABC Corp.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonial-content text-center">
                        <p>
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristiq
                            ue  Integer convallis volutpat dui quis scelerisque.”
                        </p>
                        <img
                            src="./Images/person_3.jpg" // Replace with the actual image URL
                            alt="John Doe"
                            className="testimonial-img rounded-circle mt-4"
                        />
                        <h5 className="mt-3">Jimmy</h5>
                        <p className="text-muted">CTS, TCS Corp.</p>
                    </div>
                </Carousel.Item>
                {/* Add more Carousel.Item components for additional testimonials */}
            </Carousel>
        </Container>
    );
};

export default SectionSix;
