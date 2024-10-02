// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Sigin.css';

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm();
//   const navigate = useNavigate();
//   const password = watch('password');

//   const onSubmit = (data) => {
//     console.log(data);
//     alert("User Registered Succesfully")
//     navigate('/'); // Redirect to home page after showing alert
//   };

//   return (
//     <Container className="sigclass">
//       <Row className="sigrow">
//         <Col>
//           <p className="sig">Sign Up for Furni.</p>
//           <h6 className="text-muted">Create an account to start using Furni</h6>

//           <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Name"
//                 {...register('name', { required: 'Name is required' })}
//               />
//               {errors.name && <p className="text-danger">{errors.name.message}</p>}
//             </Form.Group>

//             <Form.Group controlId="email" className="mt-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Email Address"
//                 {...register('email', {
//                   required: 'Email is required',
//                   pattern: {
//                     value: /^\S+@\S+$/i,
//                     message: 'Invalid email address'
//                   }
//                 })}
//               />
//               {errors.email && <p className="text-danger">{errors.email.message}</p>}
//             </Form.Group>

//             <Form.Group controlId="phone" className="mt-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Enter Phone Number"
//                 {...register('phone', {
//                   required: 'Phone number is required',
//                   pattern: {
//                     value: /^[0-9]{10}$/,
//                     message: 'Invalid phone number (must be 10 digits)'
//                   }
//                 })}
//               />
//               {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
//             </Form.Group>

//             <Form.Group controlId="password" className="mt-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//                 {...register('password', {
//                   required: 'Password is required',
//                   pattern: {
//                     value:
//                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
//                     message:
//                       'Password must contain at least one uppercase, one lowercase, one number, and one special character'
//                   }
//                 })}
//               />
//               {errors.password && <p className="text-danger">{errors.password.message}</p>}
//             </Form.Group>

//             <Form.Group controlId="confirmPassword" className="mt-3">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Confirm Password"
//                 {...register('confirmPassword', {
//                   required: 'Confirm Password is required',
//                   validate: (value) => value === password || 'Passwords do not match'
//                 })}
//               />
//               {errors.confirmPassword && (
//                 <p className="text-danger">{errors.confirmPassword.message}</p>
//               )}
//             </Form.Group>

//             <Button type="submit" className="w-100 mt-4 sigbutton" variant="primary">
//               Sign Up
//             </Button>
//           </Form>

//           <div className="d-flex align-items-center mt-4 text-muted">
//             <hr className="w-100" />
//             <span className="px-2">OR</span>
//             <hr className="w-100" />
//           </div>

//           <div className="d-flex justify-content-center align-items-center mt-3">
//             <p className="mb-0">Already registered?</p>
//             <Button variant="link" onClick={() => navigate('/')}>
//               Sign In
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;


import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add axios for HTTP requests
import './Sigin.css';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      // Send POST request to backend to store user data
      const response = await axios.post('http://localhost:5000/signup', data);

      // Alert user upon successful registration
      alert("User Registered Successfully");

      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
    }
  };

  return (
    <Container className="sigclass">
      <Row className="sigrow">
        <Col>
          <p className="sig">Sign Up for Furni.</p>
          <h6 className="text-muted">Create an account to start using Furni</h6>

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
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
              {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
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
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
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
                <p className="text-danger">{errors.confirmPassword.message}</p>
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
            <p className="mb-0">Already registered?</p>
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
