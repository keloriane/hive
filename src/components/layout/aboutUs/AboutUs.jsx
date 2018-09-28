import React, { Component } from 'react'
import Nav from './../nav/Nav';
import ProfilItem from './../../../assets/img/profilPenta.svg';
import  Team from './../../team/Team';

export default class AboutUs extends Component {
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
  
     
        <div className="text__about__container">
        <div className="inner__text__container">          
          <div className="title__container">
            <h2>Our mission</h2>
          </div>
          <div className="text__about__us">
            <p>At HIVE, we believe that distributed ledger technologies, and more specifically blockchain has the potential to reshape our societies, economies and social interactions by commoditizing trust and empowering individuals. Just as Social, Cloud and Mobile sparked the wave of innovation in the last ten years, blockchain will most likely be a key pillar of the next internet paradigm, together with other technologies.</p> 
            <p>While this journey is slowly emerging before us, we think that stimulating the Belgian entrepreneurship around blockchain-related businesses will be key to create the necessary pre-conditions for adoption and growth.</p>
            <p>To match our vision, we created a cooperative structure (SCRL/CVBA) where the successes of the projects are shared with the contributors and where anyone can market its skills or experience to further benefit the whole group. We believe these features are key to facilitate the emergence and adoption of blockchain-related projects in Belgium.</p>
            <ul> <p>
To execute this mission, we aim at:</p>
              <li> <strong> Connecting </strong> all relevant actors in the Belgian scene, by organizing large events, workshops, seminars or hackathons to satisfy the needs of both the general public and industry experts.</li>
              <li> <strong> Supporting </strong> our members and partners to reach their ambition, by finding synergies and providing a place for our members and partners to share their services between each other.</li>
            </ul>
            <p>We believe this approach can help addressing the main barriers to blockchain’s wider implementation, namely: </p>
            <ul className="list__inner__text">
              <li>(1) enabling collaboration and overcoming competition, </li>
              <li>(2) shaping a positive regulatory framework,</li>
              <li>(3) and identify business cases that justify transition costs.</li>
            </ul>
          </div>
        </div>
        </div>
        
    
    )
  }
}
