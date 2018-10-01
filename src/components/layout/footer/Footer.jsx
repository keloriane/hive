import React, { Component } from 'react'
import facebook from './../../../assets/img/facebook_icon.png'
import twitter from './../../../assets/img/twitter_icon.png'
import medium from './../../../assets/img/madium_icon.png'
import linkedin from './../../../assets/img/linkedin_icon.png'
import Modal from 'react-awesome-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  render() {
    
    return (
      <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__item">
          <div className="plus_button">
            <p>+</p><p>Contact</p>
          </div>
        </div>
        <div className="footer__item social-content">
          <div className="sociale__items">
            <img src={facebook} alt=""/>
          </div>
          <div className="sociale__items">
            <img src={twitter}alt=""/>
          </div>
          <div className="sociale__items">
            <img src={medium} alt=""/>
          </div>
          <div className="sociale__items">
            <img src={linkedin} alt=""/>
          </div>        
        </div>
        <div className="footer__item">
          <div className="newsLetter">
            <button className="news-letter button" onClick={() => this.openModal()}>
            Subscribe 
            </button>
            <Modal 
                    visible={this.state.visible}
                    width="287"
                    height="259"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                    bottom="0"
                    position="absolute"
                    right="6%"
                    className="Modal__news"
                >
                <div className="modal__container">
                
                <p>Newsletter</p>
                <button className="signup__modal__button">
                  Subscribe
                </button>
                </div>
              
                </Modal >
          </div>
        </div>
      </div>
      </div>
    )
  }
}
