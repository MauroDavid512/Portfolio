import React from "react";
import "./Experience.css"
import experiencebutton from "../imgs/experiencebutton.png"
import experiencebuttonES from "../imgs/experiencebuttonES.png"
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
import docker from "../imgs/docker.png"
import { useSelector } from "react-redux";
import fullstack from "../imgs/fullstack.png"
import frontend from "../imgs/frontend.png"
import backend from "../imgs/backend.png"
import noITimg from "../imgs/noIT.png"
import noITES from "../imgs/noITES.png"


function Experience() {

    const { darkMode, lang } = useSelector(state => state)

    const exp = [
        {
            title: "Svant-lite",
            date: "Sep-2024 Apr-2025",
            dateES: "Sep-2024 Abr-2025",
            description: "I co-developed the frontend of the Svant-lite web app, a streamlined version of Svant.",
            descriptionES: "Desarrollé en colaboración el frontend de la AppWeb Svant-lite. Una versión minimizada de Svant.",
            abilities: [css, typescript, javascript, java, postgres, reactimg, redux, figma],
            image: "",
            category: "front",
        },
        {
            title: "Svant",
            date: "Apr-2024 Present",
            dateES: "Abr-2024 Actualidad",
            description: "I co-developed the frontend of the Svant web app, fully built with React and global state management using Redux. Its styling was implemented with SCSS. The app displays real-time charts and calculates key data to support decision-making for oil companies.",
            descriptionES: "Desarrollé en colaboración el frontEnd de la AppWeb Svant. La misma cuenta con su cuerpo desarrollado totalmente con React y manejo de estados globales con Redux. Su estilado está realizado con scss. Muestra gráficos en tiempo real y calcula datos importantes para la toma de decisiones de compañias petroleras.",
            abilities: [css, typescript, javascript, java, postgres, reactimg, redux, figma],
            image: "",
            category: "front",
            links: [
                {
                    type: "Deploy",
                    typeES: "Sitio",
                    link: "https://svant.us/"
                },
            ]
        },
        {
            title: "Emotionall",
            date: "Apr-2024 Present",
            dateES: "Abr-2024 Actualidad",
            description: "I developed the promotional website for the Emotionall app, built in WordPress with Elementor. It features a blog where news and updates on mental health are regularly posted.",
            descriptionES: "Desarrollé el sitio promocional de la app Emotionall. El mismo esta construido en WordPress con elementor. Cuenta con un Blog donde se suben periodicamente noticias y novedades respecto a la salud mental.",
            abilities: [wordpress],
            image: "",
            category: "front",
            links: [
                {
                    type: "Deploy",
                    typeES: "Sitio",
                    link: "https://emotionall.co/"
                },
            ]
        },
        {
            title: "La Reserva",
            date: "Sep-2022 Oct-2022",
            dateES: "Sep-2022 Oct-2022",
            description: "Designed and developed a sports complex app that included searches, filters, ordering, and the creation of tournaments organized by the administrator. It allows registration for registered users. It shows a table of positions and a table of scorers per tournament. Worked in a team using Git, GitHub, Trello, and Scrum methodology Developed the app using React, Redux, Tailwind for the Front and Node.js with Express for the Back. Database in PostgreSQL and Sequelize.",
            descriptionES: "Diseñé y desarrollé una aplicación de complejo deportivo que incluía búsquedas, filtros, ordenamiento y la creación de torneos organizados por el administrador. Permite el registro para usuarios registrados. Muestra una tabla de posiciones y una tabla de goleadores por torneo. Trabajé en equipo utilizando Git, GitHub, Trello y la metodología Scrum. Desarrollé la aplicación utilizando React, Redux, Tailwind para el Front y Node.js con Express para el Back. La base de datos está en PostgreSQL y Sequelize.",
            abilities: [css, express, javascript, node, postgres, reactimg, redux, sequelize],
            image: "",
            category: "front",
            links: [
                {
                    type: "Deploy",
                    typeES: "Sitio",
                    link: "https://henry-lareserva-front.vercel.app/home"
                },
                {
                    type: "Respository",
                    typeES: "Repositorio",
                    link: "https://github.com/CristianLarrauri/Henry-LaReserva"
                }
            ]
        },
        {
            title: "NoCountry",
            date: "Mar-2023 Jun-2023",
            dateES: "Mar-2023 Jun-2023",
            description: "Develop a database for a delivery application. Develop functionalities for orders, user account creation, restaurants, and their respective menus. Implement shopping cart functionality for orders",
            descriptionES: "Desarrollé una base de datos para una aplicación de delivery. Realicé funcionalidades para pedidos, creación de cuentas de usuario, restaurantes y sus respectivos menús. Implementé la funcionalidad de carrito de compras para los pedidos.",
            abilities: [express, javascript, node, postgres, sequelize],
            image: "",
            category: "back",
            links: [
                {
                    type: "Respository",
                    typeES: "Respositorio",
                    link: "https://github.com/No-Country/c10-51-ft-reactchallenge"
                }
            ]
        },
        {
            title: "Verónica Calderón Portfolio",
            date: "Mar-2023",
            dateES: "Mar-2023",
            description: "Design and create the portfolio for the actress Verónica Calderón. The web-site has a image's gallery with her professionals photos, her actoral reel and responsive design",
            descriptionES: "Diseñé y creé el portfolio para la actriz Verónica Calderón. El sitio web cuenta con una galería de imágenes que muestra sus fotos profesionales, su reel actoral y un diseño responsive.",
            abilities: [css, javascript, reactimg],
            image: "",
            category: "front",
            links: [
                {
                    type: "Deploy",
                    typeES: "Sitio",
                    link: "https://verocalderon.vercel.app/"
                }
            ]
        },
        {
            title: "Servicios Operativos S.R.L.",
            date: "Feb-2015 Sep-2022",
            dateES: "Feb-2015 Sep-2022",
            description: 'I performed loading and unloading of trucks for the sugar mill "Ledesma." I assembled orders manually and using machines. I was promoted to a controller position, where my responsibilities included supervision, stock and quality control, and coordinating tasks with other employees.',
            descriptionES: 'Realicé carga y descarga de camiones para la azucarera "Ledesma". Armado de pedidos manual y con maquinas. Ascendí a controlador, donde mis tareas fueron supervisión, control de stock y de calidad, coordinar las tareas con los demás empleados.',
            category: "noIT"
        },
        {
            title: "Tamarindo Ediciones",
            date: "Jan-2015 Feb-2015",
            dateES: "Ene-2015 Feb-2015",
            description: 'I sold books from Billiken publishing company. I searched for customers and collected installment payments.',
            descriptionES: 'Venta de libros de editorial Billiken. Búsqueda de clientes y cobro de las cuotas',
            category: "noIT"
        },
    ]

    const expFilter = (category) => {
        let expFiltered = exp.filter(e => e.category == category)
        return expFiltered
    }

    const fsExp = expFilter("fullstack")
    const frontExp = expFilter("front")
    const backExp = expFilter("back")
    const noIT = expFilter("noIT")

    return (
        <div className="initanimation">
            <img className={`imgtitle ${darkMode ? "darkletter" : "lightletter"}`} src={lang == "EN" ? experiencebutton : experiencebuttonES} alt="" />

            <div className="selector">
                {
                    [
                        {
                            title: lang == "EN" ? "Front-End Experience" : "Experiencia Front-End",
                            category: "front",
                        },
                        {
                            title: lang == "EN" ? "Back-End Experience" : "Experiencia Back-End",
                            category: "back"
                        },
                        {
                            title: lang == "EN" ? "No IT Experience" : "Experiencia no IT",
                            category: "noIT"
                        }
                    ].map(e => {
                        return (

                            <a href={`#${e.category}`}><div className="paperButton">{e.title}</div></a>

                        )
                    })
                }
            </div>
            <div className="experienceContainer">
                {fsExp.length !== 0 ? <img id="fullstack" className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`} src={fullstack} alt="" /> : null}
                {fsExp.map(e => {
                    return (
                        <div className={`rotate${parseInt(fsExp.findIndex(ele => ele.title == e.title)) % 2}`}>
                            <ExperienceCard title={e.title} date={lang == "EN" ? e.date : e.dateES} description={lang == "EN" ? e.description : e.descriptionES} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
                <img id="front" className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`} src={frontend} alt="" />
                {frontExp.map(e => {
                    return (
                        <div className={`rotate${parseInt(frontExp.findIndex(ele => ele.title == e.title)) % 2}`}>
                            <ExperienceCard title={e.title} date={lang == "EN" ? e.date : e.dateES} description={lang == "EN" ? e.description : e.descriptionES} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
                <img id="back" className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`} src={backend} alt="" />
                {backExp.map(e => {
                    return (
                        <div className={`rotate${parseInt(backExp.findIndex(ele => ele.title == e.title)) % 2}`}>
                            <ExperienceCard title={e.title} date={lang == "EN" ? e.date : e.dateES} description={lang == "EN" ? e.description : e.descriptionES} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
                <img id="noIT" className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`} src={lang == "EN" ? noITimg : noITES} alt="" />
                {noIT.map(e => {
                    return (
                        <div className={`rotate${parseInt(noIT.findIndex(ele => ele.title == e.title)) % 2}`}>
                            <ExperienceCard title={e.title} date={lang == "EN" ? e.date : e.dateES} description={lang == "EN" ? e.description : e.descriptionES} abilities={e.abilities} image={e.image} links={e.links} />
                        </div>
                    )
                })}
            </div>
            <div className="bottomspace"></div>
        </div>
    );
}

export default Experience;