import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './LoginPage.css';

function LoginPage() {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow login-card">
            <Card.Body>
              <div className="mb-3 mt-2">
                <h2 className="fw-bold mb-1 text-uppercase brand-logo">EMS</h2>
                <p className="mb-3">Please enter your login and password!</p>
                <Form className="mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      Email address
                    </Form.Label>
                    <Form.Control className = "input-label" type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className = "input-label" type="password" placeholder="Enter Password" />
                  </Form.Group>
                  <div className="mb-3">
                    <p className="small">
                      <a className="text-primary" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  </div>
                  <div className="d-grid">
                    <Button className = "login-btn" variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Don't have an account?{""}
                    <a href="/" className="text-primary fw-bold">
                      SignUp
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;