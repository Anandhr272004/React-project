// import React,{useState,useEffect} from 'react';
// import { Container, Navbar, Nav, Button, Row, Col, Card,Table, Image, Dropdown,Form } from 'react-bootstrap';
// import { useNavigate, Link, Route, Routes,useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { FaBars, FaChevronRight } from 'react-icons/fa';
// import './Adminpannel.css';
// import { MdSpaceDashboard } from "react-icons/md";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { FaListUl } from "react-icons/fa6";
// import { TbReportSearch } from "react-icons/tb";


// const Dashboard = () => {
//   return (
//     <Container fluid className="p-5">
//       <Row>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Categories </Card.Title>
//               <Card.Text style={{ fontSize: '2rem', color: 'white' }}>1,255</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
//             <Card.Body>
//               <Card.Title> Total Products </Card.Title>
//               <Card.Text style={{ fontSize: '2rem', color: 'white' }}>250</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products sold</Card.Title>
//               <Card.Text style={{ fontSize: '2rem', color: 'white' }}>960</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
    
//       <Card className='pro mt-5'>
//         <Card.Body >
//           <Row>
//             <Col md={6}></Col>
//             <Col md={6}></Col>
//           </Row>
//         </Card.Body>
//       </Card>

     
//       <Row className='mt-5'>
//         <Col md={6} >
//           <Card className='pro1'>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className='pro1'>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>

//         </Col>
//       </Row>
//     </Container>
//   );
// };


// // const Product = () => {
// //   return (
// //     <h2 className="p-5">
// //       <Card className="pro2 mt-3">
// //         <Card.Body>
// //           <Row>
// //             <Col md={6}></Col>
// //             <Col md={6}></Col>
// //           </Row>
// //         </Card.Body>
// //       </Card>
// //     </h2>
// //   );
// // };



// // const AddNew = () => {
// //   const { handleSubmit } = useForm();
// //   const navigate = useNavigate();

// //   const onSubmit = (data) => {
// //     console.log(data);
// //     navigate("/"); // replace "/some-path" with the path you want to navigate to
// //   };

// //   return (
// //     <h2 className="p-5">
// //       <Card className="pro23 mt-3">
// //         <Card.Body >
// //           <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
// //             <Form.Group controlId="name">
// //               <Form.Label>Name</Form.Label>
// //               <Form.Control type="text"
// //                placeholder="Enter Name" />
// //             </Form.Group>

// //             <Form.Group controlId="email" className="mt-3">
// //               <Form.Label>Email Address</Form.Label>
// //               <Form.Control type="email" placeholder="Enter Email Address" />
// //             </Form.Group>

// //             <Form.Group controlId="password" className="mt-3">
// //               <Form.Label>Password</Form.Label>
// //               <Form.Control type="password" placeholder="Enter Password" />
// //             </Form.Group>

// //             <Button
// //               type="submit"
// //               className="w-100 mt-4 sigbutton"
// //               variant="primary"
// //             >
// //               Sign Up
// //             </Button>
// //           </Form>

// //         </Card.Body>
// //       </Card>
// //     </h2>
// //   );
// // };


// const AddNew = ({ users, setUsers }) => {
//     const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
//     const navigate = useNavigate();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setUsers([...users, { ...user, id: users.length + 1 }]); // Add new user to state
//       navigate('/admin/users/manage'); // Redirect to the user management page
//     };
  
//     return (
//       <Container className="p-5">
//         <h2>Add New User</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control
//               type="tel"
//               value={user.phone}
//               onChange={(e) => setUser({ ...user, phone: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={user.confirmPassword}
//               onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Button type="submit" className="mt-3">
//             Add User
//           </Button>
//         </Form>
//       </Container>
//     );
//   };

