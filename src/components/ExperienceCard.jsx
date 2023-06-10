import React from "react";
import "./ExperienceCard.css"

function ExperienceCard(props) {

    return (
        <div className="experienceCard">
            <div className="titleExp">
                <div>
                    {props.title}
                </div>
                <div>
                    {props.date}
                </div>
            </div>
            <br />
            {props.image ? <img src={props.image} alt="" /> : false}
            {props.description}
            <br />
            {props.abilities.map(e => <img className="littleIcon" src={e} alt="" />)}
            <br />
            <div className="linksContainer">
            {props.links?.map(e => {
                return (
                    <a target="_blank" href={e.link}><div className="linkbtn paperButton">{e.type}</div></a>
                )
            })}
            </div>

        </div>
    );
}

export default ExperienceCard;