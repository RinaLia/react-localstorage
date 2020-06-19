import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <>
        <Row className="h-100 no-gutters">
          <Col md={7} className="bg-register">
            <div className="text w-100 h-100 ml-3 d-flex flex-column justify-content-between">
              <div className="bg text-white mt-5 ">
                <h1 className="text-center white">Click for your shoot</h1>
                <h2 className="text-center font-italic">Photography</h2>
              </div>
            </div>
          </Col>
          <Col md={5} className="h-100">
            <div className="content-login h-100">
              <div className="h-75 m-4 d-flex justify-content-center align-items-center">
                <Form>
                  <h1 className="font-weight-bolder mt-5 text-success">
                    Login
                  </h1>
                  <p className="text-center">CLICK FOR YOUR SHOOT</p>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      onChange={(e) => this.setState({ email: e.target.value })}
                      type="email"
                      placeholder="Ulala@gmail.com"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      type="password"
                      placeholder="Enter password"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Cancel
                  </Button>
                  {/* <Button
                    className="bg-success ml-2 "
                    onClick={(e) =>
                      this.props.history.push("/profile", {
                        email,
                        password,
                      })
                    }
                  >
                    Confirm
                  </Button> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default Login;
