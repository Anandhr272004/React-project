import React, { useContext, useState } from "react";
import { Container, Table, Row, Col, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';
import Navebar from "./Navebar";
import FooterSection from "./Footer-section";
import './Cart.css';  // Import the CSS file for styles

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    // State to control the visibility of the checkout modal
    const [showModal, setShowModal] = useState(false);

    const handleQuantityChange = (index, delta) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += delta;
        if (updatedCart[index].quantity <= 0) {
            updatedCart[index].quantity = 1;
        }
        setCart(updatedCart);
    };

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const calculateTotal = (product) => {
        return (Number(product.price) * product.quantity).toFixed(2);
    };

    const calculateGrandTotal = () => {
        return cart.reduce((sum, product) => sum + Number(calculateTotal(product)), 0).toFixed(2);
    };

    const handleCheckout = () => {
        setShowModal(true);  // Show the modal when the "Proceed To Checkout" button is clicked
    };

    const closeModal = () => {
        setShowModal(false);  // Close the modal
        setCart([]);  // Optionally clear the cart after the purchase
        navigate("/");  // Redirect to the homepage or another page after checkout
    };

    return (
        <>
            <div className="cart-bg">
                <Navebar />
                <header className="hection">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="heatitle">Cart</h1>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>
            <div className="bgcart">
                <Container className="cart-container mt-3">
                    <Row>
                        {cart.length > 0 ? (
                            <div className="table-responsive">
                                <Table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((product, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="cart-product-image"
                                                    />
                                                </td>
                                                <td>{product.title}</td>
                                                <td>${Number(product.price).toFixed(2)}</td>
                                                <td>
                                                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                                                    <span className="cart-quantity">{product.quantity}</span>
                                                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                                                </td>
                                                <td>${calculateTotal(product)}</td>
                                                <td>
                                                    <Button variant="danger" onClick={() => removeFromCart(index)}>x</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>

                        ) : (
                            <p className="yourcartempty">Your cart is empty.</p>
                        )}
                        <div className="cart-actions w-100">
                            <Col md={6} className="mb-2">
                                <Button variant="dark" className="upcart" onClick={() => navigate("/shop")}>Update Cart</Button>
                            </Col>
                            <Col md={6} >
                                <Button variant="dark" className="upcart upcartone" onClick={() => navigate("/shop")}>Continue Shopping</Button>
                            </Col>
                        </div>


                        <Col md={6}>
                            <div className="cart-coupon">
                                <h3>Coupon</h3>
                                <p>Enter your coupon code if you have one.</p>

                                <input type="text" className="mb-3 applycode" placeholder="Coupon Code" ></input>
                                <Button variant="dark" className="applycoupon">Apply Coupon</Button>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="cart-totals">
                                <h3 className="carttotals">CART TOTALS</h3>
                                <p >Subtotal: <span>${calculateGrandTotal()}</span></p>
                                <p >Total: <span>${calculateGrandTotal()}</span></p>
                                <Button variant="dark" className="checkout-btn mt-2" onClick={handleCheckout}>
                                    Proceed To Checkout
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="cartfooter">
                <FooterSection />
            </div>

            {/* Modal for checkout confirmation */}
            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Thanks for your purchase! Your order is confirmed.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={closeModal}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;
