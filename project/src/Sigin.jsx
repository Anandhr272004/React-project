
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center mt-20">
      <Row className="shadow-lg rounded-lg p-4 bg-white  max-w-3xl">
        <Col  className="d-flex flex-column justify-content-center">
          <h2 className="mb-3 text-primary font-bold">Login to Furni.</h2>
          <p className="text-muted">If you have an account, please login</p>

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-right mt-2">
              <a href="#" className="text-muted">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-100 mt-4 "
              // style={{ backgroundColor: '#3c5845', color: 'white' }}
              variant="primary"
            >
              Log In
            </Button>
          </Form>

          <div className="d-flex align-items-center mt-4 text-muted">
            <hr className="w-100" />
            <span className="px-2">OR</span>
            <hr className="w-100" />
          </div>

          {/* <Button
            className="w-100 mt-3 d-flex align-items-center justify-content-center"
            variant="outline-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-google" width="24" height="24" fill="currentColor">
              <path d="..." />
            </svg>
            <span className="ml-2">Login with Google</span>
          </Button> */}

          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="mb-0">If you don't have an account...</p>
            <Button 
            // style={{ backgroundColor: '#3c5845', color: 'white' }}
            variant="outline-primary"
             onClick={()=>navigate('/Signup')}>Register</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;


// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const SignIn = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission logic
//   };

//   return (
//     <Container className="d-flex align-items-center justify-content-center min-vh-100">
//       <Row className="shadow-lg rounded-lg p-4 bg-white w-100 max-w-3xl">
//         <Col md={6} className="d-flex align-items-center justify-content-center">
//           <div>
//             <div className="text-center mb-4">
//               <h2>{isLogin ? 'Login' : 'Signup'}</h2>
//             </div>

//             <Form onSubmit={handleSubmit(onSubmit)}>
//               {!isLogin && (
//                 <Form.Group controlId="name" className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter your name"
//                     {...register('name', { required: 'Name is required' })}
//                     isInvalid={!!errors.name}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.name?.message}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               )}

//               <Form.Group controlId="email" className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   {...register('email', {
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: 'Invalid email address',
//                     },
//                   })}
//                   isInvalid={!!errors.email}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.email?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group controlId="password" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter your password"
//                   {...register('password', {
//                     required: 'Password is required',
//                     minLength: {
//                       value: 6,
//                       message: 'Password must be at least 6 characters long',
//                     },
//                   })}
//                   isInvalid={!!errors.password}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.password?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               {isLogin && (
//                 <div className="text-end mb-3">
//                   <a href="#" className="text-muted">
//                     Forgot password?
//                   </a>
//                 </div>
//               )}

//               <Button variant="primary" type="submit" className="w-100">
//                 Submit
//               </Button>
//             </Form>

//             <div className="text-center mt-3">
//               <span className="text-muted">
//                 {isLogin
//                   ? "Don't have an account?"
//                   : 'Already have an account?'}
//               </span>
//               <Button
//                 variant="link"
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="p-0 ms-1"
//               >
//                 {isLogin ? 'Signup now' : 'Login now'}
//               </Button>
//             </div>
//           </div>
//         </Col>
//         <Col md={6} className="d-none d-md-block">
//           <div className="h-100">
//             <img
//               src="images/frontImg.jpg"
//               alt="Cover"
//               className="img-fluid rounded-lg"
//             />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignIn;
