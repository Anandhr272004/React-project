// import React, { useContext } from "react";
// import { Container, Table, Row, Col, Button } from 'react-bootstrap';
// import { CartContext } from './CartContext';  // Import the CartContext
// import Navebar from "./Navebar";
// import data from './Home.json';
// import './Cart.css';
// import { useNavigate } from "react-router-dom";
// import FooterSection from "./Footer-section";

// const Cart = () => {
//     const navigate = useNavigate();
//     const { cart, setCart } = useContext(CartContext);  // Use cart and setCart from context

//     // Function to handle quantity change
//     const handleQuantityChange = (index, delta) => {
//         const updatedCart = [...cart];
//         updatedCart[index].quantity += delta;
//         if (updatedCart[index].quantity <= 0) {
//             updatedCart[index].quantity = 1;
//         }
//         setCart(updatedCart);
//     };

//     // Function to remove item from cart
//     const removeFromCart = (index) => {
//         const updatedCart = cart.filter((_, i) => i !== index);
//         setCart(updatedCart);
//     };

//     // Calculate the total price for each product (price * quantity)
//     const calculateTotal = (product) => {
//         return (Number(product.price) * product.quantity).toFixed(2);
//     };

//     return (
//         <>  
//            <div className="cart-bg">
//            <Navebar />
//            <header className="hection">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={6}>
//                                 <h1 className="heatitle">Cart</h1>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </header>
//             </div>

       
//             <div className="Cart-component">
//             <Container className="cart-container mt-5">
//                 <h2>Your Cart</h2>
//                 {cart.length > 0 ? (
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>Product</th>
//                                 <th>Price</th>
//                                 <th>Quantity</th>
//                                 <th>Total</th>
//                                 <th>Remove</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cart.map((product, index) => (
//                                 <tr key={index}>
//                                     <td>
//                                         <img 
//                                             src={product.image} 
//                                             alt={product.title} 
//                                             style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
//                                         />
//                                     </td>
//                                     <td>{product.title}</td>
//                                     <td>${Number(product.price).toFixed(2)}</td>
//                                     <td>
//                                         <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, -1)}>-</Button>
//                                         <span style={{ margin: '0 10px' }}>{product.quantity}</span>
//                                         <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, 1)}>+</Button>
//                                     </td>
//                                     <td>${calculateTotal(product)}</td>
//                                     <td>
//                                         <Button variant="danger" onClick={() => removeFromCart(index)}>x</Button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 ) : (
//                     <p>Your cart is empty.</p>
//                 )}
//             </Container>
//         </div>
//         <FooterSection />
//         </>
//     );
// };

// export default Cart;


// import React, { useContext } from "react";
// import { Container, Table, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import { CartContext } from './CartContext';
// import Navebar from "./Navebar";
// import FooterSection from "./Footer-section";
// import './Cart.css';  // Import the CSS file for styles

// const Cart = () => {
//     const { cart, setCart } = useContext(CartContext);
//      const navigate =useNavigate();
//     const handleQuantityChange = (index, delta) => {
//         const updatedCart = [...cart];
//         updatedCart[index].quantity += delta;
//         if (updatedCart[index].quantity <= 0) {
//             updatedCart[index].quantity = 1;
//         }
//         setCart(updatedCart);
//     };

//     const removeFromCart = (index) => {
//         const updatedCart = cart.filter((_, i) => i !== index);
//         setCart(updatedCart);
//     };

//     const calculateTotal = (product) => {
//         return (Number(product.price) * product.quantity).toFixed(2);
//     };

//     const calculateGrandTotal = () => {
//         return cart.reduce((sum, product) => sum + Number(calculateTotal(product)), 0).toFixed(2);
//     };

