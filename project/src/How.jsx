import React, { useState } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { SlPlus } from "react-icons/sl";
import './How.css'; // Import the custom CSS

const How = () => {

    return (
        <>
            <div className='product-section'>
                <a className="product-item">
                    <img src="./Images/product-1.png" style={{ width: '100%', height: 'auto' }} />
                    <h3 className='product-title'>nodic</h3>
                    <strong className='product-price'>$500</strong>
                 <div className="icon-overlay">
                        <span className="hover-icon-overlay">
                            <SlPlus />
                        </span>
                    </div>
                </a>
            </div>

<div className='product-section'>
      <Card className="product-item" >
        <Card.Img  src="./Images/product-1.png" style={{ width: '100%', height: 'auto' }} />
        <Card.Body>
          <Card.Title className='product-title'>Nordic</Card.Title>
          <Card.Text
             className='product-price'>$500
          </Card.Text>
          <div className="icon-overlay">
            <span className="hover-icon-overlay">
              <SlPlus />
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>

        </>
    )
};

export default How;
