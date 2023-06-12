import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
import homebutton from "../imgs/homebutton.png"
import aboutmebutton from "../imgs/aboutmebutton.png"
import experiencebutton from "../imgs/experiencebutton.png"
import portfoliobutton from "../imgs/portfoliobutton.png"
import skillsbutton from "../imgs/skillsbutton.png"
import homebuttonES from "../imgs/homebuttonES.png"
import aboutmebuttonES from "../imgs/aboutmebuttonES.png"
import experiencebuttonES from "../imgs/experiencebuttonES.png"
import portfoliobuttonES from "../imgs/portfoliobuttonES.png"
import skillsbuttonES from "../imgs/skillsbuttonES.png"
import logooutlook from "../imgs/logooutlook.png"
import logoin from "../imgs/logoin.png"
import logogithub from "../imgs/logogithub.png"
import logogithubdark from "../imgs/logogithubdarkmode.png"
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions'
import cvMauro from "../cv/englishCv.pdf"
import downloadcv from "../imgs/downloadcv.png"
import hamburguer from "../imgs/hamburguer.png"
import close from "../imgs/close.png"
import { useState } from "react";



function NavBar() {

    let body = document.body
    let html = document.querySelector('html')

    const dispatch = useDispatch()

    const { darkMode, lang } = useSelector(state => state)

    const [up, setUp] = useState("")

    const [langMenu, setLangMenu] = useState(false)

    const [openNav, setOpenNav] = useState(false)

    const mode = darkMode ? {
        option: "darkOn",
        img: "darkimage",
        letter: "darkletter",
        line: ""
    } : {
        option: "darkOff",
        img: "",
        letter: "lightletter",
        line: "line"
    }

    const handleMode = () => {
        dispatch(actions.darkMode())
        darkMode ? body.className = "lightbackground" : body.className = "darkbackground"
    }

    const handleLang = (str) => {
        if (str == lang) {
        } else {
            // html.setAttribute('lang', str.toLoweCase())
            dispatch(actions.setLang(str))
        }
    }

    const handleLangMenu = (bool) => {
        if (bool) {
            setUp("")
            setLangMenu(bool)
        } else {
            setUp("up")
            setTimeout(() => {
                setLangMenu(bool)
            }, 1000)
        }
    }

    const handleOpenNav = (bool) => {
        setOpenNav(bool)
    }

    return (
        <div>
            <img className="ham" onClick={e => handleOpenNav(true)} src={hamburguer} alt="" />
            <div  className={`nav-bar ${mode.line} ${openNav ? "navOpen" : "navClose"}`}>
                <img onClick={e => handleOpenNav(false)} className="closeBtn" src={close} alt="" />

                <Link to='/'><div onClick={e => handleOpenNav(false)} className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={lang == "EN" ? homebutton : homebuttonES} alt="" /></div></Link>

                <Link to='/about'><div onClick={e => handleOpenNav(false)} className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={lang == "EN" ? aboutmebutton : aboutmebuttonES} alt="" /></div></Link>

                <Link to='/experience'><div onClick={e => handleOpenNav(false)} className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={lang == "EN" ? experiencebutton : experiencebuttonES} alt="" /></div></Link>

                <Link to='/skills'><div onClick={e => handleOpenNav(false)} className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={lang == "EN" ? skillsbutton : skillsbuttonES} alt="" /></div></Link>

                <Link to='/portfolio'><div onClick={e => handleOpenNav(false)} className="navoption hovereffect"><img className={`optionimage ${mode.letter}`} src={lang == "EN" ? portfoliobutton : portfoliobuttonES} alt="" /></div></Link>

                <div className="sticky">
                    <div className="contactcontainer">
                        <a href="mailto:mauroalos@hotmail.com"><img className={`contact hovereffect ${mode.img}`} title={lang == "EN" ? "Send mail" : "Enviar correo"} src={logooutlook} alt="" /></a>
                        <Link target="_blank" to="https://www.linkedin.com/in/mauro-david-89432b193/"><img className={`contact hovereffect ${mode.img}`} title="LinkedIn" src={logoin} alt="" /></Link>
                        <Link target="_blank" to="https://github.com/MauroDavid512"><img className={`contact hovereffect ${mode.img}`} title="GitHub" src={darkMode ? logogithubdark : logogithub} alt="" /></Link>
                    </div>
                    <div className="specialbuttoncontainer">
                        <div className="darkbuttoncontainer" onClick={handleMode}>
                            {lang == "EN" ? <div title={darkMode ? "Disable dark mode" : "Dark Mode"} className={`darkMode ${mode.option}`}></div> : false}
                            {lang == "ES" ? <div title={darkMode ? "Desactivar modo oscuro" : "Modo oscuro"} className={`darkMode ${mode.option}`}></div> : false}
                        </div>
                        <div>
                            <div className="langSelector" onMouseEnter={e => handleLangMenu(true)} onMouseLeave={e => handleLangMenu(false)}>
                                {lang == "EN" ? "Select language" : false}
                                {lang == "ES" ? "Cambiar idioma" : false}
                                {langMenu ?
                                    <div onMouseEnter={e => handleLangMenu(true)} className={`langs ${up}`}>
                                        <div onClick={e => handleLang("EN")} className="paperButton">English</div>
                                        <div onClick={e => handleLang("ES")} className="paperButton">Español</div>
                                    </div>
                                    : false}

                            </div>
                        </div>
                    </div>
                    <a href={cvMauro} download="CV Mauro David"><img className={`downloadcv ${mode.img}`} title={lang == "EN" ? "Dowload Resume" : "Descargar CV"} src={downloadcv} alt="" /></a>
                </div>
            </div>
            {openNav ? <div  className="navBackground" onClick={e => handleOpenNav(false)}></div> : false}
        </div>
    );
}

export default NavBar;