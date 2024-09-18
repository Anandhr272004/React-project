import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Form,Table,Dropdown,Image } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

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

    </Container>
  );
};

const AddNewUser = ({ users, setUsers }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend to add user
      const response = await axios.post('http://localhost:5000/adduser', user);
      setUsers(prevUsers => [response.data, ...prevUsers]);
      // Navigate to manage users page after adding the new user
      window.alert("New User Added Successfully!");
      navigate('/admin/users/manageuser');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };




//updated


  return (
    <Container className='signclass'>
      <Row className='signrow'>
        <Col>
          <h6 className="addnew">Add New User</h6>
          <Form onSubmit={handleSubmit} className="mt-5">
            <Form.Group controlId="name" className="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Name" 
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required className='nametext'
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3 name">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter Email Address" 
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required className='nametext'
              />
            </Form.Group>

            <Form.Group className="mt-3 name">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                placeholder='Enter Phone number'
                required className='nametext'
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3 name">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter Password" 
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required className='nametext'
              />
            </Form.Group>

            <Form.Group className="mt-3 name">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password" 
                value={user.confirmPassword}
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                required className='nametext'
              />
            </Form.Group>

            <Button
              type="submit"
              className="mt-3 addbutton"
            >
              Add User
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
      navigate('/admin/users/manageuser');
    };
  
    return (
    <Container className='signclass'>
    <Row className='signrow'>
      <Col>
        {/* <p className='sig'>Sign Up for Furni.</p> */}
        <h6 className="addnew" >Edit User</h6>

        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="name" className='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required className='nametext'
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3 name">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required className='nametext'
            />
          </Form.Group>
      <Form.Group className="mt-3 name">
         <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          placeholder='Enter Phone number'
          required className='nametext'
        />
      </Form.Group>

          <Form.Group controlId="password" className="mt-3 name">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required className='nametext'
            />
          </Form.Group>
          <Form.Group className="mt-3 name">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control
          type="password"
          value={user.confirmPassword}
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          required className='nametext'
        />
      </Form.Group>

          <Button
            type="submit"
            className="w-100 mt-4 addbutton"
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



///////postlink


const AllUsers = ({ users, setUsers }) => {
  useEffect(() => {
    // Fetch users from the backend when the component loads
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, [setUsers]);

  const handleDelete = async (id) => {
    try {
      // Delete user logic (to be implemented in the backend)
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <Container className="manage-products-container p-5">
      <Row>
        <Col md={12}>
          <h2 className="text-left mb-4 pl-5">Manage Users</h2>
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
                  <tr key={user._id}>
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
                        to={`/admin/users/edituser/${user._id}`}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="danger" 
                        className="mx-1"
                        onClick={() => handleDelete(user._id)}
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
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '2345678901', password: 'password234', confirmPassword: 'password234' }

  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'white' }}>
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
              <Dropdown.Toggle id="dropdown-basic">Users</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/admin/users/addnew">Add New User</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/users/manageuser">Manage User</Dropdown.Item>
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
            <Route path="/users/addnew" element={<AddNewUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edituser/:id" element={<EditUser users={users} setUsers={setUsers} />} />

            <Route path="/users/manageuser" element={<AllUsers users={users} setUsers={setUsers} />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;

