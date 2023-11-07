import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resuma from './Resuma.pdf'
import { themeContext } from '../../Context'
import { useContext } from "react";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
      <div className="s-left">
        <span style={{color:darkMode?'white':''}}>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Enim nihil blanditiis impedit aut ipsam facere distinctio accusamus vero beatae!<br></br> Natus excepturi cum adipisci, in iste sed asperiores quisquam ipsum provident.</span>
        <a href={Resuma} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="s-right">
        {/* firstcard */}
        <div style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"figma,Photoshop "}
          />
                  
        </div>
        {/* Secondcard */}
        <div style={{top:"12rem", left:"-4rem"}}>
            <Card
              emoji={Glasses}
              heading={'Develport'}
              detail={"Html, Css, JavaScript, React "}
            />
          </div>
          {/* thirdcard */}
        <div style={{top:"19rem", left:"12rem"}}>
            <Card
              emoji={Humble}
              heading={'UI/UX'}
              detail={'................'}
            />
          </div>
        <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
      </div>
      </div>
      )
}

      export default Services