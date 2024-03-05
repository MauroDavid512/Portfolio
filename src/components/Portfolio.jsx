import React from "react";
import './Portfolio.css'
import portfoliobutton from "../imgs/portfoliobutton.png"
import portfoliobuttonES from "../imgs/portfoliobuttonES.png"
import pokeapi from "../imgs/pokeapi.png"
import reserva from "../imgs/reserva.png"
import lmi from "../imgs/lmi.png"
import veroport from "../imgs/veroport.png"
import xumek from "../imgs/xumek.png"
import "./initanimation.css"
import { useSelector } from "react-redux";


function Portfolio() {

    const {darkMode, lang} = useSelector(state => state)

    let content = [
        {
            title: "Xumek - Derechos humanos",
            link: "http://xumek.org.ar/",
            image: xumek
        },
        // {
        //     title: "SPA Pokemon",
        //     link: "https://pokemonapimauro-psi.vercel.app/",
        //     image: pokeapi,
        //     description: ""
        // },
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