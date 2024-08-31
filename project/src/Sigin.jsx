// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const navigate = useNavigate();
//   const { handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Container className="d-flex align-items-center justify-content-center mt-50">
//       <Row className="shadow-lg rounded-lg p-4 bg-white max-w-3xl">
//         <Col className="d-flex flex-column justify-content-center">
//           <h2 className="mb-3 text-primary font-bold">Login to Furni.</h2>
//           <p className="text-muted">If you have an account, please login</p>

//           <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//             <Form.Group controlId="email">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control type="email" placeholder="Enter Email Address" />
//             </Form.Group>

//             <Form.Group controlId="password" className="mt-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Enter Password" />
//             </Form.Group>

//             <div className="text-right mt-2">
//               <a href="#" className="text-muted">
//                 Forgot Password?
//               </a>
//             </div>

//             <Button
//               type="submit"
//               className="w-100 mt-4"
//               variant="primary"
//             >
//               Log In
//             </Button>
//           </Form>

//           <div className="d-flex align-items-center mt-4 text-muted">
//             <hr className="w-100" />
//             <span className="px-2">OR</span>
//             <hr className="w-100" />
//           </div>

//           <div className="d-flex justify-content-between align-items-center mt-3">
//             <p className="mb-0">If you don't have an account...</p>
//             <Button
//               variant="link"
//               onClick={() => navigate('/Signup')}
//             >Sign up
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignIn;



import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="container-custom">
      <Row className="form-container">
        <Col className="d-flex flex-column justify-content-center">
          <p className="headertitle">Login to Furni.</p>
          <p className="text-muted">If you have an account, please login</p>

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <div className="forgot-password-link">
              <a href="#" className="text-muted">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="submit-button"
              variant="primary"
            >
              Log In
            </Button>
          </Form>

          <div className="or-divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <div className="sign-up-button">
            <p className="mb-0 text-muted">If you don't have an account...</p>
            <Button
              variant="link"
              onClick={() => navigate('/Signup')}
            >
              Sign up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
