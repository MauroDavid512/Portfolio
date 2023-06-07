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
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions'



function NavBar() {

    let body = document.body

    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode)

    const mode = darkMode? {
        option:"darkOn",
        img: "darkimage",
        letter: "darkletter"
    } : {
        option:"darkOff",
        img: "",
        letter: "lightletter"
    }


    const handleMode = () => {
        dispatch(actions.darkMode())
        darkMode? body.className = "lightbackground" : body.className = "darkbackground"
    }
    
    return (
        < >
            <div className="nav-bar">
                <Link to='/'><div className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={homebutton} alt="" /></div></Link>
                <Link  to='/about'><div className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={aboutmebutton} alt="" /></div></Link>
                <Link  to='/experience'><div className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={experiencebutton} alt="" /></div></Link>
                <Link  to='/skills'><div className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={skillsbutton} alt="" /></div></Link>
                <Link  to='/portfolio'><div className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={portfoliobutton} alt="" /></div></Link>
                <div className="contactcontainer">
                <a href="mailto:mauroalos@hotmail.com"><img className={`contact hovereffect ${mode.img}`} src={logooutlook} alt="" /></a>
                <Link target="_blank" to="https://www.linkedin.com/in/mauro-david-89432b193/"><img className={`contact hovereffect ${mode.img}`} src={logoin} alt="" /></Link>
                <Link target="_blank" to="https://github.com/MauroDavid512"><img className={`contact hovereffect ${mode.img}`} src={logogithub} alt="" /></Link>
                </div>
                <div className="darkbuttoncontainer" onClick={handleMode}>
                    <div title={darkMode? "Disable dark mode" : "Dark Mode"} className={`darkMode ${mode.option}`}></div>
                </div>
            </div>

        </>
    );
}

export default NavBar;