import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Sigup.jsx';
import Signin from './Sigin.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Shop.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