//     return (
//         < >  
//             <div className="cart-bg">
//                 <Navebar />
//                 <header className="hection">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={6}>
//                                 <h1 className="heatitle">Cart</h1>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </header>
//             </div>
// <div className="bgcart">
//             <Container className="cart-container mt-3">
//                 <Row>
//                     <Col md={12}>
//                         {cart.length > 0 ? (
//                             <Table className="cart-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Image</th>
//                                         <th>Product</th>
//                                         <th>Price</th>
//                                         <th>Quantity</th>
//                                         <th>Total</th>
//                                         <th>Remove</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {cart.map((product, index) => (
//                                         <tr key={index} >
//                                             <td>
//                                                 <img 
//                                                     src={product.image} 
//                                                     alt={product.title} 
//                                                     className="cart-product-image"
//                                                 />
//                                             </td>
//                                             <td>{product.title}</td>
//                                             <td>${Number(product.price).toFixed(2)}</td>
//                                             <td>
//                                                 <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, -1)}>-</Button>
//                                                 <span className="cart-quantity">{product.quantity}</span>
//                                                 <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, 1)}>+</Button>
//                                             </td>
//                                             <td>${calculateTotal(product)}</td>
//                                             <td>
//                                                 <Button variant="danger" onClick={() => removeFromCart(index)}>x</Button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </Table>
//                         ) : (
//                             <p className="yourcartempty">Your cart is empty..</p>
//                         )}
//                         <div className="cart-actions">
//                             <Button variant="dark" className="upcart" onClick={()=>navigate("/shop")}>Update Cart</Button>
//                             <Button variant="dark"className="upcart" onClick={()=>navigate("/shop")}>Continue Shopping</Button>
//                         </div>
//                     </Col>
                    
//                     <Col md={6}>
//                     <div className="cart-coupon mt-5">
//                             <h3>Coupon</h3>
//                             <p>Enter your coupon code if you have one.</p>
//                             {/* <InputGroup className="mb-3 applycode">
//                                 <Form.Control placeholder="Coupon Code" />
//                                 <Button variant="dark" className="applycoupon">Apply Coupon</Button>
//                             </InputGroup> */}
//                             <input type="text" className="mb-3 applycode" placeholder="Coupon Code" ></input>
//                             <Button variant="dark" className="applycoupon">Apply Coupon</Button>
                          
//                         </div>

                        
//                         </Col>
//                         <Col md={6}>
//                         <div className="cart-totals mt-5">
//                             <h3 className="carttotals">CART TOTALS</h3>
//                             <p>Subtotal: <span>${calculateGrandTotal()}</span></p>
//                             <p>Total: <span>${calculateGrandTotal()}</span></p>
//                             <Button variant="dark" className="checkout-btn">Proceed To Checkout</Button>
//                         </div>
                        
//                     </Col>
//                 </Row>
//             </Container>
//             </div>
//                         <div className="cartfooter">
//                         <FooterSection />
//                         </div>
           
//         </>
//     );
// };

// export default Cart;






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
                        {/* <Col md={12}> */}
                            {cart.length > 0 ? (
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
                            ) : (
                                <p className="yourcartempty">Your cart is empty.</p>
                            )}
                            <div className="cart-actions">
                                <Button variant="dark" className="upcart" onClick={()=>navigate("/shop")}>Update Cart</Button>
                                <Button variant="dark" className="upcart" onClick={()=>navigate("/shop")}>Continue Shopping</Button>
                            </div>
                        {/* </Col> */}
                        
                        <Col md={6}>
                            <div className="cart-coupon mt-5">
                                <h3>Coupon</h3>
                                <p>Enter your coupon code if you have one.</p>
                                
                                 <input type="text" className="mb-3 applycode" placeholder="Coupon Code" ></input>
                                 <Button variant="dark" className="applycoupon">Apply Coupon</Button>
                            </div>
                        </Col>
                        
                        <Col md={6}>
                            <div className="cart-totals mt-5">
                                <h3 className="carttotals">CART TOTALS</h3>
                                <p>Subtotal: <span>${calculateGrandTotal()}</span></p>
                                <p>Total: <span>${calculateGrandTotal()}</span></p>
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
