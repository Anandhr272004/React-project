
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const data = {
  brand: "Furni.",
  navigation: [
    { name: "Home", href: "/", active: true },
    { name: "Shop", href: "/shop", active: false },
    { name: "About us", href: "/aboutus", active: false },
    { name: "Services", href: "/services", active: false },
    { name: "Blog", href: "/blog", active: false },
    { name: "Contact us", href: "/contactus", active: false }
  ],
  hero: {
    title: "Modern Interior Design Studio",
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
    buttons: [
      { label: "Shop Now", href: "/shop", style: "btn-warning" },
      { label: "Explore", href: "/explore", style: "btn-outline-secondary" }
    ],
    image: "path_to_your_image.png"
  }
};

const Navbarone = () => {
  return (
    <div>
      <Navbar expand="lg" bg="primary" variant="dark" className="px-3">
        <Container>
          <Navbar.Brand href="/">{data.brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {data.navigation.map((item, index) => (
                <Nav.Link key={index} href={item.href} active={item.active}>
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundColor: '#3c5845', color: '#fff', padding: '3rem 1rem' }}>
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>{data.hero.title}</h1>
              <p>{data.hero.description}</p>
              <div className="mt-4">
                {data.hero.buttons.map((button, index) => (
                  <Button
                    key={index}
                    href={button.href}
                    className={`mr-2 ${button.style}`}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img src={data.hero.image} alt="Hero" className="img-fluid" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbarone;

