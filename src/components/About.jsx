import React from "react";
import "./About.css"
import "./initanimation.css"
import aboutmebutton from "../imgs/aboutmebutton.png"
import aboutmebuttonES from "../imgs/aboutmebuttonES.png"
import dibumile from "../imgs/dibumile.png"
import fotomile from "../imgs/fotomile.png"
import grape from "../imgs/grape.png"
import ligalogo from "../imgs/ligalogo.png"
import { useSelector } from "react-redux";


function About() {

    const { darkMode, lang } = useSelector(state => state)

    return (
        <div className="initanimation">
            <img className={`imgtitle ${darkMode ? "darkletter" : "lightletter"}`} src={lang == "EN" ? aboutmebutton : aboutmebuttonES} alt="" />
            <br />
            <div className="photocontainer">
                <img className="dibumile photo" src={fotomile} alt="" />
                <img className="dibumile draw" src={dibumile} alt="" />
            </div>
            <div className="aboutcontainer">
                {lang == "EN" ?
                    <div className="abouttext">
                        <div className="paragraph">
                            My name is Mauro. I am Full Stack Developer with a background in Web Design. Experience working with NodeJS, React, Redux, SQL, and other technologies in the sector. <br /> I have a beautiful daughter. She design this portfolio actually.
                        </div>
                        <br />
                        <div className="paragraph">
                            <img className="grape" src={grape} alt="" />
                            I'm from Mendoza, Argentina. The land of the Sun and good wine. And I like wine... So much. I love my country and I invite you to know more about it.
                        </div>
                        <br />
                        <div className="paragraph">
                            <img className="ligalogo" src={ligalogo} alt="" />
                            I enjoy doing theater. I'm a member of the Mendoza Improvisation League. The cast for which I created their official website (You can see it in this portfolio).
                        </div>
                    </div>
                    :
                    <div className="abouttext">
                        <div className="paragraph">
                            Mi nombre es Mauro. Soy desarrollador FullStack con conocimiento en Diseño Web. Poseo experiencia trabajando con Node.js, React, Redux, SQL entre otras tecnologías del sector. <br /> Tengo una hermosa hija. Y de hecho ella diseñó este portafolio.
                        </div>
                        <br />
                        <div className="paragraph">
                            <img className="grape" src={grape} alt="" />
                            Soy de Mendoza, Argentina. La tierra del Sol y del buen vino. Y me gusta el vino... bastante. Amo a mi país por lo que te invito a conocer más del mismo.
                        </div>
                        <br />
                        <div className="paragraph">
                            <img className="ligalogo" src={ligalogo} alt="" />
                            I enjoy doing theater. I'm a member of the Mendoza Improvisation League. The cast for which I created their official website.
                            Adoro hacer teatro. Soy miembro de la Liga Mendocina de Improvisación. Elenco del cual he creado su sitio oficial (Podés verlo en este portafolio).
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default About;