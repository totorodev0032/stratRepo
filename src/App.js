import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingSection from './components/LandingSection/LandingSection';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Route path = '/' component = {LandingSection} exact />
      <Route path = '/login' component = {Login} />
    </Router>
  );
}

export default App;