//   const EditUser = ({ users, setUsers }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  
//     useEffect(() => {
//       const existingUser = users.find(user => user.id === parseInt(id));
//       if (existingUser) {
//         setUser(existingUser);
//       }
//     }, [id, users]);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const updatedUsers = users.map(u => (u.id === parseInt(id) ? user : u));
//       setUsers(updatedUsers); // Update users list
//       navigate('/admin/users/manage'); // Redirect after update
//     };
  
//     return (
//       <Container className="p-5">
//         <h2>Edit User</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control
//               type="tel"
//               value={user.phone}
//               onChange={(e) => setUser({ ...user, phone: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={user.confirmPassword}
//               onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Button type="submit" className="mt-3">
//             Save Changes
//           </Button>
//         </Form>
//       </Container>
//     );
//   };
  
// const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;

// const Adminpannel = () => {
//     const [users, setUsers] = useState([
//         { id: 1, name: 'John Doe', email: 'mailto:john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
//         { id: 2, name: 'Jane Smith', email: 'mailto:jane@example.com', phone: '0987654321', password: 'password456', confirmPassword: 'password456' }
//       ]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <Container fluid className="p-0" style={{ backgroundColor: 'lavender' }}>
//       <Navbar id="navebar" expand="lg" className="px-5">
//         <Navbar.Brand style={{ color: 'white', fontSize: '1.6rem' }}>
//           {/* <FaBars />  */}
//           Admin Panel
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
//             <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Row >
//         <Col md={2} className="sidebar">
//           <Nav className="flex-column">
//             <div className="sidebar-section">
//               <MdSpaceDashboard className="icon" />
//               <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <Dropdown >
//               <Dropdown.Toggle  id="dropdown-basic"  >
//            product
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item 
//                   as={Link} to="/admin/products/AddNew" className='product' >Add New Products
//                   </Dropdown.Item>
//                 <Dropdown.Item  as={Link} to="/admin/products/Manage" className='product'>Manage Products </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <div className="sidebar-section">
//               <TbReportSearch className="icon" />
//               <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//           </Nav>
//         </Col>
//         <Col md={10}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             {/* <Route path="/product" element={<Product />} /> */}
//             <Route path="/products/AddNew" element={<AddNew />} />
//             {/* <Route path="/products/Manage" element={<Manage />} /> */}
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/products/add" element={<AddNew users={users} setUsers={setUsers} />} />
//             <Route path="/products/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Adminpannel;




// 2ndjdfvjnsdfjvnjsdfb



// import React, { useState, useEffect } from 'react';
// import { Container, Navbar, Nav, Button, Row, Col, Card, Form,Table,Dropdown } from 'react-bootstrap';
// import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
// import { MdSpaceDashboard } from "react-icons/md";
// import { FaChevronRight } from "react-icons/fa";
// import { TbReportSearch } from "react-icons/tb";
// import './Adminpannel.css';

// // Dashboard Component
// const Dashboard = () => {
//   return (
//     <Container fluid className="p-5">
//       <Row>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Categories</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>1,255</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>250</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products Sold</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>960</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // Add New User Component
// const AddNewUser = ({ users, setUsers }) => {
//   const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUsers([...users, { ...user, id: users.length + 1 }]);
//     navigate('/admin/users/manage');
//   };

//   return (
//     <Container className="p-5">
//       <h2>Add New User</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="tel"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.confirmPassword}
//             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Button type="submit" className="mt-3">
//           Add User
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// // Edit User Component
// const EditUser = ({ users, setUsers }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

//   useEffect(() => {
//     const existingUser = users.find((u) => u.id === parseInt(id));
//     if (existingUser) setUser(existingUser);
//   }, [id, users]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedUsers = users.map((u) => (u.id === parseInt(id) ? user : u));
//     setUsers(updatedUsers);
//     navigate('/admin/users/manage');
//   };

//   return (
//     <Container className="p-5">
//       <h2>Edit User</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="tel"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.confirmPassword}
//             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Button type="submit" className="mt-3">
//           Save Changes
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// const AllUsers = ({ users, setUsers }) => {
//     const handleDelete = (id) => {
//       const updatedUsers = users.filter(user => user.id !== id);
//       setUsers(updatedUsers);
//     };
  
