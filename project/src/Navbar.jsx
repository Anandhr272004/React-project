import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jobData from './Jobdata.json'; 
const NavbarComponent = () => {
  const config = jobData.user[0]; // Access the 'user' array and take the first element

  if (!config) {
    return null; // Return null or a loading indicator if config is not defined
  }

  return (
    <Navbar className="sticky-top shadow-sm navbar-custom">
      <Navbar.Brand as={Link} to="/index">
        <h1 className="m-0 text-2xl font-bold text-customgreen">
          {config.brand || "Brand Name"}
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto py-0">
          {/* Mapping Link 1 */}
          {config.link_1 && config.link_1.map((link, index) => (
            <Nav.Link
              key={index}
              as={Link}
              to={link.to}
            >
              {link.label}
            </Nav.Link>
          ))}

          {/* Dropdown 1 - Jobs */}
          {config.dropdown_1 && (
            <NavDropdown title={config.dropdown_1.title_1} id="navbarScrollingDropdown1">
              {config.dropdown_1.items && config.dropdown_1.items.map((item, index) => (
                <NavDropdown.Item
                  key={index}
                  as={Link}
                  to={item.to}
                >
                  {item.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          )}

          {/* Dropdown 2 - Pages */}
          {config.dropdown_2 && (
            <NavDropdown title={config.dropdown_2.title_2} id="navbarScrollingDropdown2">
              {config.dropdown_2.items && config.dropdown_2.items.map((item, index) => (
                <NavDropdown.Item key={index} as={Link} to={item.to}>
                  {item.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
)}
          {/* Mapping Link 2 */}
          {config.link_2 && config.link_2.map((link, index) => (
            <Nav.Link
              key={index}
              as={Link}
              to={link.to}
            >
              {link.label}
            </Nav.Link>
          ))}

          {/* Button */}
          {config.button && (
            <Nav.Link
              as={Link}
              to={config.button.link}
              className="bg-customgreen text-white px-5 ms-3 d-none d-lg-block"
            >
              {config.button.label} <i className="bi bi-arrow-right"></i>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
