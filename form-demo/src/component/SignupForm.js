import React from 'react';
import '../css/StartPage.css';
import { HashRouter as Router, Link } from "react-router-dom";
import { createHashHistory } from 'history'
export const history = createHashHistory()


class SignupForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    username:'',
    email: '',
    password: ''
  };
  
  this.submit = this.submit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) 
  {
    this.setState({
      [target.name]: target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  submit() {


    if (!this.state.username.length > 0)
    {
        alert("Username can't be blank...");
        return false;
    }
    if (!isNaN(this.state.username))
    {
        alert("UserName should be in characters");
        return false;
    }

    if ((this.state.username.length < 3) || (this.state.username.length > 20 ))
    {
        alert("Username should be between 3-20 characters");
        return false;
    }

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
      alert ("Registration Successfully done...");

      localStorage.setItem('username', this.state.username);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password );          
      history.push('/Login'); 
      return true;
    }
      
  } 

  render() 
  {
    return (
      <div>
        <Router>
      <ul>
              <li><Link to="/">Home</Link> </li>
               <li><Link to="/Login">Login</Link> </li>
               <li><Link to="/Signup" >Signup</Link>  </li> 
            </ul>
          </Router>
          <div className="center">
          <h1>Sign Up</h1>
           <form onSubmit={this.handleSubmit}>
             <table className="tab" >
               
                <tr>
                   <td><label> User Name</label></td>
                   <td>
                     <input 
                       type="text" 
                       name="username" 
                       placeholder="Enter username here..." 
                       value={ this.state.username }
                       onChange={ this.handleChange } 
                     />
                   </td>
                 </tr>
                 <tr>
                   <td><label>Email</label></td>
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
                   <td><label>Password</label></td>
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
                     <button block bsSize="large" value="Send" onClick={ this.submit }>
                        Submit</button>
                   </td>
                 </tr>
             </table>
            </form>
          </div>
          </div>
    ) 
  }
}

export default SignupForm;

