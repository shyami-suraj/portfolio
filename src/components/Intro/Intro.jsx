  
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Intro = () => {
  const transition ={ duration:2,type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode?'white':''}}>Hi!! I Am</span>
          <span>Suraj Manandhar</span>
          <span>As a Frontend Developer, I specialize in creating engaging and intuitive user
            interfaces that deliver exceptional user experiences. With expertise in HTML,
            CSS, and JavaScript, along with a strong understanding of ReactJS and its
            ecosystem, I am able to create responsive and visually appealing interfaces
            using various libraries and frameworks. I possess excellent communication
            and collaboration skills, making me an effective team player. Overall, I am a
            self-motivated individual who is committed to staying up-to-date with the
            latest industry developments and continuously improving my skills.</span>
        </div>
        
          <button className="button i-button">Hire me</button>
        
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top:'-4%', left:'60%'}}> 
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'18rem', left:'0rem'}}>
          <FloatingDiv image={thumbup} txt1='Vice President ' txt2='Of prime Esporthub' />
        </div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
      </div>
      <div className="blur" style={{
        background:'#C1F5FF',
        top:'17rem',
        width:'21rem',
        height:'11rem',
        left:'-9rem'
      }}></div>
    </div>
  );
};

export default Intro;