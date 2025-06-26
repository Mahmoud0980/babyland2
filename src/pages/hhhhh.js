//import React from "react";
import {
  Button,
  Card,
  Breadcrumb,
  Alert,
  Form,
  FormGroup,
} from "react-bootstrap";
export default function card() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="./public/images/image1.jpg" />
            <Card.Body>
              Dress
              <Card.Title>
                <Card.Text>max 5 years</Card.Text>
              </Card.Title>
            </Card.Body>
          </Card>
        </FormGroup>
      </Form>
    </div>
  );
}
import React from "react";
import log from './../log.jpg';
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import './nav.css'; // تم التصحيح


function EnhancedNavbar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="navbar-custom">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand >
          <img 
            src={log} 
            alt="Logo" 
            className="nav-logo"
            onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(15deg) scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg) scale(1)"}
          />
        </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ gap: "15px" }}>
          <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/boys">
              <Nav.Link className="nav-link-custom">Boys</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/girls">
              <Nav.Link className="nav-link-custom">Girls</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/baby">
              <Nav.Link className="nav-link-custom">B.B</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/toys">
              <Nav.Link className="nav-link-custom">Toys</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tools">
              <Nav.Link className="nav-link-custom">Tools</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link-custom">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link-custom">Contact Us</Nav.Link>
            </LinkContainer>
          
          </Nav>
          
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Form className="d-flex" style={{ width: "250px" }}>
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="outline-primary" className="search-btn">
                <FiSearch /> Search
              </Button>
            </Form>
            
            <Button variant="light" className="cart-btn">
              <FiShoppingCart style={{ fontSize: "1.2rem" }} />
              <span className="cart-badge">3</span>
            </Button>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EnhancedNavbar;