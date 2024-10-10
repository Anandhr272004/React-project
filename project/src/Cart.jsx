
// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// // import './Cart.css'; /// Optional: Add your own styles here

// const Cart = ({ cartItems = [], removeFromCart }) => {
//     // Calculate total price
//     const totalPrice = cartItems.length > 0 
//         ? cartItems.reduce((total, item) => total + parseFloat(item.price), 0) 
//         : 0;

//     return (
//         <div className="Cart-component">
//             <Container className="cart-container mt-5">
//                 <h2>Your Cart</h2>
//                 {cartItems.length === 0 ? (
//                     <p>Your cart is empty.</p>
//                 ) : (
//                     <>
//                         <Row>
//                             {cartItems.map((item, index) => (
//                                 <Col lg={3} md={4} sm={12} key={index} className="mb-4">
//                                     <Card className="cart-item-card">
//                                         <Card.Img variant="top" src={item.image} alt={item.title} />
//                                         <Card.Body>
//                                             <Card.Title>{item.title}</Card.Title>
//                                             <Card.Text>Price: {item.price}</Card.Text>
//                                             <Button variant="danger" onClick={() => removeFromCart(index)}>
//                                                 Remove
//                                             </Button>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                         <div className="cart-total">
//                             <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
//                         </div>
//                     </>
//                 )}
//             </Container>
//         </div>
//     );
// };

// export default Cart;

import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
    const location = useLocation();
    const { cart } = location.state || { cart: [] }; // Get the cart from the state passed via navigation

    return (
        <div className="Cart-component">
            <Container className="cart-container">
                <h2>Your Cart</h2>
                {cart.length > 0 ? (
                    <Row>
                        {cart.map((product, index) => (
                            <Col lg={3} md={4} sm={12} key={index}>
                                <Card className="productcard">
                                    <div className="image-container">
                                        <Card.Img
                                            variant="top"
                                            src={product.image}
                                            className="img-fluid"
                                            alt={product.title}
                                        />
                                        <Card.Body>
                                            <Card.Title className="product-title">{product.title}</Card.Title>
                                            <Card.Text className="product-price">{product.price}</Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </Container>
        </div>
    );
};

export default Cart;