//     return (
//       <Container className="p-5">
//         <Row>
//           <Col md={12}>
//             <h2>Manage Users</h2>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone Number</th>
//                   <th>Password</th>
//                   <th>Confirm Password</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map(user => (
//                   <tr key={user.id}>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.password}</td>
//                     <td>{user.confirmPassword}</td>
//                     <td>
//                       <Button variant="primary" as={Link} to={`/admin/users/edit/${user.id}`}>Edit</Button>{' '}
//                       <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>
//     );
//   };


// // Reports Component
// const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;

// // Admin Panel Component
// const AdminPanel = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', password: 'password456', confirmPassword: 'password456' },
//   ]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <Container fluid className="p-0" style={{ backgroundColor: 'lavender' }}>
//       <Navbar id="navbar" expand="lg" className="px-5">
//         <Navbar.Brand style={{ color: 'white', fontSize: '1.6rem' }}>Admin Panel</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
//             <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Row>
//         <Col md={2} className="sidebar">
//           <Nav className="flex-column">
//             <div className="sidebar-section">
//               <MdSpaceDashboard className="icon" />
//               <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <Dropdown>
//               <Dropdown.Toggle id="dropdown-basic">Product</Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item as={Link} to="/admin/products/add">Add New Product</Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/admin/users/manage">Manage Products</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <div className="sidebar-section">
//               <TbReportSearch className="icon" />
//               <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//           </Nav>
//         </Col>
//         <Col md={10}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/products/add" element={<AddNewUser users={users} setUsers={setUsers} />} />
//             <Route path="/products/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
//             <Route path="/users/manage" element={<AllUsers users={users} setUsers={setUsers} />} />
//             <Route path="/reports" element={<Reports />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPanel;






/////3rd sdfghjmk,





// import React, { useState, useEffect } from 'react';
// import { Container, Navbar, Nav, Button, Row, Col, Card, Form,Table,Dropdown } from 'react-bootstrap';
// import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
// import { MdSpaceDashboard } from "react-icons/md";
// import { FaChevronRight } from "react-icons/fa";
// import { TbReportSearch } from "react-icons/tb";
// import './Adminpannel.css';

// // Dashboard Component
// const Dashboard = () => {
//   return (
//     <Container fluid className="p-5">
//       <Row>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Categories</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>1,255</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>250</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products Sold</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>960</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // Add New User Component
// const AddNewUser = ({ users, setUsers }) => {
//   const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//      const newUser ={...user, id: users.length + 1 };
//         setUser([newUser,...users]);
 
//     navigate('/admin/users/manage');
//   };

//   return (
//     <Container className="p-5">
//       <h2>Add New User</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="tel"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.confirmPassword}
//             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Button type="submit" className="mt-3">
//           Add User
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// // Edit User Component
// const EditUser = ({ users, setUsers }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

//   useEffect(() => {
//     const existingUser = users.find((u) => u.id === parseInt(id));
//     if (existingUser) setUser(existingUser);
//   }, [id, users]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedUsers = users.map((u) => (u.id === parseInt(id) ? user : u));
//     setUsers(updatedUsers);
//     navigate('/admin/users/manage');
//   };

//   return (
//     <Container className="p-5">
//       <h2>Edit User</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="tel"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.confirmPassword}
//             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Button type="submit" className="mt-3">
//           Save Changes
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// const AllUsers = ({ users, setUsers }) => {
//     const handleDelete = (id) => {
//       const updatedUsers = users.filter(user => user.id !== id);
//       setUsers(updatedUsers);
//     };
  
//     return (
//       <Container className="p-5">
//         <Row>
//           <Col md={12}>
//             <h2>Manage Users</h2>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone Number</th>
//                   <th>Password</th>
//                   <th>Confirm Password</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map(user => (
//                   <tr key={user.id}>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.password}</td>
//                     <td>{user.confirmPassword}</td>
//                     <td>
//                       <Button variant="primary" as={Link} to={`/admin/users/edit/${user.id}`}>Edit</Button>{' '}
//                       <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>
//     );
//   };


