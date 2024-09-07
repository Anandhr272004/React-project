import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import data from './Home.json';
import './Section_six.css'

const SectionSix = () => {
    return (
        <Container className="my-5">
            <h1 className="test">Testimonials</h1>
           
            <Carousel indicators={false} interval={2000} className="testimonial-carousel">
            {data.testimonials.map((test,index)=>(
                <Carousel.Item key={index.id}>
                  
                         <div  className="testimonial-content text-center">
                         <p>
                            {test.content}
                         </p>
                         <img
                             src={test.img} // Replace with the actual image URL
                             alt="Maria Jones"
                             className="testimonial-img"
                         />
                         <h5 className="mt-3">{test.name}</h5>
                         <p className="text-muted">{test.designation}</p>
                     </div>
                    
                   
                </Carousel.Item>
                    ))}
            </Carousel>
              
        </Container>
    );
};

export default SectionSix;
