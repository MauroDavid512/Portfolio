import React from "react";
import "./Experience.css";
import experiencebutton from "../imgs/experiencebutton.png";
import experiencebuttonES from "../imgs/experiencebuttonES.png";
import ExperienceCard from "./ExperienceCard";
import css from "../imgs/css.png";
import express from "../imgs/express.png";
import figma from "../imgs/figma.png";
import javascript from "../imgs/javascript.png";
import node from "../imgs/node.png";
import postgres from "../imgs/postgres.png";
import reactimg from "../imgs/reactimg.png";
import redux from "../imgs/redux.png";
import sequelize from "../imgs/sequelize.png";
import typescript from "../imgs/typescript.png";
import wordpress from "../imgs/wordpress.png";
import java from "../imgs/java.png";
import python from "../imgs/python.png";
import docker from "../imgs/docker.png";
import { useSelector } from "react-redux";
import fullstack from "../imgs/fullstack.png";
import frontend from "../imgs/frontend.png";
import backend from "../imgs/backend.png";
import noITimg from "../imgs/noIT.png";
import noITES from "../imgs/noITES.png";
import { useEffect, useRef, useState } from "react";

function Experience() {
  const { darkMode, lang } = useSelector((state) => state);
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = experienceRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const exp = [
    {
      title: "Wildcat Media",
      date: "Apr-2024 Present",
      dateES: "Abr-2024 Actualidad",
      description:
        "Development and maintenance of product-oriented applications, internal platforms and event websites, with a focus on React, Next.js and TypeScript. I implement responsive interfaces and reusable components from designs and requirements, integrate APIs and authentication with NextAuth/Auth.js, manage Vercel deployments, and work with analytics, monitoring and production debugging. Projects include eDays, SVANT, Quanta, Proshale, Stak and Versa.",
      descriptionES:
        "Desarrollo y mantenimiento de aplicaciones orientadas a producto, plataformas internas y sitios de eventos, con foco en React, Next.js y TypeScript. Implemento interfaces responsive y componentes reutilizables a partir de diseños y requerimientos, integro APIs y autenticación con NextAuth/Auth.js, gestiono despliegues en Vercel y trabajo con analítica, monitoreo y debugging de producción. Proyectos: eDays, SVANT, Quanta, Proshale, Stak y Versa.",
      abilities: [
        css,
        typescript,
        javascript,
        node,
        postgres,
        reactimg,
        redux,
        figma,
        docker,
      ],
      image: "",
      category: "fullstack",
    },
    {
      title: "Surco",
      date: "Feb-2025 Jun-2026",
      dateES: "Feb-2025 Jun-2026",
      description:
        "Designed and developed a management platform for fruit producers, covering fields, quality, stock and sales. Built the REST API and backend architecture with Node.js, TypeScript, Express, Prisma and PostgreSQL, including authentication, permissions, validation, filters, sorting and pagination. Also developed web interfaces and a React Native/Expo mobile app for operational use in the field.",
      descriptionES:
        "Diseñé y desarrollé una plataforma de gestión para productores frutícolas, con módulos de campo, calidad, stock y ventas. Construí la arquitectura backend y la API REST con Node.js, TypeScript, Express, Prisma y PostgreSQL, incluyendo autenticación, permisos, validaciones, filtros, ordenamiento y paginación. También desarrollé interfaces web y una aplicación mobile con React Native/Expo para uso operativo en finca.",
      abilities: [
        css,
        typescript,
        javascript,
        node,
        postgres,
        reactimg,
        docker,
      ],
      image: "",
      category: "fullstack",
      links: [
        {
          type: "Project",
          typeES: "Proyecto",
          link: "https://github.com/MauroDavid512",
        },
      ],
    },
    {
      title: "Emotionall",
      date: "Professional project",
      dateES: "Proyecto profesional",
      description:
        "Full Stack and mobile development for a product focused on authentication, API consumption, notifications and user experience. Implemented Android features with Jetpack Compose, Hilt and Retrofit, with Firebase and OneSignal integrations, alongside React and REST APIs.",
      descriptionES:
        "Desarrollo full stack y mobile de un producto enfocado en autenticación, consumo de APIs, notificaciones y experiencia de usuario. Implementé funcionalidades Android con Jetpack Compose, Hilt y Retrofit, integraciones con Firebase y OneSignal, además de trabajo con React y APIs REST.",
      abilities: [reactimg, java, wordpress],
      image: "",
      category: "fullstack",
      links: [
        {
          type: "Deploy",
          typeES: "Sitio",
          link: "https://emotionall.co/",
        },
      ],
    },
    {
      title: "Liga Mendocina de Improvisación",
      date: "Oct-2022 Dec-2022",
      dateES: "Oct-2022 Dic-2022",
      description:
        "Built the official website, an independent ticket sales system, content administration and frontend/backend functionality.",
      descriptionES:
        "Desarrollé el sitio oficial, un sistema independiente de venta de entradas, administración de contenidos y funcionalidades de frontend y backend.",
      abilities: [
        css,
        express,
        javascript,
        node,
        postgres,
        reactimg,
        redux,
        sequelize,
      ],
      image: "",
      category: "fullstack",
      links: [
        {
          type: "Deploy",
          typeES: "Sitio",
          link: "https://lmi-frontt.vercel.app/",
        },
        {
          type: "Respository",
          typeES: "Repositorio",
          link: "https://github.com/MauroDavid512",
        },
      ],
    },
    {
      title: "NoCountry",
      date: "Mar-2023 Jun-2023",
      dateES: "Mar-2023 Jun-2023",
      description:
        "Backend development for a delivery application, including the database, orders, users, restaurants, meals and shopping cart.",
      descriptionES:
        "Desarrollo backend para una aplicación de delivery, incluyendo base de datos, pedidos, usuarios, restaurantes, comidas y carrito.",
      abilities: [express, javascript, node, postgres, sequelize],
      image: "",
      category: "back",
      links: [
        {
          type: "Respository",
          typeES: "Respositorio",
          link: "https://github.com/No-Country/c10-51-ft-reactchallenge",
        },
      ],
    },
    {
      title: "La Reserva",
      date: "Henry Bootcamp 2022",
      dateES: "Henry Bootcamp 2022",
      description:
        "Sports complex app with searches, filters, tournaments, registrations, standings and top scorers. Built with React, Redux, Tailwind, Node.js, Express, PostgreSQL and Sequelize.",
      descriptionES:
        "Aplicación para complejo deportivo con búsquedas, filtros, torneos, inscripciones, posiciones y goleadores. Desarrollada con React, Redux, Tailwind, Node.js, Express, PostgreSQL y Sequelize.",
      abilities: [
        css,
        express,
        javascript,
        node,
        postgres,
        reactimg,
        redux,
        sequelize,
      ],
      image: "",
      category: "front",
      links: [
        {
          type: "Deploy",
          typeES: "Sitio",
          link: "https://la-reserva.vercel.app/",
        },
      ],
    },
    {
      title: "Pokemon App",
      date: "Henry Bootcamp 2022",
      dateES: "Henry Bootcamp 2022",
      description:
        "Full stack app with searches, filters, sorting, API consumption and its own persistence layer.",
      descriptionES:
        "Aplicación full stack con búsquedas, filtros, ordenamiento, consumo de API y persistencia propia.",
      abilities: [
        express,
        javascript,
        node,
        postgres,
        reactimg,
        redux,
        sequelize,
      ],
      image: "",
      category: "front",
    },
  ];

  const expFilter = (category) => {
    let expFiltered = exp.filter((e) => e.category === category);
    return expFiltered;
  };

  const fsExp = expFilter("fullstack");
  const frontExp = expFilter("front");
  const backExp = expFilter("back");
  const noIT = expFilter("noIT");

  return (
    <div ref={experienceRef} className="initanimation">
      <img
        className={`imgtitle ${darkMode ? "darkletter" : "lightletter"}`}
        src={lang === "EN" ? experiencebutton : experiencebuttonES}
        alt=""
      />

      <div
        className={`selector ${isVisible ? "selectorVisible" : "selectorHidden"}`}
      >
        {[
          {
            title:
              lang === "EN" ? "Front-End Experience" : "Experiencia Front-End",
            category: "front",
          },
          {
            title:
              lang === "EN" ? "Back-End Experience" : "Experiencia Back-End",
            category: "back",
          },
          ...(noIT.length !== 0
            ? [
                {
                  title:
                    lang === "EN" ? "No IT Experience" : "Experiencia no IT",
                  category: "noIT",
                },
              ]
            : []),
        ].map((e) => {
          return (
            <a href={`#${e.category}`}>
              <div className="paperButton">{e.title}</div>
            </a>
          );
        })}
      </div>
      <div className="experienceContainer">
        {fsExp.length !== 0 ? (
          <img
            id="fullstack"
            className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`}
            src={fullstack}
            alt=""
          />
        ) : null}
        {fsExp.map((e) => {
          return (
            <div
              className={`rotate${parseInt(fsExp.findIndex((ele) => ele.title === e.title)) % 2}`}
            >
              <ExperienceCard
                title={e.title}
                date={lang === "EN" ? e.date : e.dateES}
                description={lang === "EN" ? e.description : e.descriptionES}
                abilities={e.abilities}
                image={e.image}
                links={e.links}
              />
            </div>
          );
        })}
        <img
          id="front"
          className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`}
          src={frontend}
          alt=""
        />
        {frontExp.map((e) => {
          return (
            <div
              className={`rotate${parseInt(frontExp.findIndex((ele) => ele.title === e.title)) % 2}`}
            >
              <ExperienceCard
                title={e.title}
                date={lang === "EN" ? e.date : e.dateES}
                description={lang === "EN" ? e.description : e.descriptionES}
                abilities={e.abilities}
                image={e.image}
                links={e.links}
              />
            </div>
          );
        })}
        <img
          id="back"
          className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`}
          src={backend}
          alt=""
        />
        {backExp.map((e) => {
          return (
            <div
              className={`rotate${parseInt(backExp.findIndex((ele) => ele.title === e.title)) % 2}`}
            >
              <ExperienceCard
                title={e.title}
                date={lang === "EN" ? e.date : e.dateES}
                description={lang === "EN" ? e.description : e.descriptionES}
                abilities={e.abilities}
                image={e.image}
                links={e.links}
              />
            </div>
          );
        })}
        {noIT.length !== 0 ? (
          <>
            <img
              id="noIT"
              className={`categoryTitle ${darkMode ? "darkletter" : "lightletter"}`}
              src={lang === "EN" ? noITimg : noITES}
              alt=""
            />
            {noIT.map((e) => {
              return (
                <div
                  className={`rotate${parseInt(noIT.findIndex((ele) => ele.title === e.title)) % 2}`}
                >
                  <ExperienceCard
                    title={e.title}
                    date={lang === "EN" ? e.date : e.dateES}
                    description={lang === "EN" ? e.description : e.descriptionES}
                    abilities={e.abilities}
                    image={e.image}
                    links={e.links}
                  />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
      <div className="bottomspace"></div>
    </div>
  );
}

export default Experience;
