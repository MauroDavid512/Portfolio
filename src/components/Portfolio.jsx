import React from "react";
import "./Portfolio.css";
import portfoliobutton from "../imgs/portfoliobutton.png";
import portfoliobuttonES from "../imgs/portfoliobuttonES.png";
import reserva from "../imgs/reserva.png";
import veroport from "../imgs/veroport.png";
import svant from "../imgs/Portada Svant.png";
import emotionall from "../imgs/emotionall web portada.png";
import "./initanimation.css";
import { useSelector } from "react-redux";

function Portfolio() {
  const { darkMode, lang } = useSelector((state) => state);

  let content = [
    {
      title: "SVANT",
      link: "https://svant.us/",
      image: svant,
      description: "React, Redux, ECharts, ApexCharts, Sass and Sentry.",
    },
    {
      title: "Emotionall",
      link: "https://emotionall.co",
      image: emotionall,
      description:
        "Web and mobile product development with React, Kotlin, Jetpack Compose, Firebase and OneSignal.",
    },
    {
      title: "La Reserva",
      link: "https://la-reserva.vercel.app/",
      image: reserva,
      description: "Full stack sports complex app built during Henry Bootcamp.",
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
      description: "Responsive portfolio with gallery and actor reel.",
    },
  ];

  return (
    <div className="initanimation">
      <img
        className={`imgtitle ${darkMode ? "darkletter" : "lightletter"}`}
        src={lang === "EN" ? portfoliobutton : portfoliobuttonES}
        alt=""
      />

      <div className="cardcontainer">
        {content.map((e) => {
          return (
            <a className="card" target="_blank" href={e.link}>
              <img className="cardimg" src={e.image} alt={e.title} />
              <div className="cardtitle">{e.title}</div>
              <div className="carddescription">{e.description}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
