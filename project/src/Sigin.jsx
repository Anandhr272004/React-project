
// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const SignIn = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Container fluid className="vh-100 d-flex justify-content-center align-items-center sign-in-container">
//       <Row className="w-100 justify-content-center">
//         <Col md={8} lg={5}>
//           <Card className="p-4 shadow-sm sign-in-card">
//             <Card.Body>
//               <div className="text-center mb-4">
//                 <h1 className="font-weight-bold">WELCOME TO <a href="/" className="brand-name text-danger">Furni.</a></h1>
//               </div>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group controlId="formEmail" className="mb-3">
//                   <Form.Label className="text-muted">E-Mail</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="youremail@gmail.com"
//                     {...register('email', {
//                       required: 'Email is required',
//                       pattern: {
//                         value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                         message: 'Enter a valid email address',
//                       },
//                     })}
//                     isInvalid={!!errors.email}
//                   />
//                   <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formPassword" className="mb-4 position-relative">
//                   <Form.Label className="text-muted">Password</Form.Label>
//                   <div className="position-relative">
//                     <Form.Control
//                       type={passwordVisible ? 'text' : 'password'}
//                       placeholder="********"
//                       {...register('password', {
//                         required: 'Password is required',
//                         minLength: {
//                           value: 6,
//                           message: 'Password must be at least 6 characters long',
//                         },
//                       })}
//                       isInvalid={!!errors.password}
//                     />
//                     <span
//                       className="position-absolute top-50 end-0 translate-middle-y pe-3"
//                       style={{ cursor: 'pointer' }}
//                       onMouseEnter={() => setPasswordVisible(true)}
//                       onMouseLeave={() => setPasswordVisible(false)}
//                     >
//                       {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                     <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
//                   </div>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">Sign In</Button>
//               </Form>
//             </Card.Body>
//             <Card.Footer className="text-center mt-3">
//               Don't have an account? <a href="/signup" className='text-primary'>Sign Up</a>
//             </Card.Footer>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignIn;


import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignInPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center con">
      <Form className="w-100 mt-5">
        <h2 className="text-center mb-4">Sign In</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail address</Form.Label>
          <Form.Control type="email" placeholder="Enter E-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignInPage;
