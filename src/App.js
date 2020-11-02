import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingSection from './components/LandingSection/LandingSection';
import Login from './components/Login/Login';
import Navigation from './components/Sidebar/Navigation';
import Signup from './components/SignUp/Signup';


function App() {
  return (
    <Router>
      <Route path = '/' component = {LandingSection} exact />
      <Route path = '/login' component = {Login} />
      <Route path = '/register' component = {Signup} />
      <Route path = '/Dashboard' component = {Navigation}/>
    </Router>
  );
}

export default App;
