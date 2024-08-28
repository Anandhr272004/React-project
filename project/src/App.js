import './App.css';
import Example from './Example';
import Home from './Home.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './Navbar.jsx';

function App() {
  return (
   <>
   <Home/>
   

   <Router>
      {/* <div className="App"> */}
        <NavbarComponent/>
      {/* </div> */}
     </Router>





  
   {/* <p>tailwind css</p>
   <Example/> */}
   </>
  );
}

export default App;
