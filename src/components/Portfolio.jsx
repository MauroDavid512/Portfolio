import React from "react";
import './Portfolio.css'
import portfoliobutton from "../imgs/portfoliobutton.png"
import portfoliobuttonES from "../imgs/portfoliobuttonES.png"
import reserva from "../imgs/reserva.png"
import veroport from "../imgs/veroport.png"
import svant from "../imgs/Portada Svant.png"
import emotionall from "../imgs/emotionall web portada.png"
import "./initanimation.css"
import { useSelector } from "react-redux";


function Portfolio() {

    const {darkMode, lang} = useSelector(state => state)

    let content = [
        {
            title: "Svant",
            link: "https://svant.us/",
            image: svant,
            description: "",
        },
        {
            title: "Emotionall WebSite",
            link: "https://emotionall.co",
            image: emotionall,
            description: "",
        },
        {
            title: "La Reserva",
            link: "https://la-reserva.vercel.app/",
            image: reserva,
            description: ""
        },
        // {
        //     title: "Liga Mendocina de improvisación",
        //     link: "https://lmi-frontt.vercel.app/",
        //     image: lmi,
        //     description: ""
        // },
        {
            title: "Vero Calderón Portfolio",
            link: "https://verocalderon.vercel.app/",
            image: veroport,
            description: ""
        }
    ]

    return (
        <div className="initanimation">
            <img className={`imgtitle ${darkMode ? "darkletter" : "lightletter"}`}  src={lang == "EN" ? portfoliobutton : portfoliobuttonES} alt="" />

            <div className="cardcontainer">
                {content.map(e => {
                    return (

                        <a className="card" target="_blank" href={e.link}>
                                <img className="cardimg" src={e.image} alt={e.title} />
                                <div className="cardtitle" >{e.title}</div>
                                <div className="carddescription" >{e.description}</div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;