import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import '../css/LoginForm.css';
import { createHashHistory } from 'history'
export const history = createHashHistory()


class LoginForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
      
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }
    
    submit() {

      var useremail = localStorage.getItem('email');
      var userpassword = localStorage.getItem('password');

      if (!this.state.email.length > 0)
    {
        alert("Please enter your email address.");
        return false;
    }

    var reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

        if (reg.test(this.state.email) === false) 
        {
            alert('Invalid Email Address');
            return false;
        }
  
    if (!this.state.password.length > 0)
    {
        alert("Please enter a password.");
        return false;
    }

    if (this.state.password.length < 6)
    {
        alert("Please enter minimum 6 characters");
        return false;
    }
        
      else{

        if (useremail === this.state.email && userpassword === this.state.password) 
        {       
          alert ("Login Successfull");    
         history.push('/Home');            
        } 
        else if(this.state.email !== useremail){
          alert ("Data Not Found");         
          return true;

        }
        else{
          alert ("you enter wrong details");         
          return true;
        }
      }
    }
   
    render() 
  {
    return (
      <body>
        <div className="login">
          <Router>
          <ul>
              <li><Link to="/">Home</Link> </li>
               <li><Link to="/Login">Login</Link> </li>
               <li><Link to="/Signup">Signup</Link>  </li> 
            </ul>
            </Router>
          <div className="center">
          <h1>Log In</h1>
            <table className="tab" align="center">
                <tr>
                  <td><label>Email :</label></td>
                  <td>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter email here..."
                      value={ this.state.email } 
                      onChange={ this.handleChange } 
                    />
                  </td>
                </tr>
                <tr>
                  <td><label>Password :</label></td>
                  <td>
                    <input 
                      type="password" 
                      name="password" 
                      placeholder="Enter password here..."
                      value={ this.state.password } 
                      onChange={ this.handleChange } 
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button value="Send" onClick={ this.submit } >Submit</button>
                  </td>
                </tr>
            </table>
          </div>
        </div>
        </body>
    ) 
  }
 }
 export default LoginForm;


 
