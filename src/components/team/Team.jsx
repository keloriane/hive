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
import aymeric from './../../assets/img/aymeric.png'
import aymericHover from './../../assets/img/aymericHover.png'
import nico from './../../assets/img/nico.png'
import nicoHover from './../../assets/img/nicoHover.png'
import hanes from './../../assets/img/Hannes.png'
import hanesHover from './../../assets/img/hanesHover.png'
import Nav from '../layout/nav/Nav';


import linkedin from './../../assets/img/linkedin_icon.png'
import mail from './../../assets/img/mail.svg'

    
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
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/louis-quentin-degroux-21007b120/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Quentin</p>
                <p>Degroux</p>
                </div>
            </div>
            <div className="card__items">
                <HoverImage src={guillaume} alt=""hoverSrc={guillaumeHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/guillaume-veldekens-86918991/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Guillaume</p>
                <p>Veldekens</p>
                </div>
            </div>
            <div className="card__items">
                <HoverImage src={sam} alt="" hoverSrc={samHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/samuel-bermann-564737135/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Samuel</p>
                <p>Bermans</p>
                </div>
            </div>
            
           </div>      
            <div className="card__row">
            <div className="card__items">
                <HoverImage src={jimmy} alt="" hoverSrc={jimmyHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/jimmy-goossens-a74761115/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Jimmy</p>
                <p>Goossens</p>
                </div>
            </div>
            <div className="card__items">
                <HoverImage src={cash} alt="" hoverSrc={cashHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/cassandrevandeputte/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Cassandre</p>
                <p>Vandepute</p>
                </div>
            </div>
            <div className="card__items">
                <HoverImage src={marin} alt="" hoverSrc={marinHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/marin-stas-de-richelle-864227143/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Marin</p>
                <p>Stas</p>
                </div>
            </div>
            </div>
            <div className="card__row">
            <div className="card__items">
                <HoverImage src={pe} alt="" hoverSrc={peHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/ptasiaux/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Paul-Emanuel</p>
                <p>Tasiaux</p>
                </div>
            </div>
            <div className="card__items">
                <HoverImage src={db} alt="" hoverSrc={dbHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/antoine-de-brabandere-42ab16b5/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Antoine</p>
                <p>Debrabandere</p>
                </div>
            </div>
            <div className="card__items">
              
                <HoverImage src={mathias} alt="" hoverSrc={mathiasHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/matias-gross-044795b8/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Mathias</p>
                <p>Gross</p>
                </div>
            </div>
            
            </div>
            <div className="card__row">
            <div className="card__items">
                <HoverImage src={aymeric} alt="" hoverSrc={aymericHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/aymericktordeurs/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Aymeric</p>
                <p>Tordeur</p>
                </div>
            </div>
            <div className="card__items">
                <HoverImage src={nico} alt="" hoverSrc={nicoHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href="https://www.linkedin.com/in/nicolas-claise-46323028/"><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Nicolas</p>
                <p>Claise</p>
                </div>
            </div>
            <div className="card__items">
              
                <HoverImage src={hanes} alt="" hoverSrc={hanesHover}/>
                <div className="icon__container">
                  <div className="mail"><a href=""><img src={mail} alt=""/></a></div>
                  <div className="linkedin"><a href=""><img src={linkedin} alt=""/></a></div>
                </div>
                <div className="name-container">
                <p>Hannes</p>
                <p>Hardeman</p>
                </div>
            </div>
            
            </div>
            
            </div>
         </div>
         </div>
          </div>  
         
  
       
      
    )
  }
}
