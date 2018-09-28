import React, { Component } from 'react'
import miniLogo from './../../../assets/img/miniLogo.svg'

export default class Nav extends Component {
  render() {
    return (
      <div className= "nav__container">
      <div className="left__menu__container">
        <ul className="menu__wrapper">
          <li className="menu__items">About </li>
          <li className="menu__items">/</li>

          <li className="menu__items">Ecosystem </li>
          <li className="menu__items">/ </li>
          <li className="menu__items">Activities </li>
          <li className="menu__items">/</li>
          <li className="menu__items">MarketpLace</li>
          <li className="menu__items">/</li>
        </ul>    
        </div>
        <div className="logo__nav">
        <img src={miniLogo} alt=""/>
        </div>
        <div className="account__container">
          <div className="login_button button active">
              <span>Login</span>
          </div>
          <div className="signIn_button button ">
            <p>Signin</p>
          </div>
        </div>
        </div>
    )
  }
}
