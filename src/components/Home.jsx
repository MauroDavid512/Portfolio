import React from "react";
import { useSelector } from "react-redux";
import maurodraw from "../imgs/maurodraw.png"
import "./Home.css"
import homebutton from "../imgs/homebutton.png"
import immauro from "../imgs/immauro.png"
import letme from "../imgs/letme.png"
import homebuttonES from "../imgs/homebuttonES.png"
import immauroES from "../imgs/immauroES.png"
import letmeES from "../imgs/letmeES.png"


function Home() {

    const lang = useSelector(state => state.lang)

    const darkMode = useSelector(state => state.darkMode)
    const mode = darkMode? {
        letter: "darkletter"
    } : {
        letter: "lightletter"
    }

    return (
        <div className="home">
            <img className={mode.letter} src={lang=="EN"? homebutton : homebuttonES} alt="" />
            <br />
            <div className="drawscontainer">
            <img className={`maurodraw ${mode.letter}`} src={maurodraw} alt="" />
            <img className={`immauro ${mode.letter}`} src={lang=="EN"? immauro : immauroES} alt="" />
            </div>
            <img className={`letme ${mode.letter}`} src={lang=="EN"? letme : letmeES} />
        </div>
    );
}

export default Home;