// // Reports Component
// const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;

// // Admin Panel Component
// const AdminPanel = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', password: 'password456', confirmPassword: 'password456' },
//   ]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <Container fluid className="p-0" style={{ backgroundColor: 'lavender' }}>
//       <Navbar id="navbar" expand="lg" className="px-5">
//         <Navbar.Brand style={{ color: 'white', fontSize: '1.6rem' }}>Admin Panel</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
//             <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Row>
//         <Col md={2} className="sidebar">
//           <Nav className="flex-column">
//             <div className="sidebar-section">
//               <MdSpaceDashboard className="icon" />
//               <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <Dropdown>
//               <Dropdown.Toggle id="dropdown-basic">Product</Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item as={Link} to="/admin/products/add">Add New Product</Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/admin/users/manage">Manage Products</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <div className="sidebar-section">
//               <TbReportSearch className="icon" />
//               <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//           </Nav>
//         </Col>
//         <Col md={10}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/products/add" element={<AddNewUser users={users} setUsers={setUsers} />} />
//             <Route path="/products/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />

//             <Route path="/users/manage" element={<AllUsers users={users} setUsers={setUsers} />} />
//             <Route path="/reports" element={<Reports />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPanel;




///////4thbdhbhbjvnjfnvk




import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Form,Table,Dropdown,Image } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Line, Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
import './Adminpannel.css';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
  );

