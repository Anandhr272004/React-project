import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sigin.css';

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const password = watch('password');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword); // Include confirm password
    formData.append('date', data.date);
   
    if (image) {
      formData.append('image', image); // Corrected from imageFile to image
    } else {
      alert('Please upload an image.');
      return; // Prevents submission if no image is uploaded
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('User registered successfully');
        navigate('/'); // Redirect to home page upon success
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); // Log the full error
      alert('Error uploading image or registering user');
    }
  };

  return (
    <Container className="sigclass">
      <Row className="sigrow">
        <Col>
          <p className="sig">Sign Up for Furni.</p>
          <h6 className="text-muted">Create an account to start using Furni</h6>

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4" encType="multipart/form-data">
            <Form.Group controlId="image" className="mt-3">
              <Form.Label>Upload Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>

            <Form.Group controlId="name" className='mt-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-danger pt-2">{errors.name.message}</p>}
            </Form.Group>

            <Form.Group className="mt-3 name">
              <Form.Label>Date</Form.Label>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <Form.Control
                    type="date"
                    {...field}
                    isInvalid={!!errors.date}
                  />
                )}
                rules={{ required: 'Date is required' }}
              />
              {errors.date && <Form.Text className="text-danger pt-2">{errors.date.message}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p className="text-danger pt-2">{errors.email.message}</p>}
            </Form.Group>

            <Form.Group controlId="phone" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone Number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number (must be 10 digits)'
                  }
                })}
              />
              {errors.phone && <p className="text-danger pt-2 ">{errors.phone.message}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                    message:
                      'Password must contain at least one uppercase, one lowercase, one number, and one special character'
                  }
                })}
              />
              {errors.password && <p className="text-danger pt-2">{errors.password.message}</p>}
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) => value === password || 'Passwords do not match'
                })}
              />
              {errors.confirmPassword && (
                <p className="text-danger pt-2">{errors.confirmPassword.message}</p>
              )}
            </Form.Group>

            <Button type="submit" className="w-100 mt-4 sigbutton" variant="primary">
              Sign Up
            </Button>
          </Form>

          <div className="d-flex align-items-center mt-4 text-muted">
            <hr className="w-100" />
            <span className="px-2">OR</span>
            <hr className="w-100" />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <p className="mb-0" >Already registered?</p>
            <Button variant="link" onClick={() => navigate('/')}>
              Sign In
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

