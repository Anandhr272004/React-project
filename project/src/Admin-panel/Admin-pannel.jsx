
import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import './Adminpannel.css';
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";


const Dashboard = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Categories </Card.Title>
              <Card.Text style={{ fontSize: '2rem', color: 'white'  }}>1,255</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
            <Card.Body>
              <Card.Title> Total Products </Card.Title>
              <Card.Text style={{ fontSize: '2rem', color: 'white'  }}>250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Products sold</Card.Title>
              <Card.Text style={{ fontSize: '2rem', color: 'white'  }}>960</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <Card.Text>Here you can add a progress chart displaying product categories.
              Track the performance and trends for each category over time.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>Here you can view detailed information about each product, including graphical representations and key statistics.
                 Explore the insights to better understand product performance and trends.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Product = () => <h2 className="p-5">Products list are Section</h2>;
const Categories = () => <h2 className="p-5">Products Categories Section</h2>;
const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;

const Adminpannel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'lavender' }}>
      <Navbar id="navebar" expand="lg" className="px-5">
        <Navbar.Brand style={{ color: 'white',fontSize: '1.6rem'}}>
          {/* <FaBars />  */}
          Admin Panel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
            <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row >
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <div className="sidebar-section">
              <MdSpaceDashboard className="icon"/>
              <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <MdOutlineProductionQuantityLimits className="icon"/>
              <Nav.Link as={Link} to="/admin/product" className="text-white">Products</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaListUl className="icon"/>
              <Nav.Link as={Link} to="/admin/categories" className="text-white">Categories</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
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
            <Route path="/product" element={<Product />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Adminpannel;


