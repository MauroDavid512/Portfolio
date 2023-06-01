import React from "react";
import './Portfolio.css'
import portfoliobutton from "../imgs/portfoliobutton.png"
import pokeapi from "../imgs/pokeapi.png"
import reserva from "../imgs/reserva.png"
import lmi from "../imgs/lmi.png"
import veroport from "../imgs/veroport.png"


function Portfolio() {

    let content = [
        {
            title: "SPA Pokemon",
            link: "https://pokemonapimauro-psi.vercel.app/",
            image: pokeapi,
            description: ""
        },
        {
            title: "La Reserva",
            link: "https://la-reserva.vercel.app/",
            image: reserva,
            description: ""
        },
        {
            title: "Liga Mendocina de improvisación",
            link: "https://lmi-frontt.vercel.app/",
            image: lmi,
            description: ""
        },
        {
            title: "Vero Calderón Portfolio",
            link: "https://verocalderon.vercel.app/",
            image: veroport,
            description: ""
        }
    ]

    return (
        <div className="portfolio">
            <img src={portfoliobutton} alt="" />

            <div className="cardcontainer">
                {content.map(e => {
                    return (

                        <a className="card" target="_blank" href={e.link}>

                                <img className="cardimg" src={e.image} alt={e.title} />
                                <div className="cardtitle" >{e.title}</div>

                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;