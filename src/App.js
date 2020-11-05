import React from 'react';
import { Route,Switch } from "react-router-dom";
import Login from './userManagement/login';
import Register from './userManagement/Register';
import CustomerDashboard from './components/dashboard/CustomerDashboard';
import UserDashboard from "./components/dashboard/UserDashboard";
import Landing from "./userManagement/landing";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing}/> 
      <Route path ="/register" component={Register}/>
      <Route  path="/dashboard" component={CustomerDashboard}/>
      <Route  path="/udashboard" component={UserDashboard}/>
      <Route  path="/login" component={Login}/>

    </Switch>
 
      // {/* <UserDashboard/> */}
      // {/* <CustomerDashboard/> */}
      // {/* <Login/> */}
      // {/* <Register/> */}
  
  );
}

export default App;
