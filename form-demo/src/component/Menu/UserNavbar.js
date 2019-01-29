import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class UserNavbar extends React.Component {
  render(){
    return (
  <Router>
    <div>
      <ul className="topnav">            
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link className="right" to="/" >Logout</Link>
        </li>
      </ul>  
      <hr />  
    </div>
  </Router>
  );
}
// clear()
//   {
//     localStorage.removeItem("email");
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");
//   }
}

export default UserNavbar;