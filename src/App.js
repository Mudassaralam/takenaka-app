import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/SideBar/Sidebar';
import UserManagement from './Components/UserManagement/UserManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebarrnew from './Components/Sidebarnew/Sidebarnew';
import Projectmanagement from "./Components/Rolemanagement/Projectmanagement";
import Login from "./Components/Login/Login";
import OTP from "./Components/Login/OTP";
import LoginAgain from "./Components/Login/LoginAgain";

import Myprofile from "./Components/Myprofile/Myprofile";
import Forgetpassword from "./Components/ForgetPassword/Forgetpassword";
import MainProfile from "./Components/MainProfile/MainProfile";
import Adduser from "./Components/AddUser/Adduser";
function App() {
  const data = localStorage.getItem('data')
  const tak = JSON.parse(data)
  // console.log(data)
  return (
    <>
    <Router>
    {
      data ?
      <>
      <Navbar />
      <Sidebar />
      <Switch>
      <Route  exact path='/usermanagement'>
      <UserManagement />
      </Route>
      <Route  path="/usermanagement"> 
      <UserManagement /> 
      </Route>
      <Route  path="/projectmanagement"> 
      <Projectmanagement /> 
      </Route>
      <Route path='/otp'>
      <OTP />
      </Route>
      <Route path='/myprofile'>
       {/* <Myprofile /> */}
       <MainProfile />
      </Route>
      <Route path='/addproject'>
       <Adduser />
      </Route>
      </Switch>
      </>
      : 
      <Switch>
      <Route path='/'>
      <Login />
      </Route>
      <Route path='/forgetpassword'>
        <Forgetpassword />
      </Route>
      </Switch>
    }
    </Router>
    
    {/* <OTP /> */}
    </>
  );
}

export default App;
