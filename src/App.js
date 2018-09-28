import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch }from 'react-router-dom'
import './App.scss';
import AboutUs from './components/layout/aboutUs/AboutUs';
import Home from './view/Home';
import AboutTeam from './view/AboutTeam';





class App extends Component {
  render() {
    return (
      
      <div className="app">       
      <Router>     
             
      <Route render={({location})=>(
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutTeam} />
          </Switch>
            )}/>
       
      </Router>
    
            
            </div>
     
    );
  }
}

export default App;
