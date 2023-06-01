import React from "react";
import maurodraw from "../imgs/maurodraw.png"
import "./Home.css"
import homebutton from "../imgs/homebutton.png"
import immauro from "../imgs/immauro.png"
import letme from "../imgs/letme.png"


function Home() {
    return (
        <div className="home">
            <img src={homebutton} alt="" />
            <br />
            <div className="drawscontainer">
            <img className="maurodraw" src={maurodraw} alt="" />
            <img className="immauro" src={immauro} alt="" />
            </div>
            <img className="letme" src={letme} />
        </div>
    );
}

export default Home;