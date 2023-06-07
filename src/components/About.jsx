import React from "react";
import "./About.css"
import "./initanimation.css"
import aboutmebutton from "../imgs/aboutmebutton.png"
import dibumile from "../imgs/dibumile.png"
import fotomile from "../imgs/fotomile.png"
import grape from "../imgs/grape.png"
import ligalogo from "../imgs/ligalogo.png"
import { useSelector } from "react-redux";


function About() {

    const darkMode = useSelector(state => state.darkMode)


    return (
        <div className="initanimation">
            <img className={darkMode? "darkletter" : "lightletter"} src={aboutmebutton} alt="" />
            <br />
            <div className="aboutcontainer">
                <div className="photocontainer">
                    <img className="dibumile photo" src={fotomile} alt="" />
                    <img className="dibumile draw" src={dibumile} alt="" />
                </div>
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
                        I enjoy doing theater. I'm a member of the Mendoza Improvisation League. The cast for which I created their official website.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;