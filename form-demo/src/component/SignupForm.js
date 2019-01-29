import React from 'react';
import '../css/StartPage.css';
import Navbar from './Menu/Navbar';
import SimpleReactValidator from 'simple-react-validator';
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
  this.validator = new SimpleReactValidator();
  
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
    if (this.validator.allValid()) {
      alert ("Registration Successfully done...");

       localStorage.setItem('username', this.state.username);
       localStorage.setItem('email', this.state.email);
       localStorage.setItem('password', this.state.password );          
       history.push('/Login'); 
      } 
      else {
      this.validator.showMessages();
      this.forceUpdate();
      }
    }

  render() 
  {
    return (
      <div>
        < Navbar />
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
                     {this.validator.message('username', this.state.username, 'required|alpha')}
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
                   {this.validator.message('email', this.state.email, 'required|email')}  
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
                     {this.validator.message('password', this.state.password, 'required|min:6|max:20')}
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

