import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
import homebutton from "../imgs/homebutton.png"
import aboutmebutton from "../imgs/aboutmebutton.png"
import experiencebutton from "../imgs/experiencebutton.png"
import portfoliobutton from "../imgs/portfoliobutton.png"
import skillsbutton from "../imgs/skillsbutton.png"
import logooutlook from "../imgs/logooutlook.png"
import logoin from "../imgs/logoin.png"
import logogithub from "../imgs/logogithub.png"



function NavBar() {
    
    return (
        < >
            <div className="nav-bar">
                <Link to='/'><div className="navoption hovereffect"><img className="optionimage" src={homebutton} alt="" /></div></Link>
                <Link  to='/about'><div className="navoption hovereffect"><img className="optionimage" src={aboutmebutton} alt="" /></div></Link>
                <Link  to='/experience'><div className="navoption hovereffect"><img className="optionimage" src={experiencebutton} alt="" /></div></Link>
                <Link  to='/skills'><div className="navoption hovereffect"><img className="optionimage" src={skillsbutton} alt="" /></div></Link>
                <Link  to='/portfolio'><div className="navoption hovereffect"><img className="optionimage" src={portfoliobutton} alt="" /></div></Link>
                <div className="contactcontainer">
                <a href="mailto:mauroalos@hotmail.com"><img className="contact hovereffect" src={logooutlook} alt="" /></a>
                <Link target="_blank" to="https://www.linkedin.com/in/mauro-david-89432b193/"><img className="contact hovereffect" src={logoin} alt="" /></Link>
                <Link target="_blank" to="https://github.com/MauroDavid512"><img className="contact hovereffect" src={logogithub} alt="" /></Link>
                </div>
            </div>

        </>
    );
}

export default NavBar;