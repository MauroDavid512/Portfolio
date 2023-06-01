import React from "react";
import skillsbutton from "../imgs/skillsbutton.png"
import "./Skills.css"
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


function Skills() {

    let skills = [
        {
            logo: css,
            name: "CSS"
        },
        {
            logo: express,
            name: "Express"
        },
        {
            logo: figma,
            name: "Figma"
        },
        {
            logo: javascript,
            name: "JavaScript"
        },
        {
            logo: node,
            name: "Node"
        },
        {
            logo: postgres,
            name: "PostgreSQL"
        },
        {
            logo: reactimg,
            name: "React"
        },
        {
            logo: redux,
            name: "Redux"
        },
        {
            logo: sequelize,
            name: "Sequelize"
        },
        {
            logo: typescript,
            name: "TypeScript"
        },
        {
            logo: wordpress,
            name: "Wordpress"
        }
    ]


    return (
        <div className="skills">
            <img src={skillsbutton} alt="" />
            <br />
            <div className="skillsContainer">
            {skills.map(e => {
                return (
                    <div className="skillCard">
                    <img className="skillLogo" src={e.logo} alt="" />
                    <div className="skillName">
                    {e.name}
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default Skills;