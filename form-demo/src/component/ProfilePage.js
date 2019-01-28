import React from 'react';
import UserNavbar from './UserNavbar';
import '../css/Profile.css';

class ProfilePage extends React.Component {
    render() {
      var useremail = localStorage.getItem('email');

      var username = localStorage.getItem('username');
       return (
          <div>
            <UserNavbar />
             <h1>{username} Profile</h1>
             <div>
    
             
             <table className="tab" align="center" cellPadding="5px" cellSpacing="2px">
                <tr>
                  <td><label>Username</label></td>
                  <td>:</td>
                  <td>
                  {username}
                  </td>
                </tr>
                <tr>
                  <td><label>Email </label></td>
                  <td>:</td>
                  <td>
                  {useremail}
                  </td>
                </tr>
            </table>
             </div>

          </div>
       )
    }
 }
 export default ProfilePage;