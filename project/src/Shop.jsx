// import React, { useState } from "react";
// import Navebar from "./Navebar";
// import './Shop.css'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { FaPlusCircle } from 'react-icons/fa';
// import FooterSection from "./Footer-section";
// import data from './Home.json';
// import { useNavigate } from "react-router-dom";
// const Shop = () => {
//     const navigate = useNavigate();

//     const [cart, SetCart] = useState([]);
//     // Function to handle adding products to the cart
//     const addToCart = (product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.title} added to cart!`);
//     };
//     return (
//         <div className="Shop-component">
//             <div className="aboutus-bg">
//                 <Navebar />
//                 <header className="header-section">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={6}>
//                                 <h1 className="headertitle">
//                                     Shop<br />
//                                 </h1>
//                                 <p className="header-subtitle">
//                                     {data.header.subtitle.split("\n").map((line, index) => (
//                                         <React.Fragment key={index}>
//                                             {line} <br />
//                                         </React.Fragment>
//                                     ))}
//                                 </p>
//                                 {data.header.buttons.map((button, index) => (
//                                     <Button key={index} id={button.id} onClick={() => navigate("/shop")}>
//                                         {button.label}
//                                     </Button>
//                                 ))}
//                                 {data.header.buttons1.map((button, index) => (
//                                     <Button key={index} id={button.id} onClick={() => navigate("/")}>
//                                         {button.label}
//                                     </Button>
//                                 ))}
//                             </Col>
//                             <Col xs={12} md={6} className="text-center">
//                                 <img
//                                     src={data.header.image}
//                                     alt={data.header.imageAlt}
//                                     className="img-fluid"
//                                 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </header>
//             </div>
//             <div className="bg-color">

//                 <div className="shop-component">
//                     <Container className="shop-container mt-5">
//                         <Row>
//                             {data.shop.map((product) => (
//                                 <Col lg={3} md={4} sm={12} className="mb-4 productcolumn" key={product.id}>
//                                     <Card className="productcard">
//                                         <div className="image-container">
//                                             <Card.Img
//                                                 variant="top"
//                                                 src={product.image}
//                                                 className="img-fluid"
//                                                 alt={product.title}
//                                             />
//                                             <Card.Body>
//                                                 <Card.Title className="product-title">{product.title}</Card.Title>
//                                                 <Card.Text className="product-price">{product.price}</Card.Text>
//                                             </Card.Body>
//                                             <div className="icon-overlay">
//                                                 <span className="hover-icon-overlay" onClick={() => addToCart(product)}>
//                                                     <FaPlusCircle />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Container>
//                     <div className="bgextra"></div>
//                 </div>
//             </div>

//             <FooterSection />
//         </div>


//     )
// }
// export default Shop;



/////use of alert box to display a messgae
// import React, { useContext} from "react";
// import Navebar from "./Navebar";
// import './Shop.css';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { FaPlusCircle } from 'react-icons/fa';
// import FooterSection from "./Footer-section";
// import data from './Home.json';
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "./CartContext"; // Import CartContext

// const Shop = () => {
//     const navigate = useNavigate();
//     const { cart, setCart  } = useContext(CartContext); // Access the addToCart function from context

//   // Function to add a product to the cart
// const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const productInCart = cart.find((item) => item.id === product.id);

//     // If product is already in the cart, increase the quantity
//     if (productInCart) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...productInCart, quantity: productInCart.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       // Otherwise, add the new product to the cart
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }

//     // Show alert message after product is added to the cart
//     alert(`${product.title} has been added to the cart successfully!`);
// };


