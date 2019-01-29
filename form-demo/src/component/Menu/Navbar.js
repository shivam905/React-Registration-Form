import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class Navbar extends React.Component {
  render(){
    return (
  <Router>
    <div>
    <Router>
          <ul>
              <li><Link to="/">Home</Link> </li>
               <li><Link to="/Login">Login</Link> </li>
               <li><Link to="/Signup">Signup</Link>  </li> 
            </ul>
            </Router>
      <hr />  
    </div>
  </Router>
  );
}
}

export default Navbar;