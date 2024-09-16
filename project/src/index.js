import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Sigup.jsx';
// import Signin from './Admin-pannel/Sigin.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Shop.jsx';
import Aboutus from './Aboutus.jsx';
import Services from './Services.jsx';
import Blog from './Blog.jsx';
import { Contact } from './Contact.jsx';
import Login from './Admin-panel/Login.jsx';
import Adminpannel from './Admin-panel/Admin-pannel.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/explore" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Adminpannel />} />

          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={<Signin />} /> */}
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