//     return (
//         <div className="Shop-component">
//             <div className="aboutus-bg">
//                 <Navebar />
//                 <header className="header-section">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={6}>
//                                 <h1 className="headertitle">Shop</h1>
//                                 <p className="header-subtitle">
//                                     {data.header.subtitle.split("\n").map((line, index) => (
//                                         <React.Fragment key={index}>
//                                             {line} <br />
//                                         </React.Fragment>
//                                     ))}
//                                 </p>
//                                 {data.header.buttons.map((button, index) => (
//                                     <Button key={index} id={button.id} onClick={() => navigate("/shop")}>
//                                         {button.label}
//                                     </Button>
//                                 ))}
//                                 {data.header.buttons1.map((button, index) => (
//                                     <Button key={index} id={button.id} onClick={() => navigate("/")}>
//                                         {button.label}
//                                     </Button>
//                                 ))}
//                             </Col>
//                             <Col xs={12} md={6} className="text-center">
//                                 <img
//                                     src={data.header.image}
//                                     alt={data.header.imageAlt}
//                                     className="img-fluid"
//                                 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </header>
//             </div>

//             <div className="bg-color">
//                 <div className="shop-component">
//                     <Container className="shop-container mt-5">
//                         <Row>
//                             {data.shop.map((product) => (
//                                 <Col lg={3} md={4} sm={12} className="mb-4 productcolumn" key={product.id}>
//                                     <Card className="productcard">
//                                         <div className="image-container">
//                                             <Card.Img
//                                                 variant="top"
//                                                 src={product.image}
//                                                 className="img-fluid"
//                                                 alt={product.title}
//                                             />
//                                             <Card.Body>
//                                                 <Card.Title className="product-title">{product.title}</Card.Title>
//                                                 <Card.Text className="product-price">${Number(product.price).toFixed(2)}</Card.Text>
//                                             </Card.Body>
//                                             <div className="icon-overlay">
//                                                 <span className="hover-icon-overlay" onClick={() => addToCart(product)}>
//                                                     <FaPlusCircle />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Container>
//                     {/* <Button onClick={() => navigate("/cart")} className="mt-3">Go to Cart</Button> */}
//                     <div className="bgextra"></div>
//                 </div>
//             </div>

//             <FooterSection />
//         </div>
//     );
// };

// export default Shop;





// // use model to display a message
// import React, { useContext, useState } from "react";
// import Navebar from "./Navebar";
// import './Shop.css';
// import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
// import { FaPlusCircle } from 'react-icons/fa';
// import FooterSection from "./Footer-section";
// import data from './Home.json';
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "./CartContext"; // Import CartContext

// const Shop = () => {
//     const navigate = useNavigate();
//     const { cart, setCart } = useContext(CartContext); // Access the addToCart function from context

//     const [showModal, setShowModal] = useState(false); // State to control modal visibility
//     const [modalMessage, setModalMessage] = useState(''); // State to hold the modal message

//     // Function to add a product to the cart
//     const addToCart = (product) => {
//         // Check if the product is already in the cart
//         const productInCart = cart.find((item) => item.id === product.id);

//         // If product is already in the cart, increase the quantity
//         if (productInCart) {
//             setCart(
//                 cart.map((item) =>
//                     item.id === product.id
//                         ? { ...productInCart, quantity: productInCart.quantity + 1 }
//                         : item
//                 )
//             );
//         } else {
//             // Otherwise, add the new product to the cart
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }

//         // Set the modal message and show the modal
//         setModalMessage(`${product.title} has been added to the cart successfully!`);
//         setShowModal(true);
//     };

//     // Function to close the modal
//     const closeModal = () => {
//         setShowModal(false);
//         setModalMessage('');
//     };

//     return (
//         <div className="Shop-component">
//             <div className="aboutus-bg">
//                 <Navebar />
//                 <header className="header-section">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={6}>
//                                 <h1 className="headertitle">Shop</h1>
//                                 <p className="header-subtitle">
//                                     {data.header.subtitle.split("\n").map((line, index) => (
//                                         <React.Fragment key={index}>
//                                             {line} <br />
//                                         </React.Fragment>
//                                     ))}
//                                 </p>
//                                 {data.header.buttons.map((button, index) => (
//                                     <Button key={index} id={button.id} onClick={() => navigate("/shop")}>
//                                         {button.label}
//                                     </Button>
//                                 ))}
//                                 {data.header.buttons1.map((button, index) => (
//                                     <Button key={index} id={button.id} onClick={() => navigate("/")}>
//                                         {button.label}
//                                     </Button>
//                                 ))}
//                             </Col>
//                             <Col xs={12} md={6} className="text-center">
//                                 <img
//                                     src={data.header.image}
//                                     alt={data.header.imageAlt}
//                                     className="img-fluid"
//                                 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </header>
//             </div>

