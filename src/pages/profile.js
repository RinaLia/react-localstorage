import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <>
        <Container>
          <Navbar className="nav" expand="lg">
            <Navbar.Brand href="#home" className="text-white mt-2">
              Data
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container>
          <Card className="mt-3">
            <Card.Header>Content</Card.Header>
            <Card.Body>
              <Card.Text>
                <Form className="form-rounded-input">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      Email : {localStorage.getItem("email")}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      Password : {localStorage.getItem("password")}
                    </Form.Label>
                  </Form.Group>
                  <Button>Edit</Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}
