import React from 'react';
import SimpleReactValidator from 'simple-react-validator';
import '../css/LoginForm.css';
import { createHashHistory } from 'history'
import Navbar from './Menu/Navbar';
export const history = createHashHistory()


class LoginForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
      this.validator = new SimpleReactValidator();
      
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

      if (this.validator.allValid()) 
      {
        if (useremail === this.state.email && userpassword === this.state.password) 
        {       
          alert ("Login Successfull");    
         history.push('/Home');            
        } 
        else if(this.state.email !== useremail){
          alert ("Data Not Found");         
          return false;
        }
        else{
          alert ("you enter wrong details");         
          return false;
        }
      } 
      else {
      this.validator.showMessages();
      this.forceUpdate();
      }
    }
   
    render() 
  {
    return (
      <body>
        <div className="login">
         < Navbar />
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
                      {this.validator.message('email', this.state.email, 'required|email')}  
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
                    {this.validator.message('password', this.state.password, 'required|min:6|max:20')}
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


 
