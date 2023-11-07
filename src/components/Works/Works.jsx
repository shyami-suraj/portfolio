import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from "react";
const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="w-left">
                <span style={{color:darkMode?'white':''}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor,  sit amet consectetur adipisicing elit. 
                    Enim nihil blanditiis impedit aut<br /> ipsam facere distinctio 
                    accusamus vero beatae!<br /> Natus excepturi cum adipisci, in iste sed
                    asperiores quisquam
                    ipsum provident.</span>
                {/* <button className="button w-button">Hire me</button> */}
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    {/* background circle    */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        </div>
    )
}

export default Works