// Dashboard Component
const Dashboard = () => {
      // Data for charts
  const lineChartData = {
    labels: ['April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 400, 300, 500, 400, 600, 700, 800],
        fill: false,
        backgroundColor: '#28a745',
        borderColor: '#28a745',
      },
    ],
  };

  const barChartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Website Views',
        data: [50, 20, 30, 15, 60, 30, 45],
        backgroundColor: '#007bff',
      },
    ],
  };

  return (
    <Container fluid className="p-5">
      <Row >
        <Col md={3} className='dash'>
          <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Categories</Card.Title>
              <Card.Text style={{ fontSize: '2rem',color: 'black' }}>1,255</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text style={{ fontSize: '2rem',color: 'black' }}>250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Products Sold</Card.Title>
              <Card.Text style={{ fontSize: '2rem',color: 'black' }}>960</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* //fullwidth */}
      {/* <Card className='pro mt-5'> */}
      <Container className="p-4">
      <Row>
        <Col md={7}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Sales by Country</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Sales</th>
                    <th>Value</th>
                    <th>Bounce</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>United States</td>
                    <td>2500</td>
                    <td>$230,900</td>
                    <td>29.9%</td>
                  </tr>
                  <tr>
                    <td>Germany</td>
                    <td>3900</td>
                    <td>$440,000</td>
                    <td>40.22%</td>
                  </tr>
                  <tr>
                    <td>Great Britain</td>
                    <td>1400</td>
                    <td>$190,700</td>
                    <td>23.44%</td>
                  </tr>
                  <tr>
                    <td>Brazil</td>
                    <td>562</td>
                    <td>$143,960</td>
                    <td>32.14%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          {/* Map Placeholder */}
          <div className="map-placeholder">
            {/* <h5>Map</h5> */}
            {/* <p>Map will go here</p> */}
            <Image  src="./../Images/ww.jpg" className='wwimag'/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Website Views</Card.Header>
            <Card.Body>
              <Bar data={barChartData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Daily Sales</Card.Header>
            <Card.Body>
              <Line data={lineChartData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Completed Tasks</Card.Header>
            <Card.Body>
              <Line data={lineChartData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
       {/* </Card> */}

        {/* two card */}
       {/* <Row className='mt-5'>
         <Col md={6} >
           <Card className='pro1'>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
                Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
             </Card.Body>
           </Card>
        </Col>
         <Col md={6}>
           <Card className='pro1'>
             <Card.Img variant="top" src="holder.js/100px180" />            <Card.Body>
             <Card.Title>Card Title</Card.Title>
              <Card.Text>
                 Some quick example text to build on the card title and make up the
               bulk of the card's content.
               </Card.Text>
             </Card.Body>
           </Card>

         </Col>
       </Row> */}



    </Container>
  );
};


// // Add New User Component
const AddNewUser = ({ users, setUsers }) => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = { ...user, id: users.length + 1 };
      setUsers([newUser, ...users]);
      navigate('/admin/users/manage');
    };
  
    return (
      <Container className='sigclass'>
        <Row className='sigrow'>
          <Col>
            {/* <p className='sig'>Sign Up for Furni.</p> */}
            <h6 className="addnew">Add New Product</h6>
  
            <Form onSubmit={handleSubmit} className="mt-4">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Name" 
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required 
                />
              </Form.Group>
  
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter Email Address" 
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required 
                />
              </Form.Group>
          <Form.Group className="mt-3">
             <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder='Enter Phone number'
              required
            />
          </Form.Group>
  
              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter Password" 
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required 
                />
              </Form.Group>
              <Form.Group className="mt-3">
             <Form.Label>Confirm Password</Form.Label>
             <Form.Control
              type="password"
              placeholder="Enter Confirm Password" 
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              required
            />
          </Form.Group>
  
              <Button
                type="submit"
                className="w-100 mt-4 addbutton"
              >
                Add Product
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };

// Edit User Component
const EditUser = ({ users, setUsers }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  
    useEffect(() => {
      const existingUser = users.find((u) => u.id === parseInt(id));
      if (existingUser) setUser(existingUser);
    }, [id, users]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedUsers = users.map((u) => (u.id === parseInt(id) ? user : u));
      setUsers(updatedUsers);
      navigate('/admin/users/manage');
    };
  
    return (
    <Container className='sigclass'>
    <Row className='sigrow'>
      <Col>
        {/* <p className='sig'>Sign Up for Furni.</p> */}
        <h6 className="sig" >Edit Product</h6>

        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required 
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required 
            />
          </Form.Group>
      <Form.Group className="mt-3">
         <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          placeholder='Enter Phone number'
          required
        />
      </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required 
            />
          </Form.Group>
          <Form.Group className="mt-3">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control
          type="password"
          value={user.confirmPassword}
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          required
        />
      </Form.Group>

          <Button
            type="submit"
            className="w-100 mt-4 sigbutton"
            variant="primary"
          >
            Save Changes
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
    );
  };


const AllUsers = ({ users, setUsers }) => {
    const handleDelete = (id) => {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    };
  
    return (
      <Container className="manage-products-container p-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center mb-4">Manage Products</h2>
            <div className="table-wrapper">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.password}</td>
                      <td>{user.confirmPassword}</td>
                      <td>
                        <Button 
                          variant="primary" 
                          className="mx-1"
                          as={Link} 
                          to={`/admin/products/edit/${user.id}`}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="danger" 
                          className="mx-1"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };


// Reports Component
const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;



// Admin Panel Component
const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', password: 'password456', confirmPassword: 'password456' },
  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'lavender' }}>
      <Navbar id="navebar" expand="lg" className="px-5">
        <Navbar.Brand style={{ color: 'white', fontSize: '1.6rem' }}>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
            <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <div className="sidebar-section">
              <MdSpaceDashboard className="icon" />
              <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Product</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/admin/products/add">Add New Product</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/users/manage">Manage Products</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="sidebar-section">
              <TbReportSearch className="icon" />
              <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
          </Nav>
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products/add" element={<AddNewUser users={users} setUsers={setUsers} />} />
            <Route path="/products/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />

            <Route path="/products/manage" element={<AllUsers users={users} setUsers={setUsers} />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;

