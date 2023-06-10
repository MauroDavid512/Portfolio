import React from "react";
import "./Experience.css"
import experiencebutton from "../imgs/experiencebutton.png"
import ExperienceCard from "./ExperienceCard";
import css from "../imgs/css.png"
import express from "../imgs/express.png"
import figma from "../imgs/figma.png"
import javascript from "../imgs/javascript.png"
import node from "../imgs/node.png"
import postgres from "../imgs/postgres.png"
import reactimg from "../imgs/reactimg.png"
import redux from "../imgs/redux.png"
import sequelize from "../imgs/sequelize.png"
import typescript from "../imgs/typescript.png"
import wordpress from "../imgs/wordpress.png"
import java from "../imgs/java.png"
import python from "../imgs/python.png"
import { useSelector } from "react-redux";
import fullstack from "../imgs/fullstack.png"
import frontend from "../imgs/frontend.png"
import backend from "../imgs/backend.png"


function Experience() {

    const darkMode = useSelector(state => state.darkMode)

    const exp = [
        {
            title: "Pokemon SPA",
            date: "Aug-2022 Sep-2022",
            description: "Designed and developed a Pokemon app that included searches, filters, ordering, and creation. Extracted information from the Pokemon API and saved it in its database. Developed the app using React, Redux, pure CSS for the Front and Node.js with Express for the Back. Database in PostgreSQL and Sequelize.",
            abilities: [css, express, javascript, node, postgres, reactimg, redux, sequelize],
            image: "",
            category: "fullstack",
            links: [
                {
                    type: "Deploy",
                    link: "https://pokemonapimauro-psi.vercel.app/"
                },
                {
                    type: "Front Repository",
                    link: "https://github.com/MauroDavid512/pokemonPageFront"
                },
                {
                    type: "Back Repository",
                    link: "https://github.com/MauroDavid512/pokemonPageBack"
                }
            ]
        },
        {
            title: "La Reserva",
            date: "Sep-2022 Oct-2022",
            description: "Designed and developed a sports complex app that included searches, filters, ordering, and the creation of tournaments organized by the administrator. It allows registration for registered users. It shows a table of positions and a table of scorers per tournament. Worked in a team using Git, GitHub, Trello, and Scrum methodology Developed the app using React, Redux, Tailwind for the Front and Node.js with Express for the Back. Database in PostgreSQL and Sequelize.",
            abilities: [css, express, javascript, node, postgres, reactimg, redux, sequelize],
            image: "",
            category: "front",
            links: [
                {
                    type: "Deploy",
                    link: "https://henry-lareserva-front.vercel.app/home"
                },
                {
                    type: "Respository",
                    link: "https://github.com/CristianLarrauri/Henry-LaReserva"
                }
            ]
        },
        {
            title: "Liga Mendocina de improvisación",
            date: "Oct-2022 Present",
            description: 'Designed and developed the official website of the "Liga mendocina de improvisación" organization. Developed the app using React, Redux, CSS, HTML, and Node.js, Express.js, Sequelize, PostgreSQL. Created an independent ticket sales system. Created an admin profile capable of creating, modifying, and deleting any content on the page. Designed an interactive and informative site regarding the organization. (Deploy - Sample version, not yet completed. Admin code "liganeta2022")',
            abilities: [css, express, javascript, node, postgres, reactimg, redux, sequelize],
            image: "",
            category: "fullstack",
            links: [
                {
                    type: "Deploy",
                    link: "https://lmi-frontt.vercel.app/lmi/home"
                },
                {
                    type: "Front Repository",
                    link: "https://github.com/MauroDavid512/LMIfrontt"
                },
                {
                    type: "Back Repository",
                    link: "https://github.com/MauroDavid512/LMIback"
                }

            ]
        },
        {
            title: "NoCountry",
            date: "Mar-2023 present",
            description: "Develop a database for a delivery application. Develop functionalities for orders, user account creation, restaurants, and their respective menus. Implement shopping cart functionality for orders",
            abilities: [express, javascript, node, postgres, sequelize],
            image: "",
            category: "back",
            links: [
                {
                    type: "Respository",
                    link: "https://github.com/No-Country/c10-51-ft-reactchallenge"
                }
            ]
        },
        {
            title: "Fóforo",
            date: "Mar-2023",
            description: "Develop and design digital portfolios for professionals of all kinds. Sell the service. Arrange meetings with different clients to agree on decisions and preferences regarding the product",
            abilities: [css, express, javascript, node, postgres, reactimg, redux, sequelize, typescript, wordpress, java, python],
            image: "",
            category: "fullstack"
        }
    ]

    const expFilter = (category) => {
        let expFiltered = exp.filter(e => e.category == category)
        return expFiltered
    }

    const fsExp = expFilter("fullstack")
    const frontExp = expFilter("front")
    const backExp = expFilter("back")



    return (
        <div className="initanimation">
            <img className={darkMode? "darkletter" : "lightletter"} src={experiencebutton} alt="" />

            <div className="selector">
                {
                    [
                        {
                            title: "FullStack Experience",
                            category: "fullstack"
                        },
                        {
                            title: "Front-End Experience",
                            category: "front",
                        },
                        {
                            title: "Back-End Experience",
                            category: "back"
                        }
                    ].map(e => {
                        return (
                            
                            <a href={`#${e.category}`}><div className="paperButton">{e.title}</div></a>
                            
                        )
                    })
                }
            </div>
            <div className="experienceContainer">
                <img id="fullstack" className={`categoryTitle ${darkMode? "darkletter" : "lightletter"}`} src={fullstack} alt="" />
                {fsExp.map(e => {
                    return (
                        <div className={`rotate${parseInt(fsExp.findIndex(ele => ele.title == e.title))%2}`}>
                        <ExperienceCard title={e.title} date={e.date} description={e.description} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
                <img id="front" className={`categoryTitle ${darkMode? "darkletter" : "lightletter"}`} src={frontend} alt="" />
                {frontExp.map(e => {
                    return (
                        <div className={`rotate${parseInt(frontExp.findIndex(ele => ele.title == e.title))%2}`}>
                        <ExperienceCard title={e.title} date={e.date} description={e.description} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
                <img id="back" className={`categoryTitle ${darkMode? "darkletter" : "lightletter"}`} src={backend} alt="" />
                {backExp.map(e => {
                    return (
                        <div  className={`rotate${parseInt(backExp.findIndex(ele => ele.title == e.title))%2}`}>
                        <ExperienceCard title={e.title} date={e.date} description={e.description} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Experience;