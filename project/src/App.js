import './App.css';
import './Sigin.css'
import Example from './Example';
import Home from './Home.jsx'
import SignIn from './Sigin.jsx';
import Signup from './Sigup.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarone from './NavBar.jsx';
import Login from './Login.jsx';


function App() {
  return (
    <>
      {/* <Navbarone /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
      <Login />

      {/* <p>tailwind css</p>
   <Example/> */}
    </>
  );
}

export default App;
