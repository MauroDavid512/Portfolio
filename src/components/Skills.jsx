import React from "react";
import skillsbutton from "../imgs/skillsbutton.png"
import skillsbuttonES from "../imgs/skillsbuttonES.png"
import "./Skills.css"
import css from "../imgs/css.png"
import cssword from "../imgs/cssword.png"
import express from "../imgs/express.png"
import expressword from "../imgs/expressword.png"
import figma from "../imgs/figma.png"
import figmaword from "../imgs/figmaword.png"
import javascript from "../imgs/javascript.png"
import javascriptword from "../imgs/javascriptword.png"
import node from "../imgs/node.png"
import nodeword from "../imgs/nodeword.png"
import postgres from "../imgs/postgres.png"
import postgresword from "../imgs/postgresword.png"
import reactimg from "../imgs/reactimg.png"
import reactword from "../imgs/reactword.png"
import redux from "../imgs/redux.png"
import reduxword from "../imgs/reduxword.png"
import sequelize from "../imgs/sequelize.png"
import sequelizeword from "../imgs/sequelizeword.png"
import typescript from "../imgs/typescript.png"
import typescriptword from "../imgs/typescriptword.png"
import wordpress from "../imgs/wordpress.png"
import wordpressword from "../imgs/wordpressword.png"
import java from "../imgs/java.png"
import javaword from "../imgs/javaword.png"
import python from "../imgs/python.png"
import pythonword from "../imgs/pythonword.png"
import docker from "../imgs/docker.png"
import dockerword from "../imgs/dockerword.png"
import { useSelector } from "react-redux";


function Skills() {

    const {darkMode, lang} = useSelector(state => state)

    const mode = darkMode? "darkletter" : "lightletter"

    let skills = [
        {
            logo: css,
            name: cssword
        },
        {
            logo: express,
            name: expressword
        },
        {
            logo: figma,
            name: figmaword
        },
        {
            logo: javascript,
            name: javascriptword
        },
        {
            logo: node,
            name: nodeword
        },
        {
            logo: postgres,
            name: postgresword
        },
        {
            logo: reactimg,
            name: reactword
        },
        {
            logo: redux,
            name: reduxword
        },
        {
            logo: docker,
            name: dockerword
        },
        {
            logo: sequelize,
            name: sequelizeword
        },
        {
            logo: typescript,
            name: typescriptword
        },
        {
            logo: wordpress,
            name: wordpressword
        },
        {
            logo: java,
            name: javaword
        },
        {
            logo: python,
            name: pythonword
        }
    ]


    return (
        <div className="skills">
            <img className={`imgtitle ${mode}`} src={lang == "EN" ? skillsbutton : skillsbuttonES} alt="" />
            <br />
            <div className="skillsContainer">
            {skills.map(e => {
                return (
                    <div className="skillCard">
                    <img className={`skillLogo ${darkMode?"darkimage" : false}`} src={e.logo} alt="" />
                    <div >
                    <img className={`skillName ${mode}`} src={e.name} alt="" />
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default Skills;