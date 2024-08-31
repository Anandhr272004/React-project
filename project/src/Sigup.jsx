import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container  className='sigclass'>
      <Row className='sigrow'>
        <Col>
          <p className='sig'>Sign Up for Furni.</p>
          <p className="text-muted">Create an account to start using Furni</p>

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 mt-4 sigbutton"
              variant="primary"
            >
              Sign Up
            </Button>
          </Form>

          <div className="d-flex align-items-center mt-4 text-muted">
            <hr className="w-100" />
            <span className="px-2">OR</span>
            <hr className="w-100" />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <p className="mb-0">Already registered?</p>
            <Button variant="link" onClick={() => navigate('/Signin')}>Sign In
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
