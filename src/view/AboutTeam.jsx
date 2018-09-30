import React, { Component } from 'react'
import AboutUs from '../components/layout/aboutUs/AboutUs';
import Nav from '../components/layout/nav/Nav';
import Team from '../components/team/Team';
import Footer from './../components/layout/footer/Footer';

export default class AboutTeam extends Component {
  render() {
    return (
        <div className="about__us__container right__bg">
        <Nav />
      <div className="about__us__wrapper" >
         
        <AboutUs />
        <Team />
      </div>
      
      </div>
    )
  }
}