//             <div className="bg-color">
//                 <div className="shop-component">
//                     <Container className="shop-container mt-5">
//                         <Row>
//                             {data.shop.map((product) => (
//                                 <Col lg={3} md={4} sm={12} className="mb-4 productcolumn" key={product.id}>
//                                     <Card className="productcard">
//                                         <div className="image-container">
//                                             <Card.Img
//                                                 variant="top"
//                                                 src={product.image}
//                                                 className="img-fluid"
//                                                 alt={product.title}
//                                             />
//                                             <Card.Body>
//                                                 <Card.Title className="product-title">{product.title}</Card.Title>
//                                                 <Card.Text className="product-price">${Number(product.price).toFixed(2)}</Card.Text>
//                                             </Card.Body>
//                                             <div className="icon-overlay">
//                                                 <span className="hover-icon-overlay" onClick={() => addToCart(product)}>
//                                                     <FaPlusCircle />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Container>
//                     <div className="bgextra"></div>
//                 </div>
//             </div>

//             <FooterSection />

//             {/* Modal for success message */}
//             <Modal show={showModal} onHide={closeModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Product Added</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>{modalMessage}</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={closeModal}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default Shop;



/////new code updated code
import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navebar from './Navebar';
import FooterSection from './Footer-section';
import axios from 'axios';
import './Shop.css';
import data from './Home.json';
import { CartContext } from './CartContext'; // Import CartContext

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Modal message state
  const { cart, setCart } = useContext(CartContext); // Access CartContext
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('http://localhost:5001/api/products');
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setModalMessage(`${product.name} has been added to the cart successfully!`);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    // <div>
    //   <Navebar />
    //   <header className="header-section">
    //     <Container>
    //       <Row className="align-items-center">
    //         <Col xs={12} md={6}>
    //           <h1 className="headertitle">Shop</h1>
    //           <p className="header-subtitle">Browse our amazing products</p>
    //           <Button onClick={() => navigate('/shop')}>Go to Shop</Button>
    //           <Button onClick={() => navigate('/')}>Back to Home</Button>
    //         </Col>

    //         {/* /// */}
    //         <Col xs={12} md={6} className="text-center">
    //           <img src="shop-header-image.jpg" alt="Shop" className="img-fluid" />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </header>

        <div className="Shop-component">
            <div className="aboutus-bg">
                <Navebar />
                <header className="header-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <h1 className="headertitle">Shop</h1>
                                <p className="header-subtitle">
                                    {data.header.subtitle.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line} <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {data.header.buttons.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={() => navigate("/shop")}>
                                        {button.label}
                                    </Button>
                                ))}
                                {data.header.buttons1.map((button, index) => (
                                    <Button key={index} id={button.id} onClick={() => navigate("/")}>
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

      <div className="bg-color">
        <Container className="shop-container mt-5">
          <Row>
            {products.length > 0 ? (
              products.map((product) => (
                <Col lg={3} md={4} sm={12} className="mb-4 productcolumn" key={product._id}>
                  <Card className="productcard">
                    <div className="image-container">
                      <Card.Img
                        variant="top"
                        src={product.imageBase64}
                        className="img-fluid"
                        alt={product.name}
                         width="100"
                         height="50"
                      />
                      <Card.Body>
                        <Card.Title className="product-title">{product.name}</Card.Title>
                        <Card.Text className="product-price">${product.price}</Card.Text>
                        <Card.Text className="product-description">{product.description}</Card.Text>
                      </Card.Body>
                      <div className="icon-overlay">
                        <span
                          className="hover-icon-overlay"
                          onClick={() => addToCart(product)}
                        >
                          <FaPlusCircle />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </Row>
        </Container>
        <div className="bgextra"></div>
      </div>
      {/* </div> */}

      <FooterSection />

      {/* Modal for success message */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Shop;
