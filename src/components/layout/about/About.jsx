import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import bigLogo from './../../../assets/img/BigLogo.svg'


export default class About extends Component {
  render() {
    return (
      <div className="about__container">
      
        <div className="img___container">
          <img src={bigLogo} alt=""/>
        </div>
        <div className="text__container">
          <p>Our mission is to <strong> stimulate </strong> Belgian entrepreneurship <br/> around blockchain-related businesses. <br/>
          We <strong> connect </strong> and <strong> support </strong> all relevant actors.</p>
        <div className="learn__more">
          <Link className="more__button" to='/aboutus'>
              <p className="more-button">more</p>
          </Link>
        
        </div>
        </div>
        
      </div>
    )
  }
}
