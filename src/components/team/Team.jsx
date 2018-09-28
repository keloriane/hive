import React, { Component } from 'react'
import HoverImage from "react-hover-image"
import quentin from './../../assets/img/quentin.png'
import quentinHover from './../../assets/img/quentinHover.png'
import cash from './../../assets/img/Cash.png'
import cashHover from './../../assets/img/cashHover.png'
import guillaume from './../../assets/img/Guillaume.png'
import guillaumeHover from './../../assets/img/guillaumeHover.png'
import db from './../../assets/img/db.png'
import dbHover from './../../assets/img/dbHover.png'

import marin from './../../assets/img/Marin.png'
import marinHover from './../../assets/img/marinHover.png'

import pe from './../../assets/img/PE.png'
import peHover from './../../assets/img/peHover.png'
import sam from './../../assets/img/Sam.png'
import samHover from './../../assets/img/samHover.png'
import mathias from './../../assets/img/mathias.png'
import mathiasHover from './../../assets/img/matiasHover.png'
import jimmy from './../../assets/img/Jimmy.png'
import jimmyHover from './../../assets/img/jimmyHover.png'
import Nav from '../layout/nav/Nav';

    
export default class Team extends Component {
    constructor(){
        super()
      let urls = {
    
      }
      this.state= {
        profils: [
          {
            id:1,
            name:'Quentin',
            lastName: "Degroux",
            position: "CEO",
            jobTitle: "President of Hive",
            imageProfil:'./../../../assets/img/BigLogo.svg'
          },
          {
            id:2,
            name:"Guillaume",
            lastName: "Veldekens",
            position: "COO",
          },
          {
            id:3,
            name:'Mathias',
            lastName: "Gross",
            position: "Head of leagal Department",
          },
          {
            id:4,
            name:'Jimmy',
            lastName: "Goossens",
            position: "Head of Developement",
            jobTitle: "Technical officer"
          },
          {
            id:5,
            name:'Adrien',
            lastName: "Scorniciel",
            position: "Traductor language",
          },
          {
            id:6,
            name:'Samuel',
            lastName: "Bermans",
            position: "Genral Scretary",
          },
          {
            id:7,
            name:'Nicolas',
            lastName: "Claise",
            position: "Genral Scretary",
          },
         
          {
            id:8,
            name:'Marin',
            lastName: "Stas",
            position: "Communication manager",
          },
          {
            id:8,
            name:'Antoine',
            lastName: "Debrabandere",
            position: "Communication manager ",
          },
          
        ]
      }
    }
    render() {
      
      return (
        
        <div className="team__about__container">
          <div className="right__bg">
        </div>
          <div className="container__about">
        <div className="title__container ">
          <h2>Our team</h2>
        </div>
        <div className="team__card__container">
            <div className="card__container">
           <div className="card__row">
            <div className="card__items">
                <HoverImage src={quentin} alt="" hoverSrc={quentinHover}/>
            </div>
            <div className="card__items">
                <HoverImage src={guillaume} alt=""hoverSrc={guillaumeHover}/>
            </div>
            <div className="card__items">
                <HoverImage src={sam} alt="" hoverSrc={samHover}/>
            </div>
            
           </div>      
            <div className="card__row">
            <div className="card__items">
                <HoverImage src={jimmy} alt="" hoverSrc={jimmyHover}/>
            </div>
            <div className="card__items">
                <HoverImage src={cash} alt="" hoverSrc={cashHover}/>
            </div>
            <div className="card__items">
                <HoverImage src={marin} alt="" hoverSrc={marinHover}/>
            </div>
            </div>
            <div className="card__row">
            <div className="card__items">
                <HoverImage src={pe} alt="" hoverSrc={peHover}/>
            </div>
            <div className="card__items">
                <HoverImage src={db} alt="" hoverSrc={dbHover}/>
            </div>
            <div className="card__items">
                <HoverImage src={sam} alt="" hoverSrc={samHover}/>
            </div>
            
            </div>
            </div>
         </div>
         </div>
          </div>  
         
  
       
      
    )
  }
}
