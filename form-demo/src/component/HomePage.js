import React from 'react';
import UserNavbar from './UserNavbar';
class HomePage extends React.Component {
    render() 
    {
      var username = localStorage.getItem('username');
  
       return (
          <div> 
             <UserNavbar />      
            <h1>Welcome {username}!</h1>
            <center>
             <img src="https://dsim.in/blog/wp-content/uploads/2014/01/homepage-dsim.jpg"
              alt="Italian Trulli"></img>
              </center>
          </div>
       )
    }
 }
 export default HomePage;