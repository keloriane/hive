import React, { Component } from 'react'
import Nav from './../components/layout/nav/Nav';
import About from './../components/layout/about/About';
import Footer from './../components/layout/footer/Footer';


export default class Home extends Component {
  render() {
    return (
      <div className="light__bg">
      <div className="home__container bg__container">
          <About />
          <Footer />
          </div>
      </div>
    )
  }
}
