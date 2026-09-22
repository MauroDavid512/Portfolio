import React from "react";
import "./NavBar.css";
import homebutton from "../imgs/homebutton.png";
import aboutmebutton from "../imgs/aboutmebutton.png";
import experiencebutton from "../imgs/experiencebutton.png";
import portfoliobutton from "../imgs/portfoliobutton.png";
import skillsbutton from "../imgs/skillsbutton.png";
import homebuttonES from "../imgs/homebuttonES.png";
import aboutmebuttonES from "../imgs/aboutmebuttonES.png";
import experiencebuttonES from "../imgs/experiencebuttonES.png";
import portfoliobuttonES from "../imgs/portfoliobuttonES.png";
import skillsbuttonES from "../imgs/skillsbuttonES.png";
import logooutlook from "../imgs/logooutlook.png";
import logoin from "../imgs/logoin.png";
import logogithub from "../imgs/logogithub.png";
import logogithubdark from "../imgs/logogithubdarkmode.png";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import cvMauroEN from "../cv/enCv.pdf";
import cvMauroES from "../cv/esCv.pdf";
import downloadcv from "../imgs/downloadcv.png";
import hamburguer from "../imgs/hamburguer.png";
import close from "../imgs/close.png";
import { useState } from "react";

function NavBar() {
  let body = document.body;
  const screenWidth = window.innerWidth;

  const dispatch = useDispatch();

  const { darkMode, lang } = useSelector((state) => state);

  const [up, setUp] = useState("");

  const [langMenu, setLangMenu] = useState(false);

  const [openNav, setOpenNav] = useState(false);

  const mode =
    darkMode && screenWidth > 1080
      ? {
          img: "darkimage",
          letter: "darkletter",
          line: "",
        }
      : {
          img: "",
          letter: "lightletter",
          line: "line",
        };

  const handleMode = () => {
    dispatch(actions.darkMode());
    console.log(screenWidth);
    darkMode
      ? (body.className = "lightbackground")
      : (body.className = "darkbackground");
  };

  const handleLang = (str) => {
    if (str === lang) {
    } else {
      // html.setAttribute('lang', str.toLoweCase())
      dispatch(actions.setLang(str));
    }
  };

  const handleLangMenu = (bool) => {
    if (bool) {
      setUp("");
      setLangMenu(bool);
    } else {
      setUp("up");
      setTimeout(() => {
        setLangMenu(bool);
      }, 1000);
    }
  };

  const handleOpenNav = (bool) => {
    setOpenNav(bool);
  };

  const handleNavClick = () => {
    handleOpenNav(false);
  };

  return (
    <div>
      <img
        className="ham"
        onClick={(e) => handleOpenNav(true)}
        src={hamburguer}
        alt=""
      />
      <div
        className={`nav-bar ${mode.line} ${openNav ? "navOpen" : "navClose"}`}
      >
        <img
          onClick={(e) => handleOpenNav(false)}
          className="closeBtn"
          src={close}
          alt=""
        />

        <a href="#home">
          <div onClick={handleNavClick} className="navoption hovereffect">
            <img
              className={`optionimage ${mode.letter}`}
              src={lang === "EN" ? homebutton : homebuttonES}
              alt=""
            />
          </div>
        </a>

        <a href="#experience">
          <div onClick={handleNavClick} className="navoption hovereffect">
            <img
              className={`optionimage ${mode.letter}`}
              src={lang === "EN" ? experiencebutton : experiencebuttonES}
              alt=""
            />
          </div>
        </a>

        <a href="#skills">
          <div onClick={handleNavClick} className="navoption hovereffect">
            <img
              className={`optionimage ${mode.letter}`}
              src={lang === "EN" ? skillsbutton : skillsbuttonES}
              alt=""
            />
          </div>
        </a>

        <a href="#portfolio">
          <div onClick={handleNavClick} className="navoption hovereffect">
            <img
              className={`optionimage ${mode.letter}`}
              src={lang === "EN" ? portfoliobutton : portfoliobuttonES}
              alt=""
            />
          </div>
        </a>

        <a href="#about">
          <div onClick={handleNavClick} className="navoption hovereffect">
            <img
              className={`optionimage ${mode.letter}`}
              src={lang === "EN" ? aboutmebutton : aboutmebuttonES}
              alt=""
            />
          </div>
        </a>

        <a href="#contact">
          <div onClick={handleNavClick} className="navoption hovereffect">
            <img
              className={`optionimage navContactImage ${mode.img}`}
              title={lang === "EN" ? "Contact" : "Contacto"}
              src={logooutlook}
              alt=""
            />
          </div>
        </a>

        <div className="sticky">
          <div className="contactcontainer">
            <a href="mailto:maurodaviddev@gmail.com">
              <img
                className={`contact hovereffect ${mode.img}`}
                title={lang === "EN" ? "Send mail" : "Enviar correo"}
                src={logooutlook}
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mauro-david-89432b193/"
            >
              <img
                className={`contact hovereffect ${mode.img}`}
                title="LinkedIn"
                src={logoin}
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MauroDavid512"
            >
              <img
                className={`contact hovereffect ${mode.img}`}
                title="GitHub"
                src={
                  darkMode && screenWidth > 1080 ? logogithubdark : logogithub
                }
                alt=""
              />
            </a>
          </div>
          <div className="specialbuttoncontainer">
            <div className="darkbuttoncontainer" onClick={handleMode}>
              {lang === "EN" ? (
                <div
                  title={darkMode ? "Disable dark mode" : "Dark Mode"}
                  className={`darkMode ${darkMode ? "darkOn" : "darkOff"}`}
                ></div>
              ) : (
                false
              )}
              {lang === "ES" ? (
                <div
                  title={darkMode ? "Desactivar modo oscuro" : "Modo oscuro"}
                  className={`darkMode ${darkMode ? "darkOn" : "darkOff"}`}
                ></div>
              ) : (
                false
              )}
            </div>
            <div>
              <div
                className="langSelector"
                onMouseEnter={(e) => handleLangMenu(true)}
                onMouseLeave={(e) => handleLangMenu(false)}
              >
                {lang === "EN" ? "Select language" : false}
                {lang === "ES" ? "Cambiar idioma" : false}
                {langMenu ? (
                  <div
                    onMouseEnter={(e) => handleLangMenu(true)}
                    className={`langs ${up}`}
                  >
                    <div
                      onClick={(e) => handleLang("EN")}
                      className="paperButton"
                    >
                      English
                    </div>
                    <div
                      onClick={(e) => handleLang("ES")}
                      className="paperButton"
                    >
                      Español
                    </div>
                  </div>
                ) : (
                  false
                )}
              </div>
            </div>
          </div>
          <a
            href={lang === "EN" ? cvMauroEN : cvMauroES}
            download="CV Mauro Alós"
          >
            <img
              className={`downloadcv ${mode.img}`}
              title={lang === "EN" ? "Download Resume" : "Descargar CV"}
              src={downloadcv}
              alt=""
            />
          </a>
        </div>
      </div>
      {openNav ? (
        <div
          className="navBackground"
          onClick={(e) => handleOpenNav(false)}
        ></div>
      ) : (
        false
      )}
    </div>
  );
}

export default NavBar;
