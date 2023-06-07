import React from "react";
import { useSelector } from "react-redux";
import maurodraw from "../imgs/maurodraw.png"
import "./Home.css"
import homebutton from "../imgs/homebutton.png"
import immauro from "../imgs/immauro.png"
import letme from "../imgs/letme.png"


function Home() {

    const darkMode = useSelector(state => state.darkMode)
    const mode = darkMode? {
        letter: "darkletter"
    } : {
        letter: "lightletter"
    }

    return (
        <div className="home">
            <img className={mode.letter} src={homebutton} alt="" />
            <br />
            <div className="drawscontainer">
            <img className={`maurodraw ${mode.letter}`} src={maurodraw} alt="" />
            <img className={`immauro ${mode.letter}`} src={immauro} alt="" />
            </div>
            <img className={`letme ${mode.letter}`} src={letme} />
        </div>
    );
}

export default Home;