import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';

const Signup = () => {
  const {
    register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container  className="d-flex align-items-center justify-content-center mt-20 contain">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>
   
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          placeholder="First name"
          {...register('firstName', { required: 'Name is required' })}
        />
        {errors.firstName && (
          <div className="invalid-feedback">{errors.Name.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Enter email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="Enter password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>

      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    
    </form>
    </Container>
  );
};

export default Signup;
