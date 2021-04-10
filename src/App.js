import React,{ useState } from 'react'
import './App.css';
import Landing from './containers/landing/Landing'
import User from './containers/user/User'
import Dashboard from  './containers/dashboard/Dashboard'
import Discover from './containers/discover/Discover'
import SideNav from './components/sideNav/SideNav'
import Journal from './containers/journal/Journal'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  const [isAuth, setIsAuth] = useState(true); 
  return (
    <Router>
       {!isAuth?
        <Landing/>:
        <SideNav>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/account" component={User} exact/>
          <Route path="/discover" component={Discover} exact/>
          <Route path="/journal" component={Journal} exact/>
        </SideNav>
      }
    </Router>
  );
}

export default App;
