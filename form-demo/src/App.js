import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm';
import StartPage from './component/StartPage';
import HomePage from './component/HomePage';
import ProfilePage from './component/ProfilePage';


class App extends React.Component {
  render(){       
    return (      
      <div>   
      <Router>
        <div>
        
          <Route exact path="/" component={Start} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Home" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Start" component={Start} />
          
        </div>
      </Router>
      </div>
       );
    
    
  }
}
          function Start() {
            return (
              <div>
                <StartPage />
              </div>
            );
          }
          
          function Signup() {
            return (
              <div>
                <SignupForm />
              </div>
            );
          }
          
          function Login() {
            return (
              <div>
                <LoginForm />
              </div>
            );
          }
          function Home() {
            return (
              <div>
                <HomePage />
              </div>
            );
          }
          
          function Profile() {
            return (
              <div>
                <ProfilePage />
              </div>
            );
          }
          
        
          export default